import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { useLocalSearchParams } from "expo-router";
import { useState } from "react";
import RatingContainer from "@/components/ratingContainer";
import { colors } from "@/constants/colors";
import MainMenuArrow from "@/components/mainMenuArrow";

// orderID={`${props.id} - ${props.provider} - ${props.serviceType}`} without spaces is what this is getting

export default function Rating() {
  const [rating, setRating] = useState<number>(5);
  const [feedback, setFeedback] = useState<string>("");

  const { id } = useLocalSearchParams();

  const string = id.toString();
  const parameters = string.split("-");
  // parameters[0] is the orderID number
  // parameters[1] is the provider number
  // parameters[2] is the service type user received

  return (
    <View style={styles.page}>
      <MainMenuArrow/>
      <Text style={styles.header}>Order Rating</Text>

      <View style={styles.container}>
        <Text style={[styles.center, { fontSize: 30 }]}>
          {parseInt(parameters[1])} / {parameters[2]}
        </Text>
        <Text style={[styles.center, { fontSize: 23 }]}>Thanks for Rating</Text>
        <RatingContainer setRating={setRating} rating={rating} />
      </View>

      <Text style={styles.feedback}>Feedback (Optional)</Text>

      <View style={styles.feedbackContainer}>
      <TextInput
        multiline={true}
        numberOfLines={4}
        value={feedback}
        onChangeText={setFeedback}
        style={styles.textArea}
        placeholder="Type something here..."
      />
      </View>
      <TouchableOpacity style={styles.rateButton}>
        <Text style={styles.rateText}>Rate</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    height: "100%",
  },
  header: {
    marginTop: 20,
    fontSize: 20,
    textAlign: "center",
  },
  container: {
    marginTop: 100,
  },
  center: {
    textAlign: "center",
    margin: 7,
  },
  feedback: {
    marginTop: 100,
    marginLeft: 25,
    fontSize: 16,
  },
  textArea: {
    padding: 10,
    margin: 15,
    borderWidth: 1,
    borderRadius: 15,
  },
  feedbackContainer: {
    height: 300,
    marginBottom: 15,
  },
  rateText: {
    textAlign:"center",
    fontSize:25,
    color:"white",
    fontWeight:"bold"
  },
  rateButton: {
    backgroundColor:colors.DARKER_PRIMARY,
    padding:10,
    marginHorizontal:15,
    borderRadius:15,
  },
});
