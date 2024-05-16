import { Stack } from "expo-router";
export default function Layout() {
  return (
    <Stack>
      <Stack.Screen
        name="homeTab"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="[id]"
        options={{
          title: "Spot",
          headerShown: false,
          // headerTransparent: true,
        }}
      />
      <Stack.Screen
        name="searchModal"
        options={{
          headerTransparent: true,
          presentation: "modal",
          title: "Search",
        }}
      />
    </Stack>
  );
}
