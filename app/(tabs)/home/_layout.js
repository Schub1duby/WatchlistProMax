import { Stack } from "expo-router";
import MovieHeader from "../../../components/movie/MovieHeader";
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
          headerTitle: () => <MovieHeader />,
        }}
      />
    </Stack>
  );
}
