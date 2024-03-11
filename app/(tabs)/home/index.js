import { View, Text, StyleSheet, FlatList } from "react-native";
import WatchListItem from "../../../components/WatchListItem";
import { useEffect, useState } from "react";
import { useAsyncStorage } from "@react-native-async-storage/async-storage";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  const { getItem, setItem } = useAsyncStorage("Items");
  let [movies, setMovies] = useState([]);

  useEffect(() => {
    console.log("useEffect");
    const loadItems = async () => {
      const storedItems = await getItem();
      const parsedItems = storedItems ? JSON.parse(storedItems) : [];
      setMovies(parsedItems);
    };
    loadItems();
  }, []);
  return (
    <SafeAreaView>
    <FlatList
      data={movies}
      renderItem={({ item }) => <WatchListItem item={item} />}
      keyExtractor={(item) => item.imdbID}
    />
    </SafeAreaView>
  );
}

const defaultStyle = StyleSheet.create({
  View: {
    display: "flex",
    justifyContent: "center",
    alignContent: "center",
  },
});
