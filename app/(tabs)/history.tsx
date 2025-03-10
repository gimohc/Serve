import { StyleSheet, Text, View, ScrollView } from "react-native";
import React from "react";
import HistoryEntry, { HistoryEntryProps } from "@/components/historyEntry";

const historyEntries: HistoryEntryProps[] = [
  {
    id: "1",
    date: new Date("December 16, 1995 23:24:00"),
    serviceType: "Cleaning",
    provider: "Store 1",
    rating: 0,
  },
  {
    id: "2",
    date: new Date("December 16, 1995 23:24:00"),
    serviceType: "Cleaning",
    provider: "Store 2",
    rating: 1,
  },
  {
    id: "3",
    date: new Date("December 16, 1995 23:24:00"),
    serviceType: "Cleaning",
    provider: "Store 3",
    rating: 4,
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
