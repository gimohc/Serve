import { Pressable, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { useLocalSearchParams } from "expo-router";
import { serviceProvider } from "../_layout";
import StoreEntry from "@/components/StoreEntry";
import MainMenuArrow from "@/components/mainMenuArrow";
import Input from "@/components/input";
import DropDownList from "@/components/dropDownList";

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
const sorting: { [key: string]: string } = {
  "Sort/name (A-Z)": "A-Z",
  "Sort/name (Z-A)": "Z-A",
  "Sort/rating": "Rating",
};
const Stores = () => {
  const [search, setSearch] = useState<string>("");
  const [orderBy, setOrderBy] = useState<string>("A-Z"); 

  const { id } = useLocalSearchParams();
  return (
    <View>
      <MainMenuArrow />
      <Text style={styles.pageTitle}>{id} Providers</Text>
      <View style={{ flexDirection: "row", width: "100%" }}>
        <Input
          title=""
          placeholder="Search"
          value={search}
          setValue={setSearch}
          style={{flex:1}}
        />
        <DropDownList
          items={sorting}
          title=""
          value={orderBy}
          setValue={setOrderBy}
          textStyle={{fontSize:12}}
        />
      </View>
      {providers.map((entry) => {
        return (
          <StoreEntry key={entry.apiID + "Store Entry"} provider={entry} />
        );
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
