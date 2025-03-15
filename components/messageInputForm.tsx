import {
  StyleSheet,
  Image,
  Text,
  Pressable,
  TextInput,
  View,
} from "react-native";
import React, { useState } from "react";
import { images } from "@/constants/icons";

const MessageInputForm = () => {
  const [message, setMessage] = useState<string>("");

  return (
    <View style={styles.container}>
      <Pressable style={styles.attachmentButton}>
        <Image source={images.attachment} style={styles.attachmentIcon} />
      </Pressable>
      <TextInput style={styles.messageInput} placeholder="Message" />
      <Pressable style={styles.sendButton}>
        <Text> Send </Text>
      </Pressable>
    </View>
  );
};

export default MessageInputForm;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginHorizontal: 30,
  },
  attachmentButton: {
    backgroundColor:"#f00",
    flex: 1,
    justifyContent:"center",
    borderRadius:"50%"
  },
  attachmentIcon: {
    width: 24, 
    height: 24,
    margin:"auto"
  },
  messageInput: {
    marginLeft:8,
    backgroundColor: "#f0f",
    flex: 7,
    borderTopLeftRadius:20,
    borderBottomLeftRadius:20,
  },
  sendButton: {
    backgroundColor: "#ff0",
    justifyContent: "center",
    borderTopRightRadius:20,
    borderBottomRightRadius:20,
    flex: 2,
  },
  sendText: { textAlign: "center" },
});
