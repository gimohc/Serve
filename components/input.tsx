import { KeyboardTypeOptions, StyleSheet, Text, TextInput, TextStyle, View, ViewStyle } from "react-native";
import React, { Dispatch, SetStateAction } from "react";
import { DateType } from "react-native-ui-datepicker";

interface InputProps {
  title: string;
  value: string | boolean | undefined ;
  setValue?: Dispatch<SetStateAction<string>> |  Dispatch<SetStateAction<DateType>> ;
  disabled?: true;
  style?:ViewStyle;
  center?:true;
  keyboardType?:KeyboardTypeOptions;
  password?:true;
  
}
export default function Input({
  title,
  value,
  setValue,
  disabled,
  style,
  center,
  keyboardType,
  password
}: InputProps) {
  return (
    <View style={[style, styles.container]}>
      <Text style={[styles.text]}>{title}</Text>
      <TextInput
        readOnly={disabled}
        style={[center && { textAlign:"center" }, styles.input, styles.text]}
        value={value?.toString()}
        onChangeText={setValue}
        keyboardType={keyboardType}
        secureTextEntry={password}

      />
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 5,
    marginRight: 15,
  
  },
  input: {
    borderRadius: 15,
    borderWidth: 1,
    padding: 10,
  },
  text: {
    paddingLeft:10,
    fontSize: 16,
    fontWeight: "bold",
  },
});
