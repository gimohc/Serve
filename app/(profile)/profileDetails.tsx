import { StyleSheet, Text, View } from "react-native";
import React from "react";
import MainMenuArrow from "@/components/mainMenuArrow";
import Input from "@/components/input";

const ProfileDetails = () => {
  
  return (
    <View>
      <MainMenuArrow />
      <Text style={styles.header}> Profile Settings </Text>
    </View>
  );
};

export default ProfileDetails;

const styles = StyleSheet.create({
  header: {
    textAlign:"center",
    marginTop:15,
    fontSize:16,
  }

});
