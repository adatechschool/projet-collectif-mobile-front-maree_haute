import React from "react";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { Tabs, Stack } from "expo-router";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#5EB1EF",
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: "Explore",
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="surfing" size={24} color={color} />
          ),
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="mySpots"
        options={{
          title: "My spots",
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="tsunami" size={24} color={color} />
          ),
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: "Settings",
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="settings" size={24} color={color} />
          ),
          headerShown: false,
        }}
      />
    </Tabs>
  );
}
