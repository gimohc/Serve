import { StyleSheet, Text, View, ScrollView } from "react-native";
import React, { useState } from "react";
import HistoryEntry, { HistoryEntryProps } from "@/components/historyEntry";
import MainMenuArrow from "@/components/mainMenuArrow";

const status = {
  COMPLETE: "COMPLETE",
  PENDING: "PENDING",
  CANCELLED: "CANCELLED",
  ACCEPTED: "ACCEPTED",
};
const historyEntries: HistoryEntryProps[] = [
  {
    id: "1",
    date: "Wed May 05 2025",
    serviceType: "Cleaning",
    providerId: "Store 1",
    rating: 0,
    rated: true,
    status: status.COMPLETE,
    subType: "Subtype",
    clientId: "1",
    finalPrice: -1,
  },
  {
    id: "2",
    date: "Wed May 05 2025",
    serviceType: "Cleaning",
    providerId: "Store 2",
    rating: 1,
    rated: false,
    status: status.CANCELLED,
    subType: "Subtype",
    clientId: "1",
    finalPrice: -1,
  },
  {
    id: "3",
    date: "Wed May 05 2025",
    serviceType: "Cleaning",
    providerId: "Store 3",
    rating: 4,
    rated: true,
    status: status.ACCEPTED,
    subType: "Subtype",
    clientId: "1",
    finalPrice: -1,
  },
  {
    id: "4",
    date: "Wed May 05 2025",
    serviceType: "Cleaning",
    providerId: "Store 3",
    rating: 4,
    rated: false,
    status: status.COMPLETE,
    subType: "Subtype",
    clientId: "1",
    finalPrice: 1209,
  },
  {
    id: "5",
    date: "Wed May 05 2025",
    serviceType: "Cleaning",
    providerId: "Store 3",
    rating: 5,
    rated: true,
    status: status.PENDING,
    subType: "Subtype",
    clientId: "1",
    finalPrice: -1,
  },
  {
    id: "6",
    date: "Wed May 05 2025",
    serviceType: "Cleaning",
    providerId: "Store 3",
    rating: 1,
    rated: true,
    status: status.COMPLETE,
    subType: "Subtype",
    clientId: "1",
    finalPrice: -1,
  },
  {
    id: "7",
    date: "Wed May 05 2025",
    serviceType: "Cleaning",
    providerId: "Store 3",
    rating: 4,
    rated: true,
    status: status.COMPLETE,
    subType: "Subtype",
    clientId: "1",
    finalPrice: 150,
  },
];
const History = () => {
  return (
    <>
      <MainMenuArrow />
      <Text style={styles.headerText}> Order History </Text>
      <ScrollView style={styles.container}>
        {historyEntries.map((order) => {
          return <HistoryEntry key={"Service" + order.id} {...order} />;
        })}
      </ScrollView>
    </>
  );
};

export default History;

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 1,
    marginVertical: 7,
  },
  headerText: {
    borderTopWidth: 1,
    paddingTop: 10,
    marginTop: 5,
    textAlign: "center",
    fontSize: 20,
  },
});
