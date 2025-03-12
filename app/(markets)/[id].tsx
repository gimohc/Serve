import { Text, View } from "react-native";
import { useLocalSearchParams } from "expo-router";

export default function MarketDetail() {
  const { id } = useLocalSearchParams();

  return (
    <View>
      <Text>Item Details for ID: {id}</Text>
    </View>
  );
}
