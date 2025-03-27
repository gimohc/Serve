import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import React, { useContext, useState } from "react";
import { images } from "@/constants/icons";
import { router } from "expo-router";
import { AuthContext } from "@/contexts/authContext";

const Header = () => {
  const user = useContext(AuthContext);
  return (
    <View style={styles.container}>
      <Image source={images.logo} style={styles.logo} />
      <Text style={styles.title}> Service Companion </Text>
      <Pressable
        style={styles.profileContainer}
        onPress={() => {router.replace(`../${user.user?"(profile)/profileOptions":"(auth)/login"}`)}}
      >
        <Image source={images.profile} style={styles.profileIcon} />
      </Pressable>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 60,
    flexDirection: "row",
    alignItems: "center",
    marginVertical: "auto",
  },
  profileContainer: {
    flex: 1,
    alignItems: "flex-end",
  },
  logo: {
    marginLeft: 20,
    width: 36,
    height: 36,
  },

  title: {
    marginLeft: 10,
    fontFamily: "Pluvix",
    fontSize: 24,
  },
  profileIcon: {
    marginRight: 15,
    width: 48,
    height: 48,
  },
});
