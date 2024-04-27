import { Button, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { TextInput, TouchableWithoutFeedback} from 'react-native-gesture-handler'
import { SafeAreaView } from 'react-native-safe-area-context'

import { useNavigation } from '@react-navigation/native'


export default function LoginPage() {
  const [body, setBody] = useState({email : '',password : ''});
  const navigation = useNavigation();
  const emailChange=(text) => {
    setBody({ ...body, email: text });
    console.log(body);
  }
  const passwordChange=(text) => {
    setBody({ ...body, password: text });
    console.log(body);
  }
    const loginClick=() => {
      
    }
    const handleSignUp = () => {
    navigation.navigate("Kayıt ol");
  };
  return (
    <SafeAreaView style={styles.container}>
          <View>
              <Text style={styles.title}>Giriş Yap</Text>
              <TextInput onChangeText={emailChange} style={styles.input} placeholder='Email'></TextInput>
              <TextInput onChangeText={passwordChange} style={styles.input} placeholder='Şifre'></TextInput>
              <Button color='white' title='Giriş ' onPress={loginClick}></Button>
             
          </View>
           <TouchableWithoutFeedback style={styles.link} onPress={handleSignUp} >
              <Text>Kayıt Ol</Text>
              
      </TouchableWithoutFeedback>
          
    </SafeAreaView>
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