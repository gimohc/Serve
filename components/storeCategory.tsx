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
  disabled?: true;
}
const StoreCategory = ({
  title,
  route,
  style,
  src,
  disabled,
}: StoreCategoryProps) => {

  return (
    <Pressable
      disabled={disabled}
      style={[styles.container, style]}
      onPress={() => {
        router.navigate(`../${route}`);
      }}
    >
      <View style={styles.components}>
        <Image source={src} style={styles.icon} />

        <Text style={styles.text}> {title} </Text>
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
    flex: 1,
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
    marginTop: -5,
  },
});
