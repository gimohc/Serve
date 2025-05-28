import CustomButton from "@/components/button";
import DateInput from "@/components/dateInput";
import DropDownList from "@/components/dropDownList";
import Input from "@/components/input";
import MainMenuArrow from "@/components/mainMenuArrow";
import PressableText from "@/components/pressableText";
import { APIAddress, key } from "@/constants/API_KEY";
import { colors } from "@/constants/colors";
import React, { useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import { DateType } from "react-native-ui-datepicker";
import axios from "axios";
import Loading from "@/components/loading";

export const genders: { [key: string]: boolean | null } = {
  "Select Gender": null,
  Male: true,
  Female: false,
};

function Register() {
  const [name, setName] = useState<string>("");
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [gender, setGender] = useState<boolean | null>(null);
  const [dateOfBirth, setDateOfBirth] = useState<DateType>();
  const stayLoggedInToken = '';

  const [loading, setLoading] = useState<boolean>(false);

  const handleSubmit = async () => {
    
    try {
      if (
        !name ||
        !phoneNumber ||
        !email ||
        !dateOfBirth ||
        !password
      ) {
        window.alert("Please fill in all required fields");
        return;
      }
      setLoading(true)
      const response = await axios.post(
        APIAddress+"/ClientController/create",
        {
          name,
          phoneNumber,
          email,
          dateOfBirth : dateOfBirth.toString(),
          gender: gender?"Male":"Female",
          password,
          stayLoggedInToken
        },
      );

      window.alert(response.data.message || "Validation successful");
    } catch (error) {
      if (axios.isAxiosError(error)) {
        if (error.response) {
          console.error("Server Error:", error.response.data);
        } else if (error.request) {
          console.error("Network Error:", error.request);
        } else {
          console.error("Error:", error.message);
        }
      } else {
        console.error("An unexpected error occurred");
      }
    }
    setLoading(false)
  };

  return (
    <>
      {loading && <Loading/>}
      <Text style={styles.header}> Register </Text>
      <View style={styles.container}>
        <Input
          title="Full Name"
          placeholder="eg. John Doe"
          value={name}
          setValue={setName}
        />
        <Input
          phone
          title="Phone Number"
          value={phoneNumber}
          setValue={setPhoneNumber}
          keyboardType="phone-pad"
          placeholder="7XXXXXXXX"
        />
        <Input
          title="Email Address (optional)"
          value={email}
          setValue={setEmail}
          keyboardType="email-address"
          placeholder="johndoe@email.com"
        />

        <View style={styles.row}>
          <DateInput
            style={styles.rowElement}
            title="Birthday"
            value={dateOfBirth}
            setValue={setDateOfBirth}
            placeholder="Select Birthday"
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
          onPress={() => {
            handleSubmit();
          }}
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
    width: "40%",
    backgroundColor: colors.DARK_GRAY,
  },
  row: {
    flexDirection: "row",
  },
  rowElement: {
    flex: 1,
  },
  header: {
    marginHorizontal: "auto",
    fontSize: 22,
    paddingTop: 15,
    fontWeight: "bold",
  },
});
export default Register;
