import { StyleSheet, Text, TextInput, View } from "react-native";
import React, { Dispatch, SetStateAction, useState } from "react";
import { DateType } from "react-native-ui-datepicker";

interface InputProps {
  title: string;
  value: string | undefined;
  setValue: Dispatch<SetStateAction<string>> |  Dispatch<SetStateAction<DateType>>;
  disabled?: true;
  
}
export default function Input({
  title,
  value,
  setValue,
  disabled,
}: InputProps) {
  return (
    <View style={styles.container}>
      <Text style={[styles.label, styles.text]}>{title}</Text>
      <TextInput
        readOnly={disabled}
        style={[styles.input, styles.text]}
        value={value?.toString()}
        onChangeText={setValue}

      />
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    margin: 5,
    marginRight: 15,
  },
  input: {
    borderRadius: 20,
    borderWidth: 1,
    padding: 10,
    backgroundColor:"white"
  },
  label: {
    marginRight: 10,
    textAlign: "right",
  },
  text: {
    flex: 1,
    fontSize: 16,
    fontWeight: "bold",
  },
});
