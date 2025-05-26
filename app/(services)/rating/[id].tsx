import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import RatingContainer from "@/components/ratingContainer";
import { colors } from "@/constants/colors";
import MainMenuArrow from "@/components/mainMenuArrow";
import axios from "axios";

// orderRoute={`${props.id} - ${props.provider} - ${props.serviceType}`} without spaces is what this page is getting

export const getProviderNameById = async (id: number | string) : Promise<string> => {
  try {
    const response = await axios.get(
      "http://10.0.2.2:8080/serviceProviders/getServiceProviderNameById/" + id
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching provider name");
    throw error;
  }
};

interface RateOrderProps {
  rating: number;
  feedback: string;
}
const rateOrder = async (rating: number, feedback: string) => {
  try {
    const response = await axios.get(
      "http://10.0.2.2:8080/historyService/setOrderRatingByOrderId/" +
        rating +
        feedback
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching provider name");
    throw error;
  }
};

export default function Rating() {
  const [rating, setRating] = useState<number>(5);
  const [feedback, setFeedback] = useState<string>("");
  const [providerName, setProviderName] = useState<string>("None");
  useEffect(() => {
    const fetchProviderNameById = async () => {
      const name = await getProviderNameById(parameters[1]);
      setProviderName(name);
    };
    fetchProviderNameById();
  }, []);

  const { id } = useLocalSearchParams();

  const string = id.toString();
  const parameters = string.split("-");
  // parameters[0] is the provider name
  // parameters[1] is the provider number
  // parameters[2] is the service type user received

  return (
    <View style={styles.page}>
      <MainMenuArrow />
      <Text style={styles.header}>Order Rating</Text>

      <View style={styles.container}>
        <Text style={[styles.center, { fontSize: 30 }]}>
          {providerName} / {parameters[2]}
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
      <TouchableOpacity
        style={styles.rateButton}
        onPress={() => {
          rateOrder(rating, feedback);
        }}
      >
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
    textAlign: "center",
    fontSize: 25,
    color: "white",
    fontWeight: "bold",
  },
  rateButton: {
    backgroundColor: colors.DARKER_PRIMARY,
    padding: 10,
    marginHorizontal: 15,
    borderRadius: 15,
  },
});
