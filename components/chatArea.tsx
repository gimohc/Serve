import { ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import { colors } from "@/constants/colors";
import MessageInputForm from "./messageInputForm";
import Message, { message } from "./message";

// messages list is placeholder to retrieve data from api
const messages: message[] = [
  {
    userID: "test",
    receiverAPI: "1",
    message: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
    storeSent: true,
  },
  { userID: "test", receiverAPI: "1", message: "aaaa", storeSent: false },
  { userID: "test", receiverAPI: "1", message: "aaaa", storeSent: false },
];
const ChatArea = () => {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.messagesContainer}>
        {messages.map((message: message, index: number) => {
          return <Message key={"Message" + message.receiverAPI + index} {...message} />;
        })}
      </ScrollView>
      <MessageInputForm />
    </View>
  );
};

export default ChatArea;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "auto",
    paddingTop: 40,
    backgroundColor: colors.LIGHT_GRAY,
  },
  messagesContainer: {
    paddingTop: 20,
    paddingHorizontal: 20,
  },
});
