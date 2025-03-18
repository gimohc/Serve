import CustomButton from "@/components/button";
import Input from "@/components/input";
import MainMenuArrow from "@/components/mainMenuArrow";
import PressableText from "@/components/pressableText";
import { colors } from "@/constants/colors";
import React, { useState } from "react";
import { View, StyleSheet } from "react-native";

function Register() {
  const [fullName, setFullName] = useState<string>("");
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [email, setEmail] = useState<string>("");

  return (
    <>
      <MainMenuArrow />
      <View style={styles.container}>
        <Input title="Full Name" value={fullName} setValue={setFullName} />
        <Input
          title="Phone Number"
          value={phoneNumber}
          setValue={setPhoneNumber}
        />
        <Input title="Email Address" value={email} setValue={setEmail} />
        <Input title="Password" value={password} setValue={setPassword} />
        <Input
          title="Confirm Password"
          value={confirmPassword}
          setValue={setConfirmPassword}
        />
        <CustomButton
          title="Register"
          style={styles.button}
          onPress={() => {}}
        />
        <PressableText text="Already Registered?" route="./login" />
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
export default Register;
