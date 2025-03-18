import CustomButton from "@/components/button";
import Input from "@/components/input";
import MainMenuArrow from "@/components/mainMenuArrow";
import PressableText from "@/components/pressableText";
import { colors } from "@/constants/colors";
import { router } from "expo-router";
import React, { useState } from "react";
import { View, StyleSheet } from "react-native";

function Login() {
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  return (
    <>
      <MainMenuArrow />
      <View style={styles.container}>
        <Input
          title="Phone Number"
          value={phoneNumber}
          setValue={setPhoneNumber}
        />
        <Input title="Password" value={password} setValue={setPassword} />
        <CustomButton title="Log in" style={styles.button} onPress={() => {}} />

        <PressableText text="Don't have an account?" route="./register" />
        <PressableText text="Forgot password?" route="(auth)/forgotPassword" />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "50%",
    margin: "auto",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.SELECTED_PRIMARY,
  },
  button: {
    width: "25%",
    backgroundColor: colors.DARK_GRAY,
  },
});
export default Login;
