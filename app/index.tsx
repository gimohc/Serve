import { router } from "expo-router";
import { useEffect } from "react";
import { Text, View } from "react-native";

export default function Index() {
 
  useEffect(() => {
    const id = setTimeout(() => {
      router.replace("./(tabs)/marketplace")
    }, 2000);
    return () => clearTimeout(id);
  }, [])

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#ff0",
      }}
    >
    </View>
  );
}
