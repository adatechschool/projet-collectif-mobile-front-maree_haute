import { Stack, router } from "expo-router";
import { Button } from "react-native";
export default function Layout() {
  return (
    <Stack>
      <Stack.Screen
        name="mySpotsTab"
        options={{
          // Hide the header for all other routes.
          headerShown: true,
          title: "My Spots",
        }}
      />
      <Stack.Screen
        name="modal"
        options={{
          headerTransparent: true,
          // Set the presentation mode to modal for our modal route.
          presentation: "modal",
          headerLeft: () => (
            <Button onPress={() => router.back()} title="Cancel" />
          ),
          headerRight: () => <Button title="Submit" />,
        }}
      />
    </Stack>
  );
}
