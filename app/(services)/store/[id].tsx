import {
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
  ScrollView,
} from "react-native";
import React, { useEffect, useState } from "react";
import { router, useLocalSearchParams } from "expo-router";
import { serviceProvider } from "@/app/_layout";
import { colors } from "@/constants/colors";
import MainMenuArrow from "@/components/mainMenuArrow";
import { sub } from "@/constants/subServices";
import axios from "axios";
import { APIAddress } from "@/constants/API_KEY";

// local params return what this specific store provides

export const getProviderObjectById = async (id: string | number) => {
  let data: serviceProvider | null = null;
  try {
    const response = await axios.get(
      APIAddress + "/serviceProviders/getServiceProviderById/" + id
    );
    data = response.data;
  } catch (error) {
    console.error("Unable to retrieve service provider information");
    window.alert("Unable to retrieve service provider information");
  }
  return data;
};

const Store = () => {
  const { id } = useLocalSearchParams();
  // get service provider by id
  const [provider, setProvider] = useState<serviceProvider>();

  /*const provider: serviceProvider = {
    type: "Any",
    subTypes: ["Maintenance", "Cleaning", "Upgrading", "Service 4"],
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS07eoWd2XKGJmiyNkO0kNa7JsoMpv3Ds8KlA&s",
    address: "Amman, Al Waha Circle",
    rating: 4,
    id: 1,
    name: "Store 1",
  };*/

  useEffect(() => {
    const fetchProviderObject = async () => {
      const responseData = await getProviderObjectById(id.toString());
      if (responseData != null) setProvider(responseData);
    };
    fetchProviderObject();
  }, [provider]);

  return (
    <View>
      {provider != null && provider != undefined && (
        <>
          <View style={styles.header}>
            <MainMenuArrow />
            <Image
              style={styles.logo}
              source={{ uri: provider.businessLogo }}
            />
            <Text style={styles.pageTitle}> {provider.name} </Text>
            <Pressable
              style={styles.contact}
              onPress={() => {
                router.replace("/(tabs)/chat");
                {
                  /* create new contact */
                }
              }}
            >
              <Text> Contact Now </Text>
            </Pressable>
          </View>
          <ScrollView>
            {sub
              .filter((entry) => provider.subType?.includes(entry.subService))
              .map((entry) => {
                return (
                  <Pressable
                    key={entry.subService + "StorePage"}
                    style={styles.subContainer}
                    onPress={() => {
                      router.replace(
                        `/confirmation/${entry.service}-${entry.subService}-${provider.id}`
                      );
                    }}
                  >
                    <Text style={styles.text}>{entry.subService}</Text>
                    <Text style={styles.text}>
                      {`Price range: ${entry.minPrice}-${entry.maxPrice} JOD`}
                    </Text>
                  </Pressable>
                );
              })}
          </ScrollView>
        </>
      )}
      {provider == null ||
        (provider == undefined && <Text> User not found </Text>)}
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
  subContainer: {
    borderWidth: 1,
    borderRadius: "10%",
    margin: 10,
    padding: 15,
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
