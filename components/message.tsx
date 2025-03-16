import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { colors } from "@/constants/colors";

export interface message {
  userID: string;
  receiverAPI: string;
  message: string;
  storeSent: boolean;
}
const Message = (messageProps : message) => {
  return (
    <View style={[styles.container, messageProps.storeSent && styles.storeSent]}>
      <Text style={styles.messageText}> {messageProps.message} </Text>
    </View>
  );
};

export default Message;

const styles = StyleSheet.create({
  container: {
    borderRadius:10,
    borderColor:colors.MID_GRAY,
    backgroundColor:colors.DARKER_SELECTED,
    marginTop:5,
    padding:5,
    maxWidth:"80%",
    alignSelf:"flex-start",
  },
  storeSent: {
    backgroundColor: colors.MID_GRAY,
    alignSelf:"flex-end",
  },
  messageText: {
    flexWrap:"wrap",
  }
});
