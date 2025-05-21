import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import React from "react";
import { router, useLocalSearchParams } from "expo-router";
import { serviceProvider } from "@/app/_layout";
import { colors } from "@/constants/colors";
import MainMenuArrow from "@/components/mainMenuArrow";

// local params return what this specific store provides

const Store = () => {
  const { id } = useLocalSearchParams();
  // get service provider by id
  const provider: serviceProvider = {
    type: "Any",
    subTypes: ["service1", "service2", "service3", "service4"],
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS07eoWd2XKGJmiyNkO0kNa7JsoMpv3Ds8KlA&s",
    address: "Amman, Al Waha Circle",
    rating: 4,
    apiID: "1",
    name: "Store 1",
  };
  return (
    <View>
      <View style={styles.header}>
        <MainMenuArrow />
        <Image style={styles.logo} source={{ uri: provider.logo }} />
        <Text style={styles.pageTitle}> {provider.name} </Text>
        <Pressable
          style={styles.contact}
          onPress={() => {
            router.replace("/(tabs)/chat");
          }}
        >
          {" "}
          {/* create new contact */}
          <Text> Contact Now </Text>
        </Pressable>
      </View>
      <View> </View>
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
    justifyContent: "center",
    alignSelf: "center",
  },
  logo: {
    objectFit: "fill",
    width: 75,
    height: 75,
    borderRadius: 35,
    marginRight: 50,
    marginLeft: 20,
  },
  header: {
    flexDirection: "row",
    position: "relative",
    padding: 30,
    backgroundColor: colors.DARKER_PRIMARY,
  },
  contact: {
    position: "absolute",
    bottom: 0,
    right: 0,
    padding: 7,
    backgroundColor: colors.LIGHT_GRAY,
  },
  container: {},
});
