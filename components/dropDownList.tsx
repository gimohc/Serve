import { Pressable, StyleSheet, Text, TextStyle, View, ViewStyle } from "react-native";
import React, { Dispatch, SetStateAction, useState } from "react";
import Input from "./input";
import { colors } from "@/constants/colors";
import Seperator from "./seperator";

interface DropDownListProps<T extends boolean | string | null> {
  items: { [key: string]: T };
  title: string;
  style?: ViewStyle;
  textStyle?: TextStyle;
  value: T;
  setValue: Dispatch<SetStateAction<T>>;
}
export const findKeyByValue = <T extends boolean | string | null>(
 
  object: { [key: string]: T },
  value: string | boolean | null
) => {
  return Object.keys(object).find((key) => object[key] === value);
};
const DropDownList = <T extends boolean | string | null>({
  items,
  title,
  style,
  value,
  setValue,
  textStyle
}: DropDownListProps<T>) => {
  const [showOptions, setShowOptions] = useState<boolean>(false);
  const objectKeys = Object.keys(items);

  return (
    <View style={[style, styles.container]}>
      <Pressable
        onPress={() => {
          setShowOptions((b) => !b);
        }}
      >
        <Input
          textStyle={textStyle}
          center
          title={title}
          value={findKeyByValue(items, value)}
          disabled
        />
      </Pressable>
      {showOptions && (
        <View style={styles.optionsContainer}>
          {objectKeys.map((key) => {
            const disabled = items[key] == null;
            return (
              <Pressable
                disabled={disabled}
                onPress={() => {
                  setValue(items[key]);
                  setShowOptions(false);
                }}
                key={key}
              >
                <Text style={[styles.optionText, disabled && styles.disabled]}>
                  {" "}
                  {key}{" "}
                </Text>
                <Seperator style={{ width: "100%" }} />
              </Pressable>
            );
          })}
        </View>
      )}
    </View>
  );
};

export default DropDownList;

const styles = StyleSheet.create({
  container: {},
  optionsContainer: {
    position: "absolute",
    zIndex: 1,
    borderWidth: 1,
    marginTop: -5,
    backgroundColor: "white",
    top: "100%",
    borderRadius: 15,
    alignSelf: "center",
  },
  disabled: {
    textDecorationLine: "line-through",
    textDecorationStyle: "solid",
    textDecorationColor: colors.MID_GRAY,
    color: colors.MID_GRAY,
  },
  optionText: {
    fontSize: 15,
    textAlign: "center",
    fontWeight: "bold",
    padding: 8,
  },
});
