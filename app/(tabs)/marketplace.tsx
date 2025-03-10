import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { colors } from "@/constants/colors";
import StoreCategory from "@/components/storeCategory";
import { images } from "@/constants/icons";

const Marketplace = () => {
  const services = ["Cleaning", "Car", "Computer", "Gardening"];

  const chunkArray = (arr : string[], size: number) => 
    Array.from({ length: Math.ceil(arr.length / size) }, (_, i) =>
      arr.slice(i * size, i * size + size)
    );

  return (
    <ScrollView style={styles.container}>
      {chunkArray(services, 3).map((row, rowIndex) => (
      <View key={rowIndex} style={styles.line}>
        {row.map((service) => {
          const imageName = `${service.toLowerCase()}Service`;
          return (
            <StoreCategory
              key={service}
              title={service}
              route={service}
              src={images[imageName as keyof typeof images]}
            />
          );
        })}
      </View>
    ))}
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
