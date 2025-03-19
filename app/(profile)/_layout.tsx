import React from "react";
import { Stack } from "expo-router";

const AuthLayout = () => {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="profileDetails" />
      <Stack.Screen name="profileOptions" />
      <Stack.Screen name="history" />
      <Stack.Screen name="addresses" />
    </Stack>
  );
};

export default AuthLayout;
