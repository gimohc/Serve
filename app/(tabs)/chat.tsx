import { StyleSheet, Image, View, Pressable } from "react-native";
import React, { useState } from "react";
import ChatArea from "@/components/chatArea";
import ChatUsersList from "@/components/chatUsersList";

import ToggleUsersList from "@/components/toggleUsersList";
import { message } from "@/components/message";

export interface serviceProviderName {
  id: string;
  name: string;
}
const users: serviceProviderName[] = [
  { id: "1", name: "Store 1" },
  { id: "2", name: "Store 2" },
  { id: "3", name: "Store 3" },
  { id: "3", name: "Store 3" },
  { id: "3", name: "Store 3" },
  { id: "3", name: "Store 3" },
  { id: "3", name: "Store 3" },
  { id: "3", name: "Store 3" },
  { id: "3", name: "Store 3" },
  { id: "3", name: "Store 3" },
  { id: "3", name: "Store 3" },
  { id: "3", name: "Store 3" },
  { id: "3", name: "Store 3" },
  { id: "3", name: "Store 3" },
  { id: "3", name: "Store 3" },
  { id: "3", name: "Store 3" },
  { id: "3", name: "Store 3" },
  { id: "3", name: "Store 3" },
  { id: "3", name: "Store 3" },
];

const messages: message[] = [
  {
    id: "1",
    userID: "test",
    serviceProviderID: "1",
    message: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
    source: true,
  },
  {
    id: "2",
    userID: "test",
    serviceProviderID: "1",
    message: "aaaa",
    source: false,
  },
  {
    id: "3",
    userID: "test",
    serviceProviderID: "1",
    message: "aaaa",
    source: false,
  },
];

const Chat = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [chatsHidden, setChatsHidden] = useState<boolean>(false);

  return (
    <View style={styles.container}>
      <View>
        <ToggleUsersList
          setChatsHidden={setChatsHidden}
          chatsHidden={chatsHidden}
        />
        <ChatUsersList
          users={users}
          activeIndex={activeIndex}
          chatsHidden={chatsHidden}
          setActiveIndex={setActiveIndex}
        />
      </View>
      <ChatArea messages={messages} />
    </View>
  );
};

export default Chat;

const styles = StyleSheet.create({
  container: {
    position: "relative",
    flexDirection: "row",
    height: "100%",
  },
});
