import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useLocalSearchParams } from "expo-router";

// local params return what this specific store provides

const Store = () => {
  const { id } = useLocalSearchParams();
  return (
    <View>
      <Text style={styles.pageTitle}> Store {id} </Text>
    </View>
  );
};

export default Store;

const styles = StyleSheet.create({
  pageTitle: {
    marginTop: 10,
    textAlign: "center",
    fontSize: 25,
    fontWeight: "bold",
  },
  container: {},
});
