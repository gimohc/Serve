import { StyleSheet, View, Pressable, Text, ViewStyle } from "react-native";
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
  style?: ViewStyle;
}
const DateInput = ({ title, style, value, setValue }: DateInputProps) => {
  const [showCalendar, setShowCalendar] = useState<boolean>(false);
  const defaultStyles = useDefaultStyles();
  return (
    <View style={style}>
      <Pressable onPress={() => setShowCalendar(b => !b)}>
        <Input
          center
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
    position:"absolute",
    backgroundColor: "white",
    width:"auto"
  },
  close: {
    backgroundColor: "red",
  },
});
