import React from "react";
import { Stack } from "expo-router";

const AuthLayout = () => {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="history" />
      <Stack.Screen name="rate" />
    </Stack>
  );
};

export default AuthLayout;
