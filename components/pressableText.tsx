import { Pressable, StyleSheet, Text } from "react-native";
import React from "react";
import { router } from "expo-router";

interface PressableTextProps {
  text: string;
  route: string;
}
const PressableText = ({ text, route }: PressableTextProps) => {
  return (
    <Pressable style={styles.container} onPress={() => {router.replace(`./${route}`)}}>
      <Text style={styles.text}>{text}</Text>
    </Pressable>
  );
};

export default PressableText;

const styles = StyleSheet.create({
  container: {
    marginTop: 15,
  },
  text: {
    textAlign: "center",
    textDecorationStyle: "solid",
    textDecorationLine: "underline",
    textDecorationColor: "black",
  },
});
