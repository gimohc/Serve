import { StyleSheet, Text, View } from "react-native";
import React from "react";
import MainMenuArrow from "@/components/mainMenuArrow";
import { messageProps } from "@/components/message";
import SupportChatArea from "@/components/supportChatArea";

export interface supportMessage extends messageProps {
  id: string;
  userID: string;

  // source is true for user sent false for support sent
}
const messages: supportMessage[] = [
  {
    id: "1",
    userID: "test",
    message: "abc",
    source: true,
    sideId: "abc"
  },
  {
    id: "2",
    userID: "test",
    message: "aaaaaaa",
    source: false,
    sideId: "abc"
  },
  {
    id: "3",
    userID: "test",
    message: "aaaaaaaaaaaaaaaa",
    source: true,
    sideId: "abc"
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
