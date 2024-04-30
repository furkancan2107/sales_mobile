import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { loginUser } from '../server/api'; // loginUser fonksiyonunu server/api klasöründen alın
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import RNRestart from 'react-native-restart';


const LoginPage = () => {
    const [body, setBody] = useState({});
    const [error, setError] = useState("");
    const [isLogin,setIsLogin] = useState(false); 
    const navigation = useNavigation();

    const checkLoginStatus = async () => {
        try {
            const value = await AsyncStorage.getItem('isLogin');
            if (value !== null && value === "true") {
                setIsLogin(true);
            }
        } catch (error) {
            console.error('AsyncStorage error: ', error);
        }
    };
  
    useEffect(() => {
        const interval = setInterval(() => {
            checkLoginStatus();
  }, 5000); 

  
  return () => clearInterval(interval);
      
    }, []);

    const inputChange = (name, value) => {
        setBody({ ...body, [name]: value });
        setError("");
    }

    const buttonClick = async () => {
        await loginUser(body)
            .then((res) => {
                console.log(res);
              if (res.status == 200) {
                  
                    Alert.alert("Giriş Başarılı");
                    AsyncStorage.setItem('isLogin', "true"); 
                    AsyncStorage.setItem('id', JSON.stringify(res.data));
                  setIsLogin(true);
                  
                }
            })
            .catch((err) => {
                setError("Email veya Şifre yanlış");
            });
    }

    const handleSignUp = () => {
        navigation.navigate("Kayıt ol");
    };

    return (
        <View style={styles.container}>
            {isLogin ? <Text>Zaten giriş yaptın</Text> :
            <View>
                {error !== "" && 
                <View style={styles.errorContainer}>
                    <Text style={styles.errorText}>{error}</Text>
                </View>}
                <Text style={styles.title}>Giriş Yap</Text>
                <TextInput
                    onChangeText={(text) => inputChange("email", text)}
                    style={styles.input}
                    placeholder='Email'
                />
                <TextInput
                    onChangeText={(text) => inputChange("password", text)}
                    style={styles.input}
                    placeholder='Şifre'
                    secureTextEntry={true}
                />
                <Button color={'white'} title='Giriş' onPress={buttonClick} />
            </View>}
            <TouchableOpacity style={styles.link} onPress={handleSignUp}>
                <Text>Kayıt Ol</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        paddingTop: 150,
    },
    title: {
        marginBottom: 25,
        textAlign: 'center',
        fontSize: 25,
    },
    input: {
        width: 270,
        height: 50,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 10,
        marginBottom: 10,
        paddingHorizontal: 10,
        backgroundColor: '#fff',
    },
    link: {
        marginRight: 200,
        marginTop: 20,
        alignItems: 'flex-start'
    },
    errorContainer: {
        backgroundColor: 'red',
        padding: 10,
        marginBottom: 10,
        borderRadius: 10,
    },
    errorText: {
        color: 'white',
    },
});

export default LoginPage;
