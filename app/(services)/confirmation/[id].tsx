import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { useLocalSearchParams } from "expo-router";
import Input from "@/components/input";
import DateInput from "@/components/dateInput";
import { DateType } from "react-native-ui-datepicker";
import { sub, SubServiceObject } from "@/constants/subServices";
import MainMenuArrow from "@/components/mainMenuArrow";
import CustomButton from "@/components/button";
import { colors } from "@/constants/colors";

const getSubServiceByName = (string: string) => {
  return sub.filter((e) => e.subService == string).at(0);
};
const ConfirmOrder = () => {
  const { id } = useLocalSearchParams();
  const [date, setDate] = useState<DateType>();
  // subservice - providerID
  const parameters = id.toString().split("-");
  const subServiceObject = getSubServiceByName(parameters[0]);
  return (
    <View style={{ padding: 25 }}>
      <MainMenuArrow/>
      <Text style={styles.textHeader}> Confirm order </Text>

      <Text style={styles.range}>Expected Price range</Text>
      <Text
        style={styles.range}
      >{`${subServiceObject?.minPrice} - ${subServiceObject?.maxPrice} JOD`}</Text>

      <DateInput
        style={{ marginRight: 70, marginTop:15 }}
        title="Select a date when you are available"
        value={date}
        setValue={setDate}
        placeholder="Date Available"
      />
      <CustomButton title="Confirm Order" onPress={()=>{}} style={{backgroundColor:colors.DARK_GRAY, marginTop:50}}/>
    </View>
  );
};

export default ConfirmOrder;

const styles = StyleSheet.create({
  textHeader: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 30,
  },
  range: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 20,
  },
});
