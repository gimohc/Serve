import {
  StyleSheet,
  Text,
  View,
  ViewStyle,
  Pressable,
  ImageSourcePropType,
  Image,
} from "react-native";
import React from "react";
import { router } from "expo-router";
import { colors } from "@/constants/colors";

interface StoreCategoryProps {
  title: string;
  route: string;
  src: ImageSourcePropType;
  style?: ViewStyle;
}
const StoreCategory = ({ title, route, style, src }: StoreCategoryProps) => {
  return (
    <Pressable
      style={[styles.container, style]}
      onPress={() => {
        router.replace(`/${route}`);
      }}
    >
      <View style={styles.components}>
        <Image source={src} style={styles.icon} />

        <Text style={styles.text}> {title + "\n"} Services </Text>
      </View>
    </Pressable>
  );
};

export default StoreCategory;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.MID_GRAY,
    padding: 10,
    margin: 5,
    width: "31%",
    height: "auto",
    borderRadius: "10%",
  },
  components: {
    alignItems: "center",
    margin: "auto",
  },
  icon: {
    width: 54,
    height: 54,
  },
  text: {
    textAlign: "center",
    fontWeight: "bold",
    color: "white",
    marginTop:-5,
  },
});
