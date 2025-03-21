import { StyleSheet, Image, Pressable, View, ViewStyle, ImageStyle } from "react-native";
import React, { Dispatch, SetStateAction } from "react";
import { images } from "@/constants/icons";

interface RatingContainerProps {
  rating: number;
  setRating?: Dispatch<SetStateAction<number>>;
  style?: ImageStyle;
}
const RatingContainer = ({ rating, setRating, style }: RatingContainerProps) => {
  return (
    <View style={styles.ratingContainer}>
      {Array.from({ length: 5 }, (_, index) => (
        <Pressable
          key={"Star" + index}
          onPress={() => {
            if (setRating) setRating(index + 1);
          }}
        >
          <Image
            source={index >= rating ? images.emptyStar : images.star}
            style={[ styles.ratingIcon, style]}
          />
        </Pressable>
      ))}
    </View>
  );
};

export default RatingContainer;

const styles = StyleSheet.create({
  ratingContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginVertical: 15,
    flex: 1,
  },
  ratingIcon: {
    width: 64,
    height: 64,
  },
});
