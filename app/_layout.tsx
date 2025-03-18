import { colors } from "@/constants/colors";
import { fonts } from "@/constants/fonts";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import { StatusBar } from "react-native";

export default function RootLayout() {
  const [loaded] = useFonts({
    "Pluvix": fonts.pluvix,
    "Zayan": fonts.zayan,
    "Stronghold": fonts.stronghold,
    "Lemony": fonts.lemony,
    
  })
  return (
    <>
      <StatusBar backgroundColor={colors.UNSELECTED_PRIMARY}/>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="(root)/index" />
        <Stack.Screen name="(tabs)" />
      </Stack>
    </>
  );
}
