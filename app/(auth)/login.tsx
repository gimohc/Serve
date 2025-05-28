import CustomButton from "@/components/button";
import Input from "@/components/input";
import Loading from "@/components/loading";
import MainMenuArrow from "@/components/mainMenuArrow";
import PressableText from "@/components/pressableText";
import StayLogged from "@/components/stayLogged";
import { APIAddress } from "@/constants/API_KEY";
import { colors } from "@/constants/colors";
import { AuthContext } from "@/contexts/authContext";
import axios from "axios";
import { router } from "expo-router";
import React, { useContext, useState } from "react";
import { View, StyleSheet, Text } from "react-native";

function Login() {
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [stayLogged, setStayLogged] = useState<boolean>(false);
  const { login } = useContext(AuthContext);

  const [loading, setLoading] = useState<boolean>(false);

  const validateLogin = async () => {
    if(phoneNumber.trim().length <9) {
      window.alert("Enter the correct number");
      return;
    }
    if(phoneNumber.trim() == "" || password.trim() == "") {
      window.alert("Fill in required fields");
      return;
    }
    setLoading(true)
    try {
      const response = await axios.get(
        `${APIAddress}/ClientController/login/${phoneNumber}/${password}`
      );
      const data = response.data;
      if (data != null) {
        login(data);
        router.replace("/");
      } else window.alert("Invalid login");
    } catch (error) {
      console.log(error);
      window.alert("Invalid login/ unable to retrieve login details");
    }
    setLoading(false);
  };
  return (
    <>
      {loading && <Loading/>}
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
        <Input
          placeholder="Enter your Password"
          title="Password"
          value={password}
          setValue={setPassword}
        />
        <StayLogged stayLogged={stayLogged} setStayLogged={setStayLogged} />
        <CustomButton
          title="Log in"
          style={styles.button}
          onPress={() => {
            validateLogin();
          }}
        />

        <PressableText text="Don't have an account?" route="./register" />
        <PressableText text="Forgot password?" route="/forgotPassword" />
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
