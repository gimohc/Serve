import CustomButton from "@/components/button";
import DateInput from "@/components/dateInput";
import DropDownList from "@/components/dropDownList";
import Input from "@/components/input";
import MainMenuArrow from "@/components/mainMenuArrow";
import PressableText from "@/components/pressableText";
import { colors } from "@/constants/colors";
import React, { useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import { DateType } from "react-native-ui-datepicker";

const genders: { [key: string]: boolean | null } = {
  "Select Gender": null,
  Male: true,
  Female: false,
};

function Register() {
  const [fullName, setFullName] = useState<string>("");
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [gender, setGender] = useState<boolean | null>(null);
  const [birthday, setBirthday] = useState<DateType>();

  return (
    <>
      <MainMenuArrow />
      <Text style={styles.header}> Register </Text>
      <View style={styles.container}>
        <Input title="Full Name" placeholder="eg. John Doe" value={fullName} setValue={setFullName} />
        <Input
          phone
          title="Phone Number"
          value={phoneNumber}
          setValue={setPhoneNumber}
          keyboardType="phone-pad"
          placeholder="7XXXXXXXX"
        />
        <Input
          title="Email Address"
          value={email}
          setValue={setEmail}
          keyboardType="email-address"
          placeholder="johndoe@email.com"
        />

        <View style={styles.row}>
          <DateInput
            style={styles.rowElement}
            title="Birthday"
            value={birthday}
            setValue={setBirthday}
          />
          <DropDownList
            style={styles.rowElement}
            items={genders}
            title="Gender"
            value={gender}
            setValue={setGender}
          />
        </View>
        <Input
          password
          title="Password"
          value={password}
          setValue={setPassword}
          placeholder="Password"
        />
        <Input
          title="Confirm Password"
          value={confirmPassword}
          setValue={setConfirmPassword}
          password
          placeholder="Confirm your Password"
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
    marginTop: 60,
    padding: 20,
  },
  button: {
    width: "25%",
    backgroundColor: colors.DARK_GRAY,
  },
  row: {
    flexDirection: "row",
  },
  rowElement: {
    flex: 1,
  },
  header: {
    marginHorizontal:"auto",
    fontSize:22,
    paddingTop:15,
    fontWeight:"bold"
  }
  
});
export default Register;
