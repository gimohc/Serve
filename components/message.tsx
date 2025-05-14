import { StyleSheet, Text, View } from "react-native";
import React, { useContext } from "react";
import { colors } from "@/constants/colors";
import { AuthContext } from "@/contexts/authContext";

export interface message extends messageProps {
  id: string;
  userID: string;
  serviceProviderID: string;
}

export interface messageProps {
  message: string;
  source: boolean; // true for client sent / false for provider sent
  sideId: string; 
}

const Message = ({ message, source, sideId }: messageProps) => {
  const { user } = useContext(AuthContext);
  return (
    <>
      <Text style={!source && {alignSelf:"flex-end", marginVertical:4}}> {source?user?.fullName: "other side ID:" +sideId} </Text>
      <View style={[styles.container, !source && styles.storeSent]}>
        <Text style={styles.messageText}> {message} </Text>
      </View>
    </>
  );
};

export default Message;

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    borderColor: colors.MID_GRAY,
    backgroundColor: colors.DARKER_PRIMARY,
    padding: 5,
    maxWidth: "70%",
    alignSelf: "flex-start",
  },
  storeSent: {
    backgroundColor: colors.MID_GRAY,
    alignSelf: "flex-end",
  },
  messageText: {
    flexWrap: "wrap",
  },
});
