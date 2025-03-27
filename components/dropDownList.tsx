import { Pressable, StyleSheet, Text, View, ViewStyle } from "react-native";
import React, { Dispatch, SetStateAction, useState } from "react";
import Input from "./input";

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
      {showOptions && <View style={styles.options}>
          {objectKeys.map((key) => {
            const dictionaryValue = items[key];
            return (
              <Pressable disabled={dictionaryValue==null} onPress={() => {
                setValue(dictionaryValue);
                setShowOptions(false);
                

              }}>
                <Text> {key} </Text>
              </Pressable>
            );
          })}
        </View>}
    </View>
  );
};

export default DropDownList;

const styles = StyleSheet.create({
  container: {},
  options: {
    zIndex: 1,
  },
});
