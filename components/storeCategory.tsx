import {
  StyleSheet,
  Text,
  View,
  ViewStyle,
  Pressable,
  ImageSourcePropType,
  Image,
} from "react-native";
import React, { Dispatch, SetStateAction } from "react";
import { colors } from "@/constants/colors";

interface StoreCategoryProps {
  title: string;
  src: ImageSourcePropType;
  style?: ViewStyle;
  setSubServicesShown: Dispatch<SetStateAction<String[] | null>>;
  subServicesList?: string[];
}
const StoreCategory = ({
  title,
  style,
  src,
  setSubServicesShown,
  subServicesList,
}: StoreCategoryProps) => {
  return (
    <Pressable
      style={[styles.container, style]}
      onPress={() => {
        setSubServicesShown(subServicesList ? subServicesList : null);
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
    padding: 7,
    marginVertical: "1%",
    marginHorizontal: "1%",
    height: 180,
    borderRadius: "10%",
    flex: 1,
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
  },
});
