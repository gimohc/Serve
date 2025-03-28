import CustomButton from "@/components/button";
import DateInput from "@/components/dateInput";
import { findKeyByValue } from "@/components/dropDownList";
import Input from "@/components/input";
import MainMenuArrow from "@/components/mainMenuArrow";
import { colors } from "@/constants/colors";
import { AuthContext } from "@/contexts/authContext";
import React, { useContext, useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import { DateType } from "react-native-ui-datepicker";
import { genders } from "../(auth)/register";

function ProfileDetails() {
  const user = useContext(AuthContext).user;
  if (user != null) {
    const [fullName, setFullName] = useState<string>(user.fullName);
    const [phoneNumber, setPhoneNumber] = useState<string>(user.phoneNumber);
    const [email, setEmail] = useState<string | null>(user.email);
    const [gender, setGender] = useState<boolean>(user.gender);
    const [birthday, setBirthday] = useState<DateType>(user.birthday);

    return (
      <>
        <MainMenuArrow />
        <Text style={styles.header}> Profile Settings </Text>
        <View style={styles.container}>
          <Input
            title="Full Name"
            placeholder="eg. John Doe"
            value={fullName}
            setValue={setFullName}
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
            <Input
              disabled
              center
              style={styles.rowElement}
              value={findKeyByValue(genders, gender)}
              title="Gender"
            />
          </View>
          <CustomButton
            title="Update Information"
            style={styles.button}
            onPress={() => {}}
          />
        </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    marginTop: 60,
    padding: 20,
  },
  button: {
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
export default ProfileDetails;
