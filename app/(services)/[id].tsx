import { Pressable, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { useLocalSearchParams } from "expo-router";
import { serviceProvider } from "../_layout";
import StoreEntry from "@/components/StoreEntry";
import MainMenuArrow from "@/components/mainMenuArrow";
import Input from "@/components/input";
import DropDownList from "@/components/dropDownList";
import axios from "axios";
import { APIAddress } from "@/constants/API_KEY";
import Loading from "@/components/loading";

// local params return the type of sub service for backend request of available stores
/*
const providers: serviceProvider[] = [
  {
    type: "Gardening",
    subType: ["Planting"],
    businessLogo:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS07eoWd2XKGJmiyNkO0kNa7JsoMpv3Ds8KlA&s",
    address: "Amman, Al Waha Circle",
    rating: 3,
    id: 1,
    name: "Store 2",
  },
  {
    type: "Gardening",
    subType: ["Planting"],
    businessLogo:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS07eoWd2XKGJmiyNkO0kNa7JsoMpv3Ds8KlA&s",
    address: "Amman, Al Waha Circle",
    rating: 4,
    id: 2,
    name: "Store 3",
  },
  {
    type: "Gardening",
    subType: ["Planting"],
    businessLogo:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS07eoWd2XKGJmiyNkO0kNa7JsoMpv3Ds8KlA&s",
    address: "Amman, Al Waha Circle",
    rating: 1,
    id: 3,
    name: "Store 4",
  },
  {
    type: "Gardening",
    subType: ["Planting"],
    businessLogo:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS07eoWd2XKGJmiyNkO0kNa7JsoMpv3Ds8KlA&s",
    address: "Amman, Al Waha Circle",
    rating: 2,
    id: 4,
    name: "Store 1",
  },
  {
    type: "Gardening",
    subType: ["Upgrading"],
    businessLogo:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS07eoWd2XKGJmiyNkO0kNa7JsoMpv3Ds8KlA&s",
    address: "Amman, Al Waha Circle",
    rating: 5,
    id: 452,
    name: "Store 6",
  },
];*/

const sorting: { [key: string]: string } = {
  "Not sorted": "None",
  "Sort/name (A-Z)": "A-Z",
  "Sort/name (Z-A)": "Z-A",
  "Sort/rating": "Rating",
};
const Stores = () => {
  const [search, setSearch] = useState<string>("");
  const [orderBy, setOrderBy] = useState<string>("None");
  const [providers, setProviders] = useState<serviceProvider[] | null>(null);

  const [loading, setLoading] = useState<boolean>(false);

  //subservice name
  const { id } = useLocalSearchParams();

  useEffect(() => {
    const fetchProvidersListBySubService = async () => {
      try {
        const response = await axios.get(
          APIAddress+"/serviceProviders/subtype/"+id
        );
        const data = response.data;
        setProviders(data);
      } catch (error) {
        console.error("Unable to fetch providers list" + error);
        window.alert("Unable to fetch providers list" + error);
      }
    };
    setLoading(true);
    fetchProvidersListBySubService();
    setLoading(false);
  }, []); // assign retrieved list

  // search query
  let displayedProvidersList;
  if (providers != null) {
    displayedProvidersList = providers.filter((entry) =>
      entry.name.toLowerCase().includes(search.toLowerCase())
    );

    // sorting
    displayedProvidersList = [...displayedProvidersList].sort((a, b) => {
      if (orderBy == "A-Z") return a.name.localeCompare(b.name);
      else if (orderBy == "Z-A") return b.name.localeCompare(a.name);
      else if (orderBy == "Rating") return b.rating - a.rating;
      return 0;
    });
  }

  return (
    <View>
      {loading && <Loading/>}
      <MainMenuArrow />
      {displayedProvidersList != null ? (
        <>
          <Text style={styles.pageTitle}>{id} Providers</Text>
          <View style={{ flexDirection: "row", width: "100%" }}>
            <Input
              title=""
              placeholder="Search"
              value={search}
              setValue={setSearch}
              style={{ flex: 1 }}
            />
            <DropDownList
              items={sorting}
              title=""
              value={orderBy}
              setValue={setOrderBy}
              textStyle={{ fontSize: 12 }}
            />
          </View>
          {displayedProvidersList.map((entry) => {
            return (
              <StoreEntry key={entry.id + "Store Entry"} provider={entry} />
            );
          })}
        </>
      ) : (
        <Text>No records found</Text>
      )}
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
