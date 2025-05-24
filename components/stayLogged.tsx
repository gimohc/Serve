import { Pressable, StyleSheet, Text, View, Image } from "react-native";
import React, { Dispatch, SetStateAction } from "react";
import { images } from "@/constants/icons";

interface StayLoggedProps {
  stayLogged: boolean;
  setStayLogged: Dispatch<SetStateAction<boolean>>;
}
const StayLogged = ({ stayLogged, setStayLogged }: StayLoggedProps) => {
  return (
    <View style={styles.container}>
      <Text>Stay Logged In?</Text>
      <Pressable
        style={styles.checkBox}
        onPress={() => setStayLogged((b: boolean) => !b)}
      >
        {stayLogged && <Image style={styles.check} source={images.check} />}
      </Pressable>
    </View>
  );
};

export default StayLogged;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    margin: "auto",
    marginVertical: 15,
  },
  checkBox: {
    borderWidth: 1,
    width: 20,
    height: 20,
    marginLeft: 15,
  },
  check: {
    width: "100%",
    height: "100%",
    objectFit: "contain",
  },
});
