import { ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import { colors } from "@/constants/colors";
import MessageInputForm from "./messageInputForm";

const ChatArea = () => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <Text>ChatArea</Text>
      </ScrollView>
      <MessageInputForm/>
    </View>
  );
};

export default ChatArea;

const styles = StyleSheet.create({
  container: {
    overflow:"scroll",
    width:"100%",
    paddingTop: 40,
    backgroundColor: colors.LIGHT_GRAY,
  },
});
