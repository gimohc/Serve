import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { colors } from "@/constants/colors";

export interface message extends messageProps {
  id: string;
  userID: string;
  serviceProviderID: string;
}

export interface messageProps {
  message: string;
  source: boolean; // true for user sent / false for provider sent
}

const Message = ({ message, source }: messageProps) => {
  return (
    <View style={[styles.container, !source && styles.storeSent]}>
      <Text style={styles.messageText}> {message} </Text>
    </View>
  );
};

export default Message;

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    borderColor: colors.MID_GRAY,
    backgroundColor: colors.DARKER_PRIMARY,
    marginTop: 5,
    padding: 5,
    maxWidth: "70%",
    alignSelf: "flex-start",
  },
  storeSent: {
    backgroundColor: colors.MID_GRAY,
    alignSelf: "flex-end",
  },
  messageText: {
    flexWrap: "wrap",
  },
});
