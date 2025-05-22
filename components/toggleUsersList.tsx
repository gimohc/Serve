import { Pressable, StyleSheet, Image, View } from "react-native";
import React, { Dispatch, SetStateAction } from "react";
import { images } from "@/constants/icons";
import { colors } from "@/constants/colors";

interface ToggleUsersListProps {
  chatsHidden: boolean;
  setChatsHidden: Dispatch<SetStateAction<boolean>>;
}
const ToggleUsersList = ({
  chatsHidden,
  setChatsHidden,
}: ToggleUsersListProps) => {
  return (
    <Pressable
      style={[chatsHidden ? styles.usersListShrunk : styles.usersListExpanded]}
      onPress={() => setChatsHidden((b) => !b)}
    >
      <Image
        source={chatsHidden ? images.expand : images.shrink}
        style={{ width: 32, height: 32 }}
      />
    </Pressable>
  );
};

export default ToggleUsersList;

const styles = StyleSheet.create({
  usersListShrunk: {
    zIndex: 1,
    position: "absolute",
    top: 0,
    left: 20,
  },
  usersListExpanded: {
    paddingLeft: 20,

    backgroundColor: colors.LIGHT_GRAY,
  },
});
