import { ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import { colors } from "@/constants/colors";
import MessageInputForm from "./messageInputForm";
import Message, { message } from "./message";
import { supportMessage } from "@/app/(profile)/support";

export interface chatAreaProps {
    messages: supportMessage[];
}
const SupportChatArea = ( { messages } : chatAreaProps) => {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.messagesContainer}>
        {messages.map((message: supportMessage) => {
          return <Message key={"Message" + message.id} source={message.source} message={message.message} />;
        })}
      </ScrollView>
      <MessageInputForm />
    </View>
  );
};

export default SupportChatArea;

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
