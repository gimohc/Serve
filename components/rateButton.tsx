import { Pressable, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { colors } from "@/constants/colors";
import { router } from "expo-router";

interface RateButtonProps {
  orderID: number;
}

const RateButton = ({ orderID }: RateButtonProps) => {
  const [bgColor, setBgColor] = useState(colors.DARKER_PRIMARY);
  return (
    <Pressable
      style={[styles.button, { backgroundColor: bgColor }]}
      onPressIn={() => {
        setBgColor(colors.SELECTED_PRIMARY);
      }}
      onPressOut={() => {
        setBgColor(colors.DARKER_PRIMARY);
      }}
      onPress={() => {
        router.replace(`./rating/${orderID}`);
      }}
    >
      <View>
        <Text style={styles.text}>Rate Service</Text>
      </View>
    </Pressable>
  );
};

export default RateButton;

const styles = StyleSheet.create({
  button: {
    borderRadius: 15,
    paddingHorizontal: 15,
    paddingVertical: 10,
    width: "70%",
    marginLeft: "15%",
  },
  text: {
    fontSize: 16,
    color: "white",
    textShadowColor: "black",
    textShadowRadius: 10,
    textShadowOffset: { width: 4, height: 4 },

    fontWeight: "bold",
    textAlign: "center",
  },
});
