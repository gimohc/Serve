import { StyleSheet, Text, ScrollView } from "react-native";
import React from "react";
import ChatUser, { chatUser } from "./chatUser";
import { colors } from "@/constants/colors";

interface ChatUsersListProps {
  users: chatUser[];
  chatsHidden: boolean;
}

const ChatUsersList = ({ users, chatsHidden }: ChatUsersListProps) => {
  return (
    <ScrollView
      style={[styles.usersContainer, chatsHidden && { display: "none" }]}
    >
      {users.map((user: chatUser, index: number) => {
        return <ChatUser key={"userNameChat" + index} user={user} />;
      })}
    </ScrollView>
  );
};

export default ChatUsersList;

const styles = StyleSheet.create({
  usersContainer: {
    borderRightColor: colors.DARK_GRAY,
    borderRightWidth: 1,
  },
});
