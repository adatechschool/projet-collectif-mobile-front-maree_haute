import { Stack } from "expo-router/stack";

export function AppLayout() {
  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
    </Stack>
  );
}

export function AppModals() {
  return (
    <Stack.Screen
      name="modal"
      options={{
        // Set the presentation mode to modal for our modal route.
        presentation: "modal",
      }}
    />
  );
}
