import { StyleSheet, Text, TextInput, View } from 'react-native'
import React, { Dispatch, SetStateAction } from 'react'
import { colors } from '@/constants/colors';


interface InputProps {
    title: string;
    value: string;
    setValue: Dispatch<SetStateAction<string>>;
}
export default function Input( { title, value, setValue } : InputProps) {
  return (
    <View style={styles.container}>
      <Text style={[styles.label, styles.text]}>{title}</Text>
      <TextInput style={[styles.input, styles.text]}  value={value} onChangeText={setValue}/>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"center",
        margin:5,
        marginRight:15,
        
    },
    input: {
        borderBottomWidth:1,
        backgroundColor: colors.UNSELECTED_PRIMARY,
    },
    label: {
        marginRight:10,
        textAlign:"right",
    },
    text: {
        flex:1,
        fontSize:20,
        fontWeight:"bold",
    }
})