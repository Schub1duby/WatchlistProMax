import { Stack } from "expo-router";
import MovieHeader from "../../../components/MovieHeader";
export default function Layout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          title: "Home",
            headerShown: false
        }}
      />
      <Stack.Screen
        name="detailsHome"
        options={{
          headerTitle: "",
          headerStyle: {
            backgroundColor: "black",
          },
          headerTintColor: "white",
        }}
      />
    </Stack>
  );
}