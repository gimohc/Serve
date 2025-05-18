import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import Input from "@/components/input";
import MainMenuArrow from "@/components/mainMenuArrow";
import CustomButton from "@/components/button";
import { colors } from "@/constants/colors";
import { router } from "expo-router";

const ForgotPassword = () => {
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [code, setCode] = useState<string>("");
  const [isChecked, setIsChecked] = useState<boolean>(false);

  return (
    <View style={{ height: "100%" }}>
      <MainMenuArrow />
      <View style={styles.container}>
        <Text style={styles.pageTitle}>Recover account</Text>
        <Input
          style={styles.input}
          phone
          title="Registered number"
          value={phoneNumber}
          setValue={setPhoneNumber}
          keyboardType="phone-pad"
          placeholder="7XXXXXXXX"
        />
        {!isChecked && (
          <CustomButton
            style={styles.button}
            title="Check"
            onPress={() => setIsChecked(true)}
          />
        )}
        {isChecked && (
          <>
            <Input
              center
              style={{
                ...styles.input,
                ...{ width: "50%", alignSelf: "center", marginTop: 10 },
              }}
              title="Code"
              value={code}
              setValue={setCode}
              keyboardType="phone-pad"
              placeholder="XXXX"
            />
            <CustomButton
              title="Submit"
              onPress={() => {
                router.replace("/forgotPassword2");
              }}
              style={styles.button}
            />
          </>
        )}
      </View>
    </View>
  );
};

export default ForgotPassword;

const styles = StyleSheet.create({
  container: {
    margin: "auto",
    width: "100%",
  },
  pageTitle: {
    fontSize: 20,
    fontWeight: "bold",
    alignSelf: "center",
    marginTop: -60,
    marginBottom: 60,
  },
  input: {
    paddingHorizontal: 50,
  },
  button: {
    backgroundColor: colors.DARK_GRAY,
  },
});
