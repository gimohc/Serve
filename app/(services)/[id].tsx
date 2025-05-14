import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router';


// local params return the type of sub service for backend request of available stores
const Stores = () => {
  const { id } = useLocalSearchParams();
  return (
    <View>
      <Text>Stores</Text>
    </View>
  )
}

export default Stores

const styles = StyleSheet.create({})