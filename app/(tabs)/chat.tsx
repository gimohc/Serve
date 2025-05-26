import { StyleSheet, View } from "react-native";
import React, { useState } from "react";
import ChatArea from "@/components/chatArea";
import ChatUsersList from "@/components/chatUsersList";

import ToggleUsersList from "@/components/toggleUsersList";
import { message } from "@/components/message";
import { chatUser } from "@/components/chatUser";
import { MessageContext } from "@/contexts/messageContext";

/*
const users: chatUser[] = [
  { id: 1, name: "Store 1" },
  { id: 2, name: "Store 2" },
  { id: 3, name: "Store 4" },
  { id: 4, name: "Store 5" },
  { id: 5, name: "Store 6" },
  { id: 6, name: "Store 7" },
  { id: 7, name: "Store 8" },
  { id: 8, name: "Store 9" },
  { id: 9, name: "Store 10" },
  { id: 10, name: "Store 11" },
  { id: 11, name: "Store 12" },
  { id: 12, name: "Store 13" },
  { id: 13, name: "Store 14" },
  { id: 14, name: "Store 15" },
  { id: 15, name: "Store 16" },
];

const messages: message[] = [
  {
    id: 1,
    userID: 1,
    sideId: 1,
    message: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
    clientSent: true,
  },
  {
    id: 2,
    userID: 2,
    sideId: 1,
    message: "aaaa",
    clientSent: false,
  },
  {
    id: 3,
    userID: 2,
    sideId: 1,
    message: "aaaa",
    clientSent: false,
  },
];
*/

//const getContactsByUserId = async () => {

//}
//const getMessagesBy
const Chat = () => {
  const [activeUser, setActiveUser] = useState<chatUser>({
    id: 1,
    name: "test",
  });
  const [chatsHidden, setChatsHidden] = useState<boolean>(false);

  const [contacts, setContacts] = useState<chatUser[]>();

  const [messagesList, setMessagesList] = useState<message[]>();


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
          <ChatUsersList users={contacts} chatsHidden={chatsHidden} />
        </View>
        <ChatArea messages={messagesList} />
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
