import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router';

const ConfirmOrder = () => {
  
  const { id } = useLocalSearchParams();
  // subservice - providerID
  return (
    <View>
      <Text>{id}</Text>
    </View>
  )
}

export default ConfirmOrder

const styles = StyleSheet.create({})