import { StyleSheet, View, Pressable, Text } from "react-native";
import React, { Dispatch, SetStateAction, useState } from "react";
import Input from "./input";

import DateTimePicker, {
  DateType,
  useDefaultStyles,
} from "react-native-ui-datepicker";

interface DateInputProps {
  title: string;
  value: DateType;
  setValue: Dispatch<SetStateAction<DateType>>;
}
const DateInput = ({ title, value, setValue }: DateInputProps) => {
  const [showCalendar, setShowCalendar] = useState<boolean>(false);
  const defaultStyles = useDefaultStyles();
  return (
    <View>
      <Pressable onPress={() => setShowCalendar(true)}>
        <Input
          title={title}
          value={value?.toString().substring(4,15)}
          setValue={setValue}
          disabled
        />
      </Pressable>
      {showCalendar && (
        <View style={styles.dateContainer}>
          <DateTimePicker
            mode="single"
            date={value}
            onChange={({ date }) => setValue(date)}
            styles={defaultStyles}
          />
          <Pressable
            style={styles.close}
            onPressIn={() => {
              setShowCalendar((b) => !b);
            }}
          >
            <Text> Close </Text>
          </Pressable>
        </View>
      )}
    </View>
  );
};

export default DateInput;

const styles = StyleSheet.create({
  dateContainer: {
    zIndex: 1,

    backgroundColor: "white",
  },
  close: {
    backgroundColor: "red",
  },
});
