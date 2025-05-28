import { StyleSheet, Text, View } from "react-native";
import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import { colors } from "@/constants/colors";
import RateButton from "./rateButton";
import RatingContainer from "./ratingContainer";
import CustomButton from "./button";
import { status } from "@/app/(services)/history";
import axios from "axios";
import { getProviderNameById } from "@/app/(services)/rating/[id]";

// accepted/pending -> cancelled
export interface HistoryEntryProps {
  orderId: number;
  status: string;
  date: string;
  serviceType: string;
  subType: string;
  userId: number;
  providerId: number;
  rating: number;
  rated: boolean;
  feedback?: string;
  finalPrice: number;
}

export const cancelOrder = async (id: string | number) => {
  axios.put("http:/10.0.2.2:8080/historyService/cancelOrderByOrderId/" + id);
};

const getColor = (statusString: string): { color: string } => {
  switch (statusString) {
    case status.ACCEPTED:
      return { color: "magenta" };
    case status.PENDING:
      return { color: "orange" };
    case status.CANCELLED:
      return { color: "red" };
    default:
      return { color: "lime" };
  }
};
interface HistoryEntryProps2 {
  setLoading: Dispatch<SetStateAction<boolean>>;
}
const HistoryEntry = ({setLoading} : HistoryEntryProps2, props: HistoryEntryProps) => {
  const [name, setName] = useState("" + props.providerId);
  const fetchProviderNameById = async () => {
    const name = await getProviderNameById(props.providerId);
    setName(name);
  };
  useEffect(() => {
    setLoading(true);
    fetchProviderNameById();
    setLoading(false)
  });
  return (
    <View style={styles.container}>
      <View style={styles.line}>
        <Text style={styles.text}>Order ID: {props.orderId}</Text>

        <Text style={styles.text}>
          Service: {`${props.serviceType}/${props.subType}`}
        </Text>
      </View>
      <View style={styles.line}>
        <Text style={styles.text}>{props.date}</Text>
        <Text
          style={[styles.text, { textAlign: "center" }, getColor(props.status)]}
        >
          {props.status}
        </Text>
      </View>
      <View style={styles.line}>
        <Text style={[styles.text, { flex: 1 }]}>Provider: {name}</Text>
        <View style={{ flex: 1 }}>
          {props.status == status.COMPLETE &&
            (props.rated ? (
              <RatingContainer
                style={styles.ratingIcon}
                rating={props.rating}
              />
            ) : (
              <RateButton
                orderRoute={`${props.orderId}-${props.providerId}-${props.serviceType}`}
              />
            ))}
          {(props.status == status.PENDING ||
            props.status == status.ACCEPTED) && (
            <CustomButton
              title="Cancel"
              onPress={() => {
                cancelOrder(props.orderId);
              }}
              style={{ backgroundColor: "red" }}
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
