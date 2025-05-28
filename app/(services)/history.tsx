import { StyleSheet, Text, View, ScrollView } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import HistoryEntry, { HistoryEntryProps } from "@/components/historyEntry";
import MainMenuArrow from "@/components/mainMenuArrow";
import axios from "axios";
import { AuthContext } from "@/contexts/authContext";
import { FullWindowOverlay } from "react-native-screens";
import { APIAddress } from "@/constants/API_KEY";
import Loading from "@/components/loading";

export const status = {
  COMPLETE: "Finished",
  PENDING: "Pending",
  CANCELLED: "Cancelled",
  ACCEPTED: "Accepted",
};
/*let historyEntries: HistoryEntryProps[] = [
  {
    id: 1,
    date: "Wed May 05 2025",
    serviceType: "Cleaning",
    providerId: 253,
    rating: 0,
    rated: true,
    status: status.PENDING,
    subType: "Subtype",
    clientId: 1,
    finalPrice: -1,
  },
  {
    id: 2,
    date: "Wed May 05 2025",
    serviceType: "Cleaning",
    providerId: 253,
    rating: 1,
    rated: false,
    status: status.CANCELLED,
    subType: "Subtype",
    clientId: 2,
    finalPrice: -1,
  },
  {
    id: 3,
    date: "Wed May 05 2025",
    serviceType: "Cleaning",
    providerId: 253,
    rating: 4,
    rated: true,
    status: status.ACCEPTED,
    subType: "Subtype",
    clientId: 3,
    finalPrice: -1,
  },
  {
    id: 4,
    date: "Wed May 05 2025",
    serviceType: "Cleaning",
    providerId: 253,
    rating: 4,
    rated: false,
    status: status.COMPLETE,
    subType: "Subtype",
    clientId: 4,
    finalPrice: 1209,
  },
  {
    id: 5,
    date: "Wed May 05 2025",
    serviceType: "Cleaning",
    providerId: 253,
    rating: 5,
    rated: true,
    status: status.PENDING,
    subType: "Subtype",
    clientId: 5,
    finalPrice: -1,
  },
  {
    id: 6,
    date: "Wed May 05 2025",
    serviceType: "Cleaning",
    providerId: 253,
    rating: 1,
    rated: true,
    status: status.COMPLETE,
    subType: "Subtype",
    clientId: 6,
    finalPrice: -1,
  },
  {
    id: 7,
    date: "Wed May 05 2025",
    serviceType: "Cleaning",
    providerId: 253,
    rating: 4,
    rated: true,
    status: status.COMPLETE,
    subType: "Subtype",
    clientId: 2,
    finalPrice: 150,
  },
  {
    id: 252,
    date: "Wed May 05 2025",
    serviceType: "Cleaning",
    providerId: 253,
    rating: 4,
    rated: true,
    status: status.PENDING,
    subType: "Subtype",
    clientId: 2,
    finalPrice: 150,
  },
];
*/
const History = () => {
  const [historyEntries, setHistoryEntries] = useState<HistoryEntryProps[]>();

  const [loading, setLoading] = useState<boolean>(false);

  const userId = useContext(AuthContext);
  useEffect(() => {
    const fetchHistoryEntries = async () => {
      try {
        const response = await axios.get(
          APIAddress + "/historyService/getHistoryByUserId/" +
            userId.user?.id
        );
        const data = response.data;
        setHistoryEntries(data);
      } catch (error) {
        console.error("Unable to fetch user history");
        window.alert("Unable to fetch user history");
      }
    };
    setLoading(true);
    fetchHistoryEntries();
    setLoading(false);
  }, []);
  return (
    <>
      {loading && <Loading/>}
      <MainMenuArrow />
      <Text style={styles.headerText}> Order History </Text>
      <ScrollView style={styles.container}>
        {historyEntries?.map((order) => {
          return <HistoryEntry key={"Service" + order.orderId} {...order} />;
        })}
        <Text>{historyEntries?.length == 0 ? "No orders placed yet" : ""}</Text>
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
