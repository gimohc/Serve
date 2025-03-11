import { StyleSheet, Text, View, ScrollView } from "react-native";
import React from "react";
import HistoryEntry, { HistoryEntryProps } from "@/components/historyEntry";

const historyEntries: HistoryEntryProps[] = [
  {
    id: "1",
    date: new Date(2019, 10, 1, 5, 10),
    serviceType: "Cleaning",
    provider: "Store 1",
    rating: 0,
    rated:true,
  },
  {
    id: "2",
    date: new Date("2004-12-12T12:30:00"),
    serviceType: "Cleaning",
    provider: "Store 2",
    rating: 1,
    rated:false,
  },
  {
    id: "3",
    date: new Date(2025, 2, 2, 13, 55),
    serviceType: "Cleaning",
    provider: "Store 3",
    rating: 4,
    rated:true,
  },
  {
    id: "4",
    date: new Date(2025, 2, 2, 13, 55),
    serviceType: "Cleaning",
    provider: "Store 3",
    rating: 4,
    rated:false,
  },
  {
    id: "5",
    date: new Date(2025, 2, 2, 13, 55),
    serviceType: "Cleaning",
    provider: "Store 3",
    rating: 5,
    rated:true,
  },
  {
    id: "6",
    date: new Date(2025, 2, 2, 13, 55),
    serviceType: "Cleaning",
    provider: "Store 3",
    rating: 1,
    rated:true,
  },
  {
    id: "7",
    date: new Date(2025, 2, 2, 13, 55),
    serviceType: "Cleaning",
    provider: "Store 3",
    rating: 4,
    rated:false,
  },
];
const History = () => {
  return (
    <ScrollView style={styles.container}>
      {historyEntries.map((entry) => {
        return <HistoryEntry key={"Service" + entry.id} {...entry}/>;
      })}
    </ScrollView>
  );
};

export default History;

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    marginVertical: 7,
  },
});
