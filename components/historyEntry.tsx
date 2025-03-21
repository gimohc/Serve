import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { images } from "@/constants/icons";
import { colors } from "@/constants/colors";
import RateButton from "./rateButton";
import RatingContainer from "./ratingContainer";

export interface HistoryEntryProps {
  id: string;
  date: Date;
  serviceType: string;
  provider: string;
  rating: number;
  rated: boolean;
  feedback?:string;
}

const HistoryEntry = (props: HistoryEntryProps) => {
  const fullDate = `${props.date.getDate()}/${props.date.getUTCMonth()}/${props.date.getFullYear()}`;
  return (
    <View style={styles.container}>
      <View style={styles.line}>
        <Text style={styles.text}>Order ID: {props.id}</Text>

        <Text style={styles.text}>Service Type: {props.serviceType}</Text>
      </View>
      <View style={styles.line}>
        <Text style={styles.text}>{fullDate}</Text>
        <Text style={[styles.text, { textAlign: "center" }]}>
          {`${props.date.getHours()}:${props.date.getMinutes()}`}
        </Text>
      </View>
      <View style={styles.line}>
        <Text style={styles.text}>Provider: {props.provider} </Text>

        {props.rated && <RatingContainer style={styles.ratingIcon} rating={props.rating}/>}
        {!props.rated && <RateButton orderID={`${props.id}-${props.provider}-${props.serviceType}`} />}
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
  time: { flex: 1 },
  ratingIcon: {
    width: 30,
    height: 30,
  },
});
