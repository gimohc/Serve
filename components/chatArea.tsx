import { ScrollView, StyleSheet, View } from "react-native";
import React from "react";
import { colors } from "@/constants/colors";
import MessageInputForm from "./messageInputForm";
import Message, { message } from "./message";

// messages list is placeholder to retrieve data from api

export interface chatAreaProps {
  messages: message[];
}
const ChatArea = ({ messages }: chatAreaProps) => {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.messagesContainer}>
        {messages.map((message: message) => {
          return (
            <Message
              key={"Message" + message.id}
              message={message.message}
              source={message.source}
              sideId={message.sideId}
            />
          );
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
