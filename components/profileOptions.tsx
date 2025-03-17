import React from "react";
import { View, StyleSheet, Text, Pressable } from "react-native";
import { colors } from "@/constants/colors";
import { router } from "expo-router";

interface ProfileOptionProps {
  title: string;
  route: string;
}
export default function ProfileOptions() {
  return (
    <View style={styles.container}>
      <ProfileOption title="Log in" route={"(auth)/login"} />
      <ProfileOption title="Register" route={"(auth)/register"} />
    </View>
  );
}
function ProfileOption({ title, route }: ProfileOptionProps) {
  return (
    <Pressable onPress={() => router.navigate(`/${route}`)}>
      <View style={styles.optionItem}>
        <Text style={styles.optionText}>{title}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    right: 0,
    top: 96,
    zIndex: 1,
    width: "40%",
    backgroundColor: "#000",
    borderTopWidth: 1,
    borderTopColor: colors.SELECTED_PRIMARY,
    padding: 5,
    paddingRight: 0,
  },
  optionItem: {
    backgroundColor: colors.SELECTED_PRIMARY,
    width: "100%",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 3,
  },
  optionText: {
    color: "#fff",
    fontSize: 18,
  },
});