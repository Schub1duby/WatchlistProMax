import { Text, SafeAreaView } from "react-native";
import { useEffect, useState } from "react";
import { useLocalSearchParams } from "expo-router";
import { useAsyncStorage } from "@react-native-async-storage/async-storage";
import WatchListButton from "../../../components/WatchListButton";

export default function DetailsSearch() {
  let [movie, setMovie] = useState([]);
  const { getItem, setItem } = useAsyncStorage("Items");
  let [isLoading, setIsLoading] = useState(true);
  const { imdbID } = useLocalSearchParams();

  const onAddToWatchList = async () => {
    const storedItems = await getItem();
    const parsedItems = storedItems ? JSON.parse(storedItems) : [];
    if (parsedItems.find((item) => item.imdbID === movie.imdbID)) {
      console.log("Item already in list");
      return;
    }
    parsedItems.push(movie);
    await setItem(JSON.stringify(parsedItems));

  };
  
  useEffect(() => {
    const loadItems = async () => {
      const storedItems = await getItem();
      const parsedItems = storedItems ? JSON.parse(storedItems) : [];
      setMovie(parsedItems);
    };
  
    loadItems();
    if (!imdbID) {
      return;
    }

    const loadMovieDetails = async () => {
      try {
        setIsLoading(true);
        let url = "http://www.omdbapi.com/?i=" + imdbID + "&apikey=e69bd20e";
        const response = await fetch(url);
        const data = await response.json();
        setMovie(data);
        console.log(data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };

    loadMovieDetails();
  }, [imdbID]);
  return isLoading ? (
    <Text>Loading</Text>
  ) : (
    <SafeAreaView>
      <Text>{movie.Title}</Text>
      <Text>{movie.Plot}</Text>
      <WatchListButton onPress={onAddToWatchList}>
        <Text>Add to Watchlist</Text>
      </WatchListButton>
    </SafeAreaView>
  );
}
