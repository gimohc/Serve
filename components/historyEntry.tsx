import { StyleSheet, Text, View, Image, ViewStyle } from "react-native";
import React from "react";
import { images } from "@/constants/icons";
import { colors } from "@/constants/colors";
import RateButton from "./rateButton";
import RatingContainer from "./ratingContainer";
import CustomButton from "./button";

// accepted/pending -> cancelled
export interface HistoryEntryProps {
  id: string;
  status: string;
  date: Date;
  serviceType: string;
  subType: string;
  clientId: string;
  providerId: string;
  rating: number;
  rated: boolean;
  feedback?: string;
}

const getColor = (status: string): { color: string } => {
  switch (status) {
    case "ACCEPTED":
      return { color: "magenta" };
    case "PENDING":
      return { color: "orange" };
    case "CANCELLED":
      return { color: "red" };
    default:
      return { color: "lime" };
  }
};
const HistoryEntry = (props: HistoryEntryProps) => {
  const fullDate = `${props.date.getDate()}/${props.date.getUTCMonth()}/${props.date.getFullYear()}`;
  return (
    <View style={styles.container}>
      <View style={styles.line}>
        <Text style={styles.text}>Order ID: {props.id}</Text>

        <Text style={styles.text}>
          Service: {`${props.serviceType}/${props.subType}`}
        </Text>
      </View>
      <View style={styles.line}>
        <Text
          style={styles.text}
        >{`${props.date.getHours()}:${props.date.getMinutes()} -- ${fullDate}`}</Text>
        <Text
          style={[styles.text, { textAlign: "center" }, getColor(props.status)]}
        >
          {props.status}
        </Text>
      </View>
      <View style={styles.line}>
        <Text style={[styles.text, { flex: 1 }]}>
          Provider: {props.providerId}
        </Text>
        <View style={{flex:1}}>
          {props.status == "COMPLETE" &&
            (props.rated ? (
              <RatingContainer
                style={styles.ratingIcon}
                rating={props.rating}
              />
            ) : (
              <RateButton
                orderID={`${props.id}-${props.providerId}-${props.serviceType}`}
              />
            ))}
          {(props.status == "PENDING" || props.status == "ACCEPTED") && (
            <CustomButton
              title="Cancel"
              onPress={() => {}}
              style={{ backgroundColor: "red"}}
            />
          )}
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
    marginHorizontal: 6,
    paddingTop: 10,
    paddingHorizontal: 15,
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
