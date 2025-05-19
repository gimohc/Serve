import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { serviceProvider } from "@/app/_layout";
import { images } from "@/constants/icons";
import { colors } from "@/constants/colors";
import { router } from "expo-router";

interface StoreEntryProps {
  provider: serviceProvider;
}

const StoreEntry = ({ provider }: StoreEntryProps) => {
  return (
    <Pressable style={styles.container} onPress={() => {router.replace(`/store/${provider.apiID}`)}}>
      <View style={styles.line}>
        <Image style={styles.logo} source={{ uri: provider.logo }} />
        <Text style={[styles.name, { fontSize: 23 }]}> {provider.name} </Text>
      </View>
      <View style={styles.line}>
        <Image style={styles.starIcon} source={images.star} />
        <Text style={[styles.bottom, { fontSize: 12, color: colors.MID_GRAY }]}>
          ({provider.rating})
        </Text>
        <Text style={styles.bottom}> {provider.address}</Text>
      </View>
    </Pressable>
  );
};

export default StoreEntry;

const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    marginTop: 10,
    marginHorizontal: 7,
    position: "relative",
    padding: 15,
    borderRadius: 20,
  },
  starIcon: {
    width: 30,
    height: 30,
    marginTop: 7,
  },
  logo: {
    width: 64,
    height: 64,
    borderRadius: 32,
    marginRight: 30,
  },
  line: {
    flexDirection: "row",
  },
  name: {
    alignSelf: "center",
    justifyContent: "center",
    fontWeight: "bold",
  },
  bottom: {
    alignSelf: "flex-end",
    marginLeft: 5,
    marginRight: 5,
  },
});
