import { Pressable, StyleSheet, Text, View } from "react-native";
import React, { useContext } from "react";
import { colors } from "@/constants/colors";
import { MessageContext } from "@/contexts/messageContext";

export interface chatUser {
  apiID: string;
  name: string;
}
interface chatUserProps {
  user: chatUser;
}
const ChatUser = ({ user }: chatUserProps) => {
  const messageContext = useContext(MessageContext);
  return (
    <Pressable
      style={[
        styles.container,
        user == messageContext?.user && { backgroundColor: colors.MID_GRAY },
      ]}
      onPress={() => {
        messageContext?.setChatUser(user);
      }}
    >
      <View>
        <Text style={styles.text}>{user.name}</Text>
      </View>
    </Pressable>
  );
};

export default ChatUser;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.LIGHT_GRAY,
    padding: 15,
    paddingRight: 50,
  },
  text: {
    fontSize: 15,
    fontWeight: "bold",
  },
});
