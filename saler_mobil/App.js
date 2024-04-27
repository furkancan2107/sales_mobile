import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './HomeScreen';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';

const Drawer = createDrawerNavigator();



const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Profile Screen</Text>
    </View>
  );
}
export default function App() {
  const getLoginStatus = async () => {
  try {
    const isLogin = await AsyncStorage.getItem('isLogin');
    return isLogin;
  } catch (error) {
    console.error('Error getting login status:', error);
    return null;
  }
};
  const isLogin = true
  console.log(isLogin)
  return (
    <NavigationContainer>
      {
        isLogin==true ?<Drawer.Navigator initialRouteName="Anasayfa">
            <Drawer.Screen name="Anasayfa" component={HomeScreen} />
            <Drawer.Screen name="Ürünlerim" component={HomeScreen} />
            <Drawer.Screen name="Siparişlerim" component={HomeScreen} />
            <Drawer.Screen name="Gelen Siparişler" component={HomeScreen} />
            <Drawer.Screen name="Ürün Ekle" component={HomeScreen} />
            <Drawer.Screen name="Sepetim" component={HomeScreen} />
        <Drawer.Screen name="Çıkış Yap" component={ProfileScreen} />
        
      </Drawer.Navigator> : <Drawer.Navigator initialRouteName="Anasayfa">
        <Drawer.Screen name="Anasayfa" component={HomeScreen} />
        <Drawer.Screen name="Giriş Yap" component={LoginPage} />
        <Drawer.Screen  name="Kayıt ol" component={RegisterPage} />
      </Drawer.Navigator> 
      }
      
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
