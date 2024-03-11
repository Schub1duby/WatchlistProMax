import { Stack } from "expo-router";
import MovieHeader from "../../../components/movie/MovieHeader";
export default function Layout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          title: "Movies",
            headerShown: false
        }}
      />
      <Stack.Screen
        name="details"
        options={{
          headerTitle: () => <MovieHeader />,
        }}
      />
    </Stack>
  );
}
