import { StyleSheet, Text, View } from "react-native";
import React, { useContext } from "react";
import { colors } from "@/constants/colors";
import { AuthContext } from "@/contexts/authContext";
import { MessageContext } from "@/contexts/messageContext";

export interface message extends messageProps {
  clientId: number;
  providerId: number;
}

export interface messageProps {
  id: number;
  value: string;
  clientSent: boolean; // true for client sent / false for provider sent
}

const Message = ({ value, clientSent }: messageProps) => {
  const { user } = useContext(AuthContext);
  const messageContext = useContext(MessageContext);

  return (
    <>
      <Text style={!clientSent && { alignSelf: "flex-end", marginVertical: 4 }}>
        {clientSent ? user?.fullName : messageContext?.user.name}
      </Text>
      <View style={[styles.container, !clientSent && styles.storeSent]}>
        <Text style={styles.messageText}> {value} </Text>
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
