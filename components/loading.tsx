import { StyleSheet, View } from 'react-native'
import React from 'react'
import { images } from '@/constants/icons'
import {Image} from 'expo-image';

const Loading = () => {
  return (
    <View style={styles.container}>
      <Image style={{width:50, height:50}} source={{uri:"https://i.gifer.com/VAyR.gif"}}/>
    </View>
  )
}

export default Loading

const styles = StyleSheet.create({
    container: {
        zIndex: 1001,
        position:"absolute",
        top:"50%",
        left:"50%",
    }
})