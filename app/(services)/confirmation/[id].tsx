import { StyleSheet, Text, View } from "react-native";
import React, { useContext, useState } from "react";
import { router, useLocalSearchParams } from "expo-router";
import Input from "@/components/input";
import DateInput from "@/components/dateInput";
import { DateType } from "react-native-ui-datepicker";
import { sub, SubServiceObject } from "@/constants/subServices";
import MainMenuArrow from "@/components/mainMenuArrow";
import CustomButton from "@/components/button";
import { colors } from "@/constants/colors";
import axios from "axios";
import { AuthContext } from "@/contexts/authContext";
import { APIAddress } from "@/constants/API_KEY";

const getSubServiceByName = (string: string) => {
  return sub.filter((e) => e.subService == string).at(0);
};
const ConfirmOrder = () => {
  const { id } = useLocalSearchParams();
  const { user } = useContext(AuthContext);
  const [date, setDate] = useState<DateType>();
  const parameters = id.toString().split("-");
  const subServiceObject = getSubServiceByName(parameters[1]);

  const createOrder = async () => {
    try {
      const response = await axios.post(
        APIAddress + "/historyService/createHistory",
        {
          status: "Pending",
          date: date?.toString(),
          serviceType: parameters[0],
          subType: subServiceObject?.subService,
          userId: user?.id,
          providerId: parameters[2],
          rating: -1,
          feedback: "",
          finalPrice: -1,
          rated: false,
        }
      );
      router.replace("/");
    } catch (error) {
      console.error("Unable to complete order");
      window.alert("Error completing order");
    }
  };
  // service - subservice - providerID
  return (
    <View style={{ padding: 25 }}>
      <MainMenuArrow />
      <Text style={styles.textHeader}> Confirm order </Text>

      <Text style={styles.range}>Expected Price range</Text>
      <Text
        style={styles.range}
      >{`${subServiceObject?.minPrice} - ${subServiceObject?.maxPrice} JOD`}</Text>

      <DateInput
        style={{ marginRight: 70, marginTop: 15 }}
        title="Select a date when you are available"
        value={date}
        setValue={setDate}
        placeholder="Date Available"
      />
      <CustomButton
        title="Confirm Order"
        onPress={() => {
          createOrder();
        }}
        style={{ backgroundColor: colors.DARK_GRAY, marginTop: 50 }}
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
    marginBottom: 30,
  },
  range: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 20,
  },
});
