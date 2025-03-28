import CustomButton from "@/components/button";
import Input from "@/components/input";
import MainMenuArrow from "@/components/mainMenuArrow";
import PressableText from "@/components/pressableText";
import { colors } from "@/constants/colors";
import { router } from "expo-router";
import React, { useState } from "react";
import { View, StyleSheet, Text } from "react-native";

function Login() {
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  return (
    <>
      <MainMenuArrow />
      <Text style={styles.header}> Login </Text>
      <View style={styles.container}>
        <Input
          phone
          title="Phone Number"
          value={phoneNumber}
          setValue={setPhoneNumber}
          keyboardType="phone-pad"
          placeholder="7XXXXXXXX"
        />
        <Input placeholder="Enter your Password" title="Password" value={password} setValue={setPassword} />
        <CustomButton title="Log in" style={styles.button} onPress={() => {}} />

        <PressableText text="Don't have an account?" route="./register" />
        <PressableText text="Forgot password?" route="(auth)/forgotPassword" />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: "50%",
    padding: 50,
  },
  button: {
    width: "25%",
    backgroundColor: colors.DARK_GRAY,
  },
  header: {
    marginHorizontal: "auto",
    fontSize: 22,
    paddingTop: 15,
    fontWeight: "bold",
  },
});
export default Login;
