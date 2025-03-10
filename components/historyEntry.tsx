import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { images } from "@/constants/icons";

export interface HistoryEntryProps {
  id: string;
  date: Date;
  serviceType: string;
  provider: string;
  rating: number;
}

const HistoryEntry = (props: HistoryEntryProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.line}>
        <Text style={styles.text}>Order ID: {props.id}</Text>
        <Text style={styles.text}>Service Type: {props.serviceType}</Text>
      </View>
      <View style={styles.line}>
        <Text style={styles.text}>Provider: {props.provider} </Text>
        <Text style={styles.text}>Date: {props.date.toString()}</Text>
        <View style={styles.ratingContainer}>
        {
                Array.from({ length: 5 }, (_, index) => (
                <Image 
                  key={"Star" +index}
                  source={index >= props.rating? images.emptyStar  : images.star }
                    style={styles.ratingIcon}
                />
              ))}
              

           
        </View>
      </View>
    </View>
  );
};

export default HistoryEntry;

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    marginVertical: 5,
    marginHorizontal: 10,
    padding: 15,
  },
  line: {
    flexDirection: "row",
    marginBottom: 5,
  },
  text: {
    flex: 1,
  },
  ratingContainer: {
    flexDirection:"row",
    flex: 1,
  },
  ratingIcon: {
    width:24,
    height:24,
  },
});
