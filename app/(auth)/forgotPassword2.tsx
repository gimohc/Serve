import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import Input from "@/components/input";
import CustomButton from "@/components/button";
import { colors } from "@/constants/colors";
import { router } from "expo-router";

const ForgotPassword2 = () => {
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  return (
    <View style={styles.container}>
      <View style={{ marginVertical: "auto" }}>
        <Text style={styles.pageTitle}>Set your new password</Text>
        <Input
          password
          style={styles.input}
          title="Password"
          value={password}
          setValue={setPassword}
          placeholder="Password"
        />
        <Input
          style={styles.input}
          title="Confirm Password"
          value={confirmPassword}
          setValue={setConfirmPassword}
          password
          placeholder="Confirm your Password"
        />
        <CustomButton
          style={{ backgroundColor: colors.DARK_GRAY, marginTop: 30 }}
          title="Confirm Change"
          onPress={() => {router.replace("/")}}
        />
      </View>
    </View>
  );
};

export default ForgotPassword2;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
  },
  input: {
    paddingHorizontal: 50,
    marginBottom:10
  },
  pageTitle: {
    fontSize: 20,
    fontWeight: "bold",
    alignSelf: "center",
    marginTop: -60,
    marginBottom: 60,
  },
});
