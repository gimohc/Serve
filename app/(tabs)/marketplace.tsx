import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { colors } from "@/constants/colors";
import StoreCategory from "@/components/storeCategory";
import { images } from "@/constants/icons";

const Marketplace = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.line}>
        <StoreCategory
          src={images.cleaningService}
          title="Cleaning"
          route={""}
        />
        <StoreCategory src={images.carService} title="Car" route={""} />
        <StoreCategory
          src={images.computerService}
          title="Computer"
          route={""}
        />
      </View>
      <View style={styles.line}>
        <StoreCategory
          src={images.gardeningService}
          title="Gardening"
          route={""}
        />
      </View>
    </ScrollView>
  );
};



export default Marketplace;

const styles = StyleSheet.create({
  container: {
    borderTopWidth: 1,
    borderColor: colors.DARK_GRAY,
    marginTop: 5,
    padding: 5,
    width: "auto",
    height: "auto",
  },
  line: {
    flexDirection: "row",
  },
});
