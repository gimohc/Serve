import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useLocalSearchParams } from "expo-router";
import { serviceProvider } from "../_layout";
import StoreEntry from "@/components/StoreEntry";
import MainMenuArrow from "@/components/mainMenuArrow";

// local params return the type of sub service for backend request of available stores

const providers: serviceProvider[] = [
  {
    type: "Gardening",
    subTypes: ["Planting"],
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS07eoWd2XKGJmiyNkO0kNa7JsoMpv3Ds8KlA&s",
    address: "Amman, Al Waha Circle",
    rating: 3,
    apiID: "0",
    name: "Store 1",
  },
];
const Stores = () => {
  const { id } = useLocalSearchParams();
  return (
    <View>
      <MainMenuArrow/>
      <Text style={styles.pageTitle}>{id} Providers</Text>
      {providers.map((entry) => {
        return <StoreEntry key={entry.apiID + "Store Entry"} provider={entry} />;
      })}
    </View>
  );
};

export default Stores;

const styles = StyleSheet.create({
  pageTitle: {
    marginTop: 10,
    textAlign: "center",
    fontSize: 25,
    fontWeight: "bold",
  },
  container: {},
});
