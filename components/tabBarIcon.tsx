import {
  ImageSourcePropType,
  StyleSheet,
  Image,
  ImageStyle,
} from "react-native";
import React from "react";
import { colors } from "@/constants/colors";

interface TabIconProps {
  source: ImageSourcePropType;
  focused: boolean;
  style?: ImageStyle;
}

const TabBarIcon = ({ source, focused }: TabIconProps) => {
  return (
    <Image
      source={source}
      style={[
        styles.icon,
        { tintColor: focused ? colors.WHITE : colors.LIGHT_GRAY },
      ]}
    />
  );
};

export default TabBarIcon;

const styles = StyleSheet.create({
    icon: {
        marginTop:5,
        width:32,
        height:32,
    },
});
