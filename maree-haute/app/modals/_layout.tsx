import { Stack } from "expo-router";
export default function Layout() {
  return (
    <Stack>
      {/* <Stack.Screen
        name="TestPage"
        options={{
          // Hide the header for all other routes.
          headerShown: true,
        }}
      /> */}
      <Stack.Screen
        name="modalCreateSpot"
        options={{
          // Set the presentation mode to modal for our modal route.
          presentation: "modal",
        }}
      />
    </Stack>
  );
}
