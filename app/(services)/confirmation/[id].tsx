import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { useLocalSearchParams } from "expo-router";
import Input from "@/components/input";
import DateInput from "@/components/dateInput";
import { DateType } from "react-native-ui-datepicker";

const ConfirmOrder = () => {
  const { id }  = useLocalSearchParams();
  const [date, setDate] = useState<DateType>();
  // subservice - providerID
  const parameters = id.toString().split("-");
  return (
    <View>
      <Text style={styles.textHeader}> Confirm order </Text>
      <Text></Text>
      <DateInput
        style={{marginHorizontal:40}}
        title="Available date"
        value={date}
        setValue={setDate}
        placeholder="Date Available"
      />
    </View>
  );
};

export default ConfirmOrder;

const styles = StyleSheet.create({
  textHeader: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 15,
  },
});
