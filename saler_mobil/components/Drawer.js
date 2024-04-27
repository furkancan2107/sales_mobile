import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Drawer } from 'expo-router/Drawer';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

export default function Drawer() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer>
        <Drawer.Screen
          name="home" 
          options={{
            drawerLabel: 'Home',
            title: 'overview',
          }}
        />
       
      </Drawer>
    </GestureHandlerRootView>
  )
}

const styles = StyleSheet.create({})