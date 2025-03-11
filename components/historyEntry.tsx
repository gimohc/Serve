import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { images } from "@/constants/icons";
import { colors } from "@/constants/colors";
import RateButton from "./rateButton";

export interface HistoryEntryProps {
  id: string;
  date: Date;
  serviceType: string;
  provider: string;
  rating: number;
  rated: boolean;
}

const HistoryEntry = (props: HistoryEntryProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.line}>
        <Text style={styles.text}>Order ID: {props.id}</Text>
        <Text style={[styles.text, styles.time]}>
          {props.date.getHours() + ":" + props.date.getMinutes()}
        </Text>
        <Text style={styles.text}>Service Type: {props.serviceType}</Text>
      </View>
      <View style={styles.line}>
        <Text style={styles.text}>Provider: {props.provider} </Text>

        <Text
          style={[styles.text, styles.time, { marginLeft: 15 }]}
        >
          {props.date.getDate() +
            "/" +
            props.date.getUTCMonth() +
            "/" +
            props.date.getFullYear()}
        </Text>

        {props.rated && (
          <View style={styles.ratingContainer}>
            {Array.from({ length: 5 }, (_, index) => (
              <Image
                key={"Star" + index}
                source={index >= props.rating ? images.emptyStar : images.star}
                style={styles.ratingIcon}
              />
            ))}
          </View>
        )}
        {!props.rated && <RateButton />}
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
    borderColor: colors.SELECTED_PRIMARY,
  },
  line: {
    flexDirection: "row",
    marginBottom: 8,
  },
  text: {
    marginVertical: "auto",
    fontWeight: "bold",
    fontSize: 16,
    flex: 1,
  },
  time: {flex:0.75},
  ratingContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
    marginVertical: "auto",
    flex: 1,
  },
  ratingIcon: {
    width: 24,
    height: 24,
  },
});
