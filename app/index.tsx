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

// for marketplace.tsx
// better to map straight from database
// database is going to look like Services (main table): cleaning car computer and gardening,
// each of the main table elements has a subtable of each option in that table
// each option has multiple options of stores
// can preset all of the background colors in a constant array for mapping

