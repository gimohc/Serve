import {
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
  ScrollView,
} from "react-native";
import React from "react";
import { router, useLocalSearchParams } from "expo-router";
import { serviceProvider } from "@/app/_layout";
import { colors } from "@/constants/colors";
import MainMenuArrow from "@/components/mainMenuArrow";
import { sub } from "@/constants/subServices";

// local params return what this specific store provides

const Store = () => {
  const { id } = useLocalSearchParams();
  // get service provider by id
  const provider: serviceProvider = {
    type: "Any",
    subTypes: ["Maintenance", "Cleaning", "Upgrading", "Service 4"],
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
          .filter((entry) => provider.subTypes.includes(entry.subService))
          .map((entry) => {
            return (
              <Pressable style={styles.subContainer} onPress={() => {router.replace(`/confirmation/${entry.subService}-${provider.apiID}`)}}>
                <Text style={styles.text}>{entry.subService}</Text>
                <Text style={styles.text}>
                  {`Price range: ${entry.minPrice}-${entry.maxPrice} JOD`}
                </Text>
              </Pressable>
            );
          })}
      </ScrollView>
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
    padding:15,
  },
  text: {
    fontSize:20,
    fontWeight:"bold"
  }
});
