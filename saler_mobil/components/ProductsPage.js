import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ProductsPage({ product }) {
  const { id, title, description, image, price, location, userId, user, datePosted } = product
  return (
    <View>
      <Text>{id}</Text>
    </View>
  )
}

const styles = StyleSheet.create({})