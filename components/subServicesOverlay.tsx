import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const SubServicesOverlay = () => {
  return (
    <View style={styles.container}>
      <Text>subServicesOverlay</Text>
      <Text>subServicesOverlay</Text>
      <Text>subServicesOverlay</Text>
      <Text>subServicesOverlay</Text>
      <Text>subServicesOverlay</Text>
    </View>
  )
}

export default SubServicesOverlay

const styles = StyleSheet.create({
    container: {
        backgroundColor: "rgba(126,126,126,0.5)",
        position:"fixed",
        bottom:0,
        zIndex:1,
        width:"100%",
        height:"50%",
    

    }
})