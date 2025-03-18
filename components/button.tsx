import { StyleSheet, Text, TouchableOpacity, ViewStyle } from "react-native";
import React from "react";
import { colors } from "@/constants/colors";

interface ButtonProps {
  title: string;
  style?: ViewStyle;
  onPress: () => void;
}
const CustomButton = ({ title, style, onPress }: ButtonProps) => {
  return (
    <TouchableOpacity style={[styles.container, style]} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  container: {
    borderRadius: 15,
    marginTop: 10,
    padding: 10,
  },
  text: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 20,
    color: colors.WHITE,
  },
});
