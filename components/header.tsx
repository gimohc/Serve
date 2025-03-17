import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { images } from "@/constants/icons";

const Header = () => {
  return (
    <View style={styles.header}>
      <View style={styles.container}>
        <Image source={images.logo} style={styles.logo} />

        <Text style={styles.title}> Service Companion </Text>
        <View style={styles.profileContainer}>
          <Image source={images.profile} style={styles.profileIcon} />
        </View>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: 60,
  },
  container: {
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
