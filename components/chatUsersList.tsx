import { StyleSheet, Text, ScrollView } from "react-native";
import React, { Dispatch, SetStateAction } from "react";
import ChatUser, { user } from "./chatUser";
import { colors } from "@/constants/colors";


interface ChatUsersListProps {
    users: user[];
    chatsHidden: boolean;
    activeIndex: number;
    setActiveIndex: Dispatch<SetStateAction<number>>;

} 

const ChatUsersList = ({ users, chatsHidden, activeIndex, setActiveIndex } : ChatUsersListProps) => {
  return (
    <ScrollView
      style={[styles.usersContainer, chatsHidden && { display: "none" }]}
    >
      {users.map((user: user, index: number) => {
        return (
          <ChatUser
            key={"userNameChat" + index}
            activeIndex={activeIndex}
            setActiveIndex={setActiveIndex}
            index={index}
            user={user}
          />
        );
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
