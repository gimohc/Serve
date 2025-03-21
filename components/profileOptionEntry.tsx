import { ImageSourcePropType, Pressable, StyleSheet, Text, TextStyle, Image } from "react-native";
import React from "react";
import { router } from "expo-router";
import Seperator from "./seperator";

interface ProfileOptionProps {
  text: string;
  source: ImageSourcePropType;
  onPress?: () => void;
  route?: string;
  color?: string;
  seperator?: true;
}

const ProfileOption = ({ text, onPress, route, color, source, seperator }: ProfileOptionProps) => {
  return (
    <>
    <Pressable style={styles.container} onPress={() => {
      onPress;
      router.replace(`../${route}`)
    }}>
      <Image source={source} style={[styles.icon, { tintColor: color }]} />
      <Text style={[styles.text, {color:color}]}> {text} </Text>
    </Pressable>
    { seperator && <Seperator style={{ width: "90%" }} /> }
    </>
  );
};

export default ProfileOption;

const styles = StyleSheet.create({
  container: {
    paddingBottom: 10,
    paddingLeft: 25,
    marginVertical: 7,
    flexDirection:"row",
  },
  text: {
    fontWeight: "bold",
    fontSize:16,
  },
  icon: {
    width:24,
    height:24,
    marginRight:15,
  }
});
