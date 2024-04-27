import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ProductsPage from './components/ProductsPage';
import { getProducts } from './server/api';

export default function HomeScreen() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts()
      .then((res) => {
        console.log(res.data);
        setProducts(res.data);
      })
      .catch((err) => {
        console.error("Error fetching products:", err);
      });
  }, []);

  const renderProduct = ({ item }) => (
    <ProductsPage product={item} />
  );

  return (
    <View style={styles.input}>
       <Text>Burada Ürünler olacak</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    margin: 15,
    padding : 5,
    alignItems :'center',
    textAlign: 'center',
    width: '100%',
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
  },
});