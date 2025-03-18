import {
  Pressable,
  StyleSheet,
  Text,
  View,
  ViewStyle,
  Image,
  ImageBackground,
  ImageSourcePropType,
} from "react-native";
import React from "react";
import { images } from "@/constants/icons";
import { router } from "expo-router";
import { colors } from "@/constants/colors";

interface SigningOptionsProps {
  title: string;
  route: string;
  src: ImageSourcePropType;
}
const SigningOption = ({ title, src, route }: SigningOptionsProps) => {
  return (
    
    <Pressable style={styles.container} onPress={() => { router.replace(`/${route}`)}}>
      <ImageBackground source={src} style={styles.signingIcon}>

      <Text style={styles.text}>{title}</Text>
      </ImageBackground>
    </Pressable>
    
  );
};

export default SigningOption;

const styles = StyleSheet.create({
  container: {
    borderRadius:15,
    backgroundColor:colors.DARKER_SELECTED,
    margin:50,
    padding:15,
    borderWidth:2,
  },
  signingIcon: {
    width: 192,
    height: 192,
    justifyContent:"flex-end"
  },
  text: {
    fontWeight:"bold",
    textAlign:"center",
    fontSize:30,
    marginTop:10,
    color:"white",
    textShadowColor:colors.MID_GRAY,
    textShadowRadius:5,
    textShadowOffset: {width:3, height:3}
  },
});
