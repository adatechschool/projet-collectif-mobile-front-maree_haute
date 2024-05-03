import React from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Tabs, Stack } from "expo-router";

export default function TabLayout() {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: "blue" }}>
      <Tabs.Screen
        name="index"
        options={{
          title: "Explore",
          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name="home" color={color} />
          ),
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="mySpots"
        options={{
          title: "My spots",
          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name="cog" color={color} />
          ),
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: "Settings",
          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name="cog" color={color} />
          ),
          headerShown: false,
        }}
      />
      {/* <Tabs.Screen
        name="modal"
        options={{
          href: null,
          title: "Settings",
          // presentation: 'modal',
          headerShown: false,
        }}
      /> */}
    </Tabs>
  );
}
