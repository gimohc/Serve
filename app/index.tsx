import { router } from "expo-router";
import { useEffect } from "react";
import { StatusBar, View } from "react-native";

export default function Index() {
 
  useEffect(() => {
    const id = setTimeout(() => {
      router.replace("./(tabs)/marketplace")
    }, 1500);
    return () => clearTimeout(id);
  }, [])

  return (
    <>
    <StatusBar hidden={true}/>
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#ff0",
      }}
    >
    </View>
    </>
  );
}

/*
  10s -> cleaning services
  20s -> car services
  30s -> pc services
  40s -> gardening services


*/