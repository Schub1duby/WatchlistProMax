import {StyleSheet, FlatList, SafeAreaView} from "react-native";
import WatchListItem from "../../../components/WatchListItem";
import { useEffect, useState } from "react";
import { useAsyncStorage } from "@react-native-async-storage/async-storage";

export default function HomeScreen() {
  const { getItem, setItem } = useAsyncStorage("Items");
  let [movies, setMovies] = useState([]);
  const [storageKey, setStorageKey] = useState(0); // new state variable

  useEffect(() => {
    const loadItems = async () => {
      const storedItems = await getItem();
      const parsedItems = storedItems ? JSON.parse(storedItems) : [];
      setMovies(parsedItems);
      setStorageKey(storageKey + 1); // increment storageKey
    };
    loadItems();
  }, [storageKey]); // pass storageKey as a dependency
  return (
      <SafeAreaView style={defaultStyle.View}>
        <FlatList
            data={movies}
            renderItem={({ item }) => <WatchListItem item={item} path="home/detailsHome" />}
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
      backgroundColor: "black",
      height: "100%"
  },
});
