import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ChatArea = () => {
  return (
    <ScrollView style={styles.container}>
      <Text>ChatArea</Text>
    </ScrollView>
  )
}

export default ChatArea

const styles = StyleSheet.create({
    container: {
        paddingTop:40,
        backgroundColor:"#00f"
    },
})