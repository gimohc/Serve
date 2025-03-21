import CustomButton from "@/components/button";
import DateInput from "@/components/dateInput";
import Input from "@/components/input";
import MainMenuArrow from "@/components/mainMenuArrow";
import PressableText from "@/components/pressableText";
import { colors } from "@/constants/colors";
import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { DateType } from "react-native-ui-datepicker";

function Register() {
  const [fullName, setFullName] = useState<string>("");
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [birthday, setBirthday] = useState<DateType>();
  

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

        <DateInput title="Birthday" value={birthday} setValue={setBirthday} />
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
    height: "100%",
    margin: "auto",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor:colors.LIGHTEST_PRIMARY,
  },
  button: {
    width: "25%",
    backgroundColor: colors.DARK_GRAY,
  },
  row: {
    flexDirection: "row",
  },
  calendar: {
    position: "absolute",
  },
});
export default Register;
