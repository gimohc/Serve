import { ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { colors } from "@/constants/colors";
import StoreCategory from "@/components/storeCategory";
import { images } from "@/constants/icons";
import SubServicesOverlay from "@/components/subServicesOverlay";
import { subGardening } from "@/assets/subServices";

const Marketplace = () => {
  const [showSubServices, setShowSubServices] = useState<String[] | null>(null);

  return (
    <ScrollView style={styles.pageContainer}>
      <View style={styles.contentContainer}>
        <StoreCategory
          title={"Gardening Services"}
          src={images.gardeningService}
          style={{ backgroundColor: colors.GREEN }}
          setShowSubServices={setShowSubServices}
          subServicesList={subGardening}
        />
        <StoreCategory
          title={"Car Services"}
          src={images.carService}
          style={{ backgroundColor: colors.DARK_GRAY }}
          setShowSubServices={setShowSubServices}
        />
        <StoreCategory
          title={"PC Services"}
          src={images.computerService}
          style={{ backgroundColor: colors.DARK_MAGENTA }}
          setShowSubServices={setShowSubServices}
        />
      </View>
      <View style={styles.contentContainer}>
        <StoreCategory
          title={"Cleaning Services"}
          src={images.cleaningService}
          style={{ backgroundColor: colors.DARK_CYAN }}
          setShowSubServices={setShowSubServices}
        />
        <StoreCategory
          title={"Coming Soon!"}
          src={images.placeholder}
          setShowSubServices={setShowSubServices}
        />
        <StoreCategory
          title={"Coming Soon!"}
          src={images.placeholder}
          setShowSubServices={setShowSubServices}
        />
      </View>
      {showSubServices != null && <SubServicesOverlay />}
    </ScrollView>
  );
};

export default Marketplace;

const styles = StyleSheet.create({
  pageContainer: {
    flex: 1,
    borderTopWidth: 1,
    borderColor: colors.DARK_GRAY,
    marginTop: 5,
    padding: 7,
    width: "100%",
  },
  contentContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
});

/*chunkArray(services, 3).map((row, rowIndex) => (
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
      ))*/
