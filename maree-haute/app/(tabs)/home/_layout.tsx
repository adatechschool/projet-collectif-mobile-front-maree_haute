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
          headerShown: true,
          // headerTransparent: true,
        }}
      />
    </Stack>
  );
}
