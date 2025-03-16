import { Tabs } from "expo-router";
import { Text, StyleSheet } from "react-native";
import React from "react";
import { images } from "@/constants/icons";
import TabBarIcon from "@/components/tabBarIcon";
import { colors } from "@/constants/colors";
import Header from "@/components/header";

const TabsLayout = () => {
  return (
    <>
      <Header />
      <Tabs
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarStyle: styles.container,
          tabBarActiveBackgroundColor: colors.SELECTED_PRIMARY,
          tabBarInactiveBackgroundColor: colors.UNSELECTED_PRIMARY,

          tabBarLabel: () => (
            <Text style={styles.tabBarLabel}>
              {route.name.charAt(0).toUpperCase() + route.name.substring(1)}
            </Text>
          ),
        })}
      >
        <Tabs.Screen
          name="marketplace"
          options={{
            tabBarIcon: ({ focused }) => (
              <TabBarIcon source={images.marketplace} focused={focused} />
            ),
          }}
        />
        <Tabs.Screen
          name="history"
          options={{
            tabBarIcon: ({ focused }) => (
              <TabBarIcon source={images.history} focused={focused} />
            ),
          }}
        />
        <Tabs.Screen
          name="chat"
          options={{
            tabBarIcon: ({ focused }) => (
              <TabBarIcon source={images.chat} focused={focused} />
            ),
          }}
        />
      </Tabs>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 15,
    height: 65,
  },
  tabBarLabel: {
    fontWeight: "bold",
    fontSize: 16,
    marginTop: 5,
  },
});
export default TabsLayout;
