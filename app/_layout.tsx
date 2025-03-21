import { colors } from "@/constants/colors";
import { fonts } from "@/constants/fonts";
import { AuthContext } from "@/contexts/authContext";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import { useState } from "react";
import { StatusBar } from "react-native";
import { serviceProviderName } from "./(tabs)/chat";

export interface user {
  fullName: string;
  phoneNumber: string;
  email: string | null;
  birthday: string | null;
  gender: boolean;
  addresses: string[] | null;
}
export interface serviceProvider extends serviceProviderName {
  type: string;
  subTypes: string[];
  email: string;
  phoneNumber: string;
}
export default function RootLayout() {
  const [user, setUser] = useState<user | null>({
    fullName: "motasem",
    phoneNumber: "+962000000000",
    email: "test@email.com",
    birthday: null,
    gender: true,
    addresses: null,
  });

  const [loaded] = useFonts({
    Pluvix: fonts.pluvix,
    Zayan: fonts.zayan,
    Stronghold: fonts.stronghold,
    Lemony: fonts.lemony,
  });
  const login = (userData: user) => {
    setUser(userData);
  };
  const logout = () => {
    setUser(null);
  };
  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      <StatusBar backgroundColor={colors.SELECTED_PRIMARY} />
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="(root)/index" />
        <Stack.Screen name="(tabs)" />
      </Stack>
    </AuthContext.Provider>
  );
}

// { fullName: "motasem", phoneNumber:"+962000000000", email:"test@email.com", birthday:null, gender:true, addresses:null}
