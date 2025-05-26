import { StyleSheet, Text, View } from "react-native";
import React from "react";
import MainMenuArrow from "@/components/mainMenuArrow";
import { messageProps } from "@/components/message";
import SupportChatArea from "@/components/supportChatArea";

export interface supportMessage extends messageProps {
  id: number;
  userID: number;

  // source is true for user sent false for support sent
}
const messages: supportMessage[] = [
  {
    id: 1,
    userID: 1,
    message: "abc",
    clientSent: true,
    sideId: 1,
  },
  {
    id: 2,
    userID: 2,
    message: "aaaaaaa",
    clientSent: false,
    sideId: 2,
  },
  {
    id: 3,
    userID: 3,
    message: "aaaaaaaaaaaaaaaa",
    clientSent: true,
    sideId: 1,
  },
];

const Support = () => {
  return (
    <View style={styles.container}>
      <MainMenuArrow />
      <SupportChatArea messages={messages} />
    </View>
  );
};

export default Support;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
  },
});
