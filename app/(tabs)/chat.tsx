import { StyleSheet, Image, View, Pressable } from "react-native";
import React, { useState } from "react";
import ChatArea from "@/components/chatArea";
import ChatUsersList from "@/components/chatUsersList";
import { user } from "@/components/chatUser";
import ToggleUsersList from "@/components/toggleUsersList";

const users: user[] = [
  { apiID: "1", name: "Store 1" },
  { apiID: "2", name: "Store 2" },
  { apiID: "3", name: "Store 3" },
  { apiID: "3", name: "Store 3" },
  { apiID: "3", name: "Store 3" },
  { apiID: "3", name: "Store 3" },
  { apiID: "3", name: "Store 3" },
  { apiID: "3", name: "Store 3" },
  { apiID: "3", name: "Store 3" },
  { apiID: "3", name: "Store 3" },
  { apiID: "3", name: "Store 3" },
  { apiID: "3", name: "Store 3" },
  { apiID: "3", name: "Store 3" },
  { apiID: "3", name: "Store 3" },
  { apiID: "3", name: "Store 3" },
  { apiID: "3", name: "Store 3" },
  { apiID: "3", name: "Store 3" },
  { apiID: "3", name: "Store 3" },
  { apiID: "3", name: "Store 3" },
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
      <ChatArea />
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
