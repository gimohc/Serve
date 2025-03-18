import { Pressable, StyleSheet, Text, Image } from "react-native";
import React from "react";
import { router } from "expo-router";
import { images } from "@/constants/icons";
import { colors } from "@/constants/colors";

const MainMenuArrow = () => {
  return (
    <Pressable
      style={styles.container}
      onPress={() => {
        router.replace(`../(tabs)/marketplace`); 
      }}
    >
      <Image source={images.backArrow} style={styles.image} />
      <Text style={styles.text}> Return to main menu </Text>
    </Pressable>
  );
};

export default MainMenuArrow;

const styles = StyleSheet.create({
  container: {
    marginTop: 5,
    flexDirection: "row",
    width: "25%",
    position: "absolute",
    top: 0,
    left: 0,
  },
  image: {
    marginLeft: 5,
    marginRight: 5,
    width: 42,
    height: 42,
  },
  text: {
    color: colors.DARK_GRAY,
    fontWeight: "bold",
    fontSize: 18,
    textDecorationColor: colors.DARK_GRAY,
    textDecorationLine: "underline",
    textDecorationStyle: "solid",
  },
});