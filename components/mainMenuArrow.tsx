import { Pressable, StyleSheet, Image } from "react-native";
import React from "react";
import { router } from "expo-router";
import { images } from "@/constants/icons";

const MainMenuArrow = () => {
  return (
    <Pressable
      style={styles.container}
      onPress={() => {
        router.replace(`/(tabs)/marketplace`);
      }}
    >
      <Image source={images.backArrow} style={styles.image} />
    </Pressable>
  );
};

export default MainMenuArrow;

const styles = StyleSheet.create({
  container: {
    width: "25%",
    position: "absolute",
    top: 5,
    left: 5,
    zIndex: 1,
  },
  image: {
    width: 48,
    height: 48,
  },
});
