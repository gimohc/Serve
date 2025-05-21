import { ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { colors } from "@/constants/colors";
import StoreCategory from "@/components/storeCategory";
import { images } from "@/constants/icons";
import SubServicesOverlay from "@/components/subServicesOverlay";
import { subPCs } from "@/constants/subServices";

const Marketplace = () => {
  const [subServicesShown, setSubServicesShown] = useState<String[] | null>(
    null
  );

  return (
    <ScrollView style={styles.pageContainer}>
      <View style={styles.contentContainer}>
        <StoreCategory
          title={"Pc Services"}
          src={images.computerService}
          style={{ backgroundColor: colors.PC_BACKGROUND }}
          setSubServicesShown={setSubServicesShown}
          subServicesList={subPCs}
        />
        <StoreCategory
          title={"Car Services"}
          src={images.carService}
          style={{ backgroundColor: colors.DARK_GRAY }}
          setSubServicesShown={setSubServicesShown}
        />
        <StoreCategory
          title={"Gardening Services"}
          src={images.gardeningService}
          style={{ backgroundColor: colors.GARD_BACKGROUND }}
          setSubServicesShown={setSubServicesShown}
        />
      </View>
      <View style={styles.contentContainer}>
        <StoreCategory
          title={"Cleaning Services"}
          src={images.cleaningService}
          style={{ backgroundColor: colors.CLEAN_BACKGROUND }}
          setSubServicesShown={setSubServicesShown}
        />
        <StoreCategory
          title={"Coming Soon!"}
          src={images.placeholder}
          setSubServicesShown={setSubServicesShown}
        />
        <StoreCategory
          title={"Coming Soon!"}
          src={images.placeholder}
          setSubServicesShown={setSubServicesShown}
        />
      </View>
      <View style={styles.contentContainer}>
        <StoreCategory
          title={"Coming Soon!"}
          src={images.placeholder}
          setSubServicesShown={setSubServicesShown}
        />
        <StoreCategory
          title={"Coming Soon!"}
          src={images.placeholder}
          setSubServicesShown={setSubServicesShown}
        />
        <StoreCategory
          title={"Coming Soon!"}
          src={images.placeholder}
          setSubServicesShown={setSubServicesShown}
        />
      </View>
      <View style={styles.contentContainer}>
        <StoreCategory
          title={"Coming Soon!"}
          src={images.placeholder}
          setSubServicesShown={setSubServicesShown}
        />
        <StoreCategory
          title={"Coming Soon!"}
          src={images.placeholder}
          setSubServicesShown={setSubServicesShown}
        />
        <StoreCategory
          title={"Coming Soon!"}
          src={images.placeholder}
          setSubServicesShown={setSubServicesShown}
        />
      </View>
      <View style={styles.contentContainer}>
        <StoreCategory
          title={"Coming Soon!"}
          src={images.placeholder}
          setSubServicesShown={setSubServicesShown}
        />
        <StoreCategory
          title={"Coming Soon!"}
          src={images.placeholder}
          setSubServicesShown={setSubServicesShown}
        />
        <StoreCategory
          title={"Coming Soon!"}
          src={images.placeholder}
          setSubServicesShown={setSubServicesShown}
        />
      </View>
      {subServicesShown != null && (
        <SubServicesOverlay
          setSubServicesShown={setSubServicesShown}
          subServicesList={subServicesShown}
        />
      )}
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
    position: "relative",
  },
  contentContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
});

/*const services = [
    { title: "Gardening Services", color: colors.GREEN },
    { title: "Car Services", color: colors.DARK_MAGENTA },
    { title: "Cleaning Services", color: colors.DARK_CYAN },
    { title: "Coming Soon!", color: colors.DARK_GRAY },
    { title: "Coming Soon!", color: colors.DARK_GRAY },
    { title: "Coming Soon!", color: colors.DARK_GRAY },
  ];
*/

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
