import { Stack, router } from "expo-router";
import { Button } from "react-native";

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
          presentation: "transparentModal",
          animation: "fade",
          headerShown: false,
          // headerTransparent: true,
        }}
      />
      <Stack.Screen
        name="searchModal"
        options={{
          headerTransparent: true,
          presentation: "modal",
          title: "Filters",
          headerLeft: () => (
            <Button onPress={() => router.back()} title="Cancel" />
          ),
        }}
      />
    </Stack>
  );
}
