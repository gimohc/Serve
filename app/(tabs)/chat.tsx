import { StyleSheet, View } from "react-native";
import React, { useState } from "react";
import ChatArea from "@/components/chatArea";
import ChatUsersList from "@/components/chatUsersList";

import ToggleUsersList from "@/components/toggleUsersList";
import { message } from "@/components/message";
import { chatUser } from "@/components/chatUser";
import { MessageContext } from "@/contexts/messageContext";

const users: chatUser[] = [
  { apiID: "1", name: "Store 1" },
  { apiID: "2", name: "Store 2" },
  { apiID: "3", name: "Store 4" },
  { apiID: "4", name: "Store 5" },
  { apiID: "5", name: "Store 6" },
  { apiID: "6", name: "Store 7" },
  { apiID: "7", name: "Store 8" },
  { apiID: "8", name: "Store 9" },
  { apiID: "9", name: "Store 10" },
  { apiID: "10", name: "Store 11" },
  { apiID: "11", name: "Store 12" },
  { apiID: "12", name: "Store 13" },
  { apiID: "13", name: "Store 14" },
  { apiID: "14", name: "Store 15" },
  { apiID: "15", name: "Store 16" },
];

const messages: message[] = [
  {
    id: "1",
    userID: "test",
    sideId: "1",
    message: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
    clientSent: true,
  },
  {
    id: "2",
    userID: "test",
    sideId: "1",
    message: "aaaa",
    clientSent: false,
  },
  {
    id: "3",
    userID: "test",
    sideId: "1",
    message: "aaaa",
    clientSent: false,
  },
];

const Chat = () => {
  const [activeUser, setActiveUser] = useState<chatUser>({
    apiID: "aa",
    name: "test",
  });
  const [chatsHidden, setChatsHidden] = useState<boolean>(false);

  return (
    <MessageContext.Provider
      value={{ user: activeUser, setChatUser: setActiveUser }}
    >
      <View style={styles.container}>
        <View>
          <ToggleUsersList
            setChatsHidden={setChatsHidden}
            chatsHidden={chatsHidden}
          />
          <ChatUsersList users={users} chatsHidden={chatsHidden} />
        </View>
        <ChatArea messages={messages} />
      </View>
    </MessageContext.Provider>
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
