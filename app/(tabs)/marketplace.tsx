import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { colors } from "@/constants/colors";
import StoreCategory from "@/components/storeCategory";
import { images } from "@/constants/icons";

const Marketplace = () => {
  const services = ["Cleaning", "Car", "Computer", "Gardening", "Coming Soon!"];
  const serviceColors = [
    colors.DARK_CYAN,
    colors.DARK_GRAY,
    colors.DARK_MAGENTA,
    colors.GREEN,
  ];
  /*const chunkArray = (arr: string[], size: number) =>
    Array.from({ length: Math.ceil(arr.length / size) }, (_, i) =>
      arr.slice(i * size, i * size + size)
    );
*/
  return (
    <ScrollView style={styles.container}>
      <View style={styles.line}>
        <StoreCategory
          title={"Cleaning Services"}
          route={""}
          src={images.cleaningService}
          style={{ backgroundColor: colors.DARK_CYAN }}
        />
        <StoreCategory
          title={"Car Services"}
          route={""}
          src={images.carService}
          style={{ backgroundColor: colors.DARK_GRAY }}
        />
        <StoreCategory
          title={"PC Services"}
          route={""}
          src={images.computerService}
          style={{ backgroundColor: colors.DARK_MAGENTA }}
        />
      </View>
      <View style={styles.line}>
        <StoreCategory
          title={"Gardening Services"}
          route={""}
          src={images.gardeningService}
          style={{ backgroundColor: colors.GREEN }}
        />
        <StoreCategory
          title={"Coming Soon!"}
          route={""}
          src={images.placeholder}
        />
        <StoreCategory
          title={"Coming Soon!"}
          route={""}
          src={images.placeholder}
        />
      </View>
      {/*chunkArray(services, 3).map((row, rowIndex) => (
        <View key={rowIndex} style={styles.line}>
          {row.map((service: string, index: number) => {
            const imageName = `${service.toLowerCase()}Service`;
            const imageSource= images[imageName as keyof typeof images];
            return (
              <StoreCategory
                key={service + index}
                title={service}
                route={service}
                src={imageSource == null? images.placeholder : imageSource}
                style={serviceColors.length >= index+1? {backgroundColor: serviceColors[index + 3 * rowIndex] } : {}}
              />
            );
          })}
        </View>
      ))*/}
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
