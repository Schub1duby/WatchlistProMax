import { Stack } from "expo-router";
import MovieHeader from "../../../components/movie/MovieHeader";
export default function Layout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          title: "Search",
            headerShown: false
        }}
      />
      <Stack.Screen
        name="detailsSearch"
        options={{
          headerTitle: () => <MovieHeader />,
          headerStyle: {
            backgroundColor: "black",
          },
          headerTintColor: "white",
        }}
      />
    </Stack>
  );
}
