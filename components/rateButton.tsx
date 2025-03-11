import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { colors } from "@/constants/colors";

const RateButton = () => {
  return (
    <View style={styles.container}>
      <Pressable style={styles.button} onPress={() => {}} >
        <View>
          <Text style={styles.text}>Rate Service</Text>
        </View>
      </Pressable>
    </View>
  );
};

export default RateButton;

const styles = StyleSheet.create({

  container: {
    flex: 1,
  },
  button: {
    borderRadius:"25%",
    paddingHorizontal:15,
    paddingVertical:10,
    margin: "auto",
    justifyContent: "center",
    backgroundColor: colors.SELECTED_PRIMARY,
  },
  text: {
    fontSize: 16,
    color:"white",
    textShadowColor:"black",
    textShadowRadius:10,
    textShadowOffset: {width: 4,  height: 4},
    
    fontWeight: "bold",
    textAlign: "center",
  },
});
