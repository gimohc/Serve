import { Pressable, StyleSheet, Text, View } from "react-native";
import React, { Dispatch, SetStateAction } from "react";
import { colors } from "@/constants/colors";
import { router } from "expo-router";
import Seperator from "./seperator";

interface SubServicesOverlayProps {
  setSubServicesShown: Dispatch<SetStateAction<String[] | null>>;
  subServicesList: String[];
}
const SubServicesOverlay = ({
  setSubServicesShown,
  subServicesList,
}: SubServicesOverlayProps) => {
  return (
    <View style={styles.container}>
      <Pressable onPress={() => setSubServicesShown(null)} style={styles.close}>
        <Text style={{fontWeight:"bold"}}>Close</Text>
      </Pressable>
      {subServicesList.map((subServiceName) => {
        return (
          <>
          <Pressable
            style={styles.textContainer}
            key={"subService" + subServiceName + "0Overlay"}
            onPress={() => {
              router.replace(`/${subServiceName}`);
            }}
          >
            <Text style={styles.text}> {subServiceName} </Text>
          </Pressable>
          <Seperator style={{backgroundColor:colors.GREEN, height:100, width:"100%"}}/>
          </>
        );
      })}
    </View>
  );
};

export default SubServicesOverlay;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(0,0,0,0.9)",
    position: "absolute",
    bottom: 0,
    zIndex: 1,
    width: "100%",
    height: "70%",
  },
  close: {
    backgroundColor: "red",
    zIndex: 2,
    padding: 10,
    position: "absolute",
    right: 0,
  },
  text: {
    color: colors.WHITE,
    fontSize: 20,
  },
  textContainer: {
    padding: 15,
  },
});
