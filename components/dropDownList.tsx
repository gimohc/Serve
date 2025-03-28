import { Pressable, StyleSheet, Text, View, ViewStyle } from "react-native";
import React, { Dispatch, SetStateAction, useState } from "react";
import Input from "./input";
import { colors } from "@/constants/colors";
import Seperator from "./seperator";

interface DropDownListProps<T extends boolean | string | null> {
  items: { [key: string]: T };
  title: string;
  style?: ViewStyle;
  value: T;
  setValue: Dispatch<SetStateAction<T>>;
}
// needs more work
const DropDownList = <T extends boolean | string | null>({
  items,
  title,
  style,
  value,
  setValue,
}: DropDownListProps<T>) => {
  const [showOptions, setShowOptions] = useState<boolean>(false);
  const objectKeys = Object.keys(items);

  const findKeyByValue = (value: string | boolean | null) => {
    return objectKeys.find((key) => items[key] === value);
  };

  return (
    <View style={[style, styles.container]}>
      <Pressable
        onPress={() => {
          setShowOptions((b) => !b);
        }}
      >
        <Input title={title} value={findKeyByValue(value)} disabled />
        
      </Pressable>
      {showOptions && <View style={styles.optionsContainer}>
          {objectKeys.map((key) => {
            const disabled = items[key] == null;
            return (
              <Pressable disabled={disabled} onPress={() => {
                setValue(items[key]);
                setShowOptions(false);
                

              }}>
                <Text style={[styles.optionText, disabled && styles.disabled]}> {key} </Text>
                <Seperator style={{width:"100%"}}/>
              </Pressable>
            );
          })}
        </View>}
    </View>
  );
};

export default DropDownList;

const styles = StyleSheet.create({
  container: {
    
  },
  optionsContainer: {
    position:"absolute",
    zIndex: 1,
    borderWidth:1,
    marginTop:-5,
    backgroundColor:"white",
    top:70,
    borderRadius:15,
  },
  disabled: {
    textDecorationLine:"line-through",
    textDecorationStyle:"solid",
    textDecorationColor:colors.MID_GRAY,
    color:colors.MID_GRAY
  },
  optionText: {
    fontSize:15,
    textAlign:"center",
    fontWeight:"bold",
    padding:8,

  }
});
