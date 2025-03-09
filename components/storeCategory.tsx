import { StyleSheet, Text, View, ViewStyle, Pressable, ImageSourcePropType, Image } from "react-native";
import React from "react";
import { router } from "expo-router";

interface StoreCategoryProps {
  title: string;
  route: string;
  src: ImageSourcePropType;
  style?: ViewStyle;

}
const StoreCategory = ({ title, route, style, src }: StoreCategoryProps) => {
  return (
    <Pressable
      style={[style, styles.container]}
      onPress={() => {
        router.replace(`/${route}`);
      }}
    >
      <View style={styles.components}>
        <Image source={src} style={styles.icon} />
        <Text style={styles.text}> {title + "\n" } Services </Text>
      </View>
    </Pressable>
  );
};

export default StoreCategory;

const styles = StyleSheet.create({
  container: {
    backgroundColor:"#0000ff",
    flex:1,
    padding:7,
    margin:5,
  },
  components: {
    alignItems:"center",
    margin:"auto",
  },
  icon: {
    width:54,
    height:54,
  },
  text: {
    textAlign:"center",

  }
});
