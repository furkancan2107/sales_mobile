import { Alert, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { deleteCart, listCart } from '../server/api';
import ProductsPage from '../components/ProductsPage';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ScrollView } from 'react-native-gesture-handler';
import CartListPage from '../components/CartListPage';

export default function CartPage() {
    const [products, setProducts] = useState([]);
    const [userId, setUserId] = useState(null);

    useEffect(() => {
        getUserID();
    }, []);

    const getUserID = async () => {
        try {
            const id = JSON.parse(await AsyncStorage.getItem('id'));
            setUserId(id);
            console.log("id: " + id);
        } catch (error) {
            console.error('Error getting user ID:', error);
        }
    };

    useEffect(() => {
       
        const interval = setInterval(() => {
     if(userId) {
            listCart(userId)
                .then((res) => {
                    setProducts(res.data);
                })
                .catch((err) => {
                    console.error("Error fetching products:", err);
                });
        }
  }, 5000); 

  
  return () => clearInterval(interval);
    }, [userId]);
     const handleDeleteFromCart = async (cartId) => {
        try {
            await deleteCart(cartId);
            // Yeniden listeleme
            listCart(userId)
                .then((res) => {
                    Alert.alert("Ürün Sepeten Kaldirildi")
                    setProducts(res.data);
                })
                .catch((err) => {
                    console.error("Error fetching products:", err);
                });
        } catch (error) {
            console.error("Error deleting product from cart:", error);
        }
    };

    return (
        <ScrollView>
            <Text>CartPage</Text>
            {
                products.map((product, index) => {
                    return <CartListPage key={index} cart={product} onDelete={handleDeleteFromCart} ></CartListPage>
                })
            }
        </ScrollView>
    )
}

const styles = StyleSheet.create({})
