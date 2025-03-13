import { Pressable, StyleSheet, Text, View } from "react-native";
import React, { Dispatch, SetStateAction } from "react";
import { colors } from "@/constants/colors";

export interface user {
  apiID: string;
  name: string;
}
interface chatUserProps {
  user: user;
  index: number;
  activeIndex: number;
  setActiveIndex: Dispatch<SetStateAction<number>>;
}
const ChatUser = ({
  index,
  user,
  activeIndex,
  setActiveIndex,
}: chatUserProps) => {
  return (
    <Pressable style={[styles.container, index == activeIndex && {backgroundColor: colors.MID_GRAY,}]} onPress={() => { setActiveIndex(index)}}>
      <View >
        <Text style={styles.text}>ChatUser</Text>
      </View>
    </Pressable>
  );
};

export default ChatUser;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.LIGHT_GRAY,
    padding:15,
    paddingRight:50,
  },
  text: {
    fontSize:15,
    fontWeight:"bold",
  },
});
