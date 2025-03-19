import { StyleSheet, Text, Pressable, Image } from 'react-native'
import React from 'react'
import { colors } from '@/constants/colors'
import { images } from '@/constants/icons'
import { router } from 'expo-router'

const SupportButton = () => {
  return (
    <Pressable style={styles.container} onPress={() => {router.replace('/(profile)/support')}}>
        <Image source={images.support} style={styles.icon}/>
      <Text style={styles.text}> Support </Text>
    </Pressable>
  )
}

export default SupportButton

const styles = StyleSheet.create({

    container: {
        flexDirection:"row",
        position:"absolute",
        top:1,
        right:1,
        backgroundColor:colors.UNSELECTED_PRIMARY,
        zIndex:1,
        borderRadius:20,
        padding:15,
    },
    icon :{ 
        width:28,
        height:28,
        marginRight:5,
    },
    text: {
        fontWeight:"bold",
        fontSize:16,
    }
    
    
})