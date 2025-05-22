import {
  KeyboardTypeOptions,
  StyleSheet,
  Text,
  TextInput,
  Image,
  View,
  ViewStyle,
} from "react-native";
import React, { Dispatch, SetStateAction } from "react";
import { DateType } from "react-native-ui-datepicker";
import { images } from "@/constants/icons";

interface InputProps {
  title: string;
  value: string | boolean | undefined | null;
  setValue?:
    | Dispatch<SetStateAction<string>>
    | Dispatch<SetStateAction<DateType>>
    | Dispatch<SetStateAction<string | null>>;
  disabled?: true;
  style?: ViewStyle;
  center?: true;
  keyboardType?: KeyboardTypeOptions;
  password?: true;
  phone?: true;
  placeholder?: string;
}
export default function Input({
  title,
  value,
  setValue,
  disabled,
  style,
  center,
  keyboardType,
  password,
  phone,
  placeholder,
}: InputProps) {
  return (
    <View style={[style, styles.container]}>
      <Text style={[styles.text]}>{title}</Text>
      <View>
        {phone && (
          <View style={styles.code}>
            <Image source={images.flag_jo} style={styles.flagIcon} />
            <Text style={{ paddingTop: 2 }}> +962 </Text>
          </View>
        )}
        <TextInput
          readOnly={disabled}
          style={[
            center && { textAlign: "center" },
            styles.input,
            styles.text,
            phone && { paddingLeft: 70 },
          ]}
          placeholder={placeholder}
          value={value?.toString()}
          onChangeText={setValue}
          keyboardType={keyboardType}
          secureTextEntry={password}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 5,
    marginRight: 15,
  },
  input: {
    borderRadius: 15,
    borderWidth: 1,
    padding: 10,
    fontSize: 20,
  },
  text: {
    paddingLeft: 10,
    fontSize: 16,
    fontWeight: "bold",
  },
  code: {
    alignContent: "center",
    position: "absolute",
    left: 6,
    top: "50%",
    transform: [{ translateY: "-50%" }],
    flexDirection: "row",
  },

  flagIcon: {
    zIndex: 1,
    width: 24,
    height: 24,
  },
});
