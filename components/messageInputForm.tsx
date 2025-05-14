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
import { colors } from "@/constants/colors";

const MessageInputForm = () => {
  const [message, setMessage] = useState<string>("");
  let messageIsEmpty = false;

  if (message.trim() == "") messageIsEmpty = true;
  return (
    <View style={styles.container}>
      <Pressable style={styles.attachmentButton}>
        <Image source={images.attachment} style={styles.attachmentIcon} />
      </Pressable>
      <TextInput
        style={styles.messageInput}
        placeholder="Message"
        multiline={true}
        value={message}
        onChangeText={setMessage}
      />

      <Pressable
        disabled={messageIsEmpty}
        style={[
          styles.sendButton,
          !messageIsEmpty && {
            backgroundColor: colors.DARKER_PRIMARY,
          },
        ]}
      >
        {!messageIsEmpty && <Text style={styles.sendText}> Send </Text>}
      </Pressable>
    </View>
  );
};

export default MessageInputForm;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    margin: "auto",
    paddingHorizontal: 20,
    marginBottom: 10,
  },
  attachmentButton: {
    backgroundColor: colors.LIGHTER_PRIMARY,
    justifyContent: "center",
    borderRadius: "50%",
    width: 40,
  },
  attachmentIcon: {
    width: 24,
    height: 24,
    margin: "auto",
  },
  messageInput: {
    borderWidth: 1,
    borderRightWidth: 0,
    marginLeft: 8,
    paddingLeft: 10,
    flex: 7,
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
  },
  sendButton: {
    borderWidth: 1,
    borderLeftWidth: 0,
    justifyContent: "center",
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
    flex: 2,
  },
  sendText: { textAlign: "center" },
});
