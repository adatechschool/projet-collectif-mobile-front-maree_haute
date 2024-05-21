import { Stack, router } from "expo-router";
import { Button } from "react-native";
export default function Layout() {
  return (
    <Stack>
      <Stack.Screen
        name="savedTab"
        options={{
          // Hide the header for all other routes.
          headerShown: true,
        }}
      />
      <Stack.Screen
        name="listModal"
        options={{
          headerTransparent: true,
          // Set the presentation mode to modal for our modal route.
          presentation: "modal",
          headerLeft: () => (
            <Button onPress={() => router.back()} title="Cancel" />
          ),
        }}
      />
    </Stack>
  );
}
