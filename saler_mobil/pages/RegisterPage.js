import { Button, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { TextInput, TouchableWithoutFeedback } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'

export default function RegisterPage() {
  const [body, setBody] = useState({ username: '', email: '', password: '' })
  const usernameChange=(text) => {
    setBody({ ...body, username: text });
    console.log(body);
  }
  const emailChange=(text) => {
    setBody({ ...body, email: text });
    console.log(body);
  }
  const passwordChange=(text) => {
    setBody({ ...body, password: text });
    console.log(body);
  }
  const navigation = useNavigation();
  const registerClick=() => {
    
  }
  const handleLogin=() => {
    navigation.navigate("Giriş Yap")
  }
  return (
    <View>
        <SafeAreaView style={styles.container}>
          <View>
          <Text style={styles.title}>Kayıt Ol</Text>
          <TextInput onChangeText={usernameChange}  style={styles.input} placeholder='Kullanıcı Adı'></TextInput>
              <TextInput onChangeText={emailChange}  style={styles.input} placeholder='Email'></TextInput>
              <TextInput onChangeText={passwordChange} style={styles.input} placeholder='Şifre'></TextInput>
              <Button color='white' title='Kayıt' onPress={registerClick}></Button>
             
          </View>
           <TouchableWithoutFeedback style={styles.link}  >
              <Text onPress={handleLogin}>Giriş Yap</Text>
              
      </TouchableWithoutFeedback>
          
    </SafeAreaView>
    </View>
  )
}

const styles = StyleSheet.create({
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
    container : {
    alignItems : "center",
    paddingTop: 150,
    },
    link: {
        marginRight : 200,
        marginTop : 20,
        alignItems : 'flex-start'
    }
})