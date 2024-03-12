import { Text, SafeAreaView, StyleSheet, Image, View } from "react-native";
import { useEffect, useState } from "react";
import { useLocalSearchParams } from "expo-router";
import { useAsyncStorage } from "@react-native-async-storage/async-storage";
import WatchListButton from "../../../components/WatchListButton";
import Spinner from "../../../components/Spinner";

export default function DetailsHome() {
  let [movie, setMovie] = useState([]);
  const { getItem, setItem } = useAsyncStorage("Items");
  let [isLoading, setIsLoading] = useState(true);
  const { imdbID } = useLocalSearchParams();

  const onAddToWatchList = async () => {
    const storedItems = await getItem();
    let parsedItems = storedItems ? JSON.parse(storedItems) : [];
    if (parsedItems.find((item) => item.imdbID === movie.imdbID)) {
      parsedItems = parsedItems.filter((item) => item.imdbID !== movie.imdbID);
    } else {
      parsedItems.push(movie);
    }
    await setItem(JSON.stringify(parsedItems));
  };

  isItemInWatchList = async () => {
    const storedItems = await getItem();
    let parsedItems = storedItems ? JSON.parse(storedItems) : [];
    return parsedItems.find((item) => item.imdbID === movie.imdbID);
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
        let url = "https://www.omdbapi.com/?i=" + imdbID + "&apikey=e69bd20e";
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
      <SafeAreaView style={defaultStyle.spinnerView}>
        <Spinner />
      </SafeAreaView>

  ) : (
    <SafeAreaView style={defaultStyle.View}>
      <Text style={defaultStyle.Title}>{movie.Title}</Text>
      <View style={defaultStyle.Row}>
        <View style={defaultStyle.Column}>
          <Text style={defaultStyle.Text}>{movie.Year}, directed by</Text>
          <Text style={defaultStyle.Subtitle}>{movie.Director}</Text>
        </View>
        <View style={defaultStyle.Column2}>
          <Image source={{ uri: movie.Poster }} style={defaultStyle.Poster} />
        </View>
      </View>
      <View style={defaultStyle.Row2}>
        <View style={defaultStyle.Column}>
          <Text style={defaultStyle.Subtitle}>Genre:</Text>
          <Text style={defaultStyle.Subtitle}>Runtime:</Text>
          <Text style={defaultStyle.Subtitle}>Age rating:</Text>
          <Text style={defaultStyle.Subtitle}>Rating:</Text>
        </View>
        <View style={defaultStyle.Column3}>
          <Text style={defaultStyle.Text}>{movie.Genre}</Text>
          <Text style={defaultStyle.Text}>{movie.Runtime}</Text>
          <Text style={defaultStyle.Text}>{movie.Rated}</Text>
          <Text style={defaultStyle.Text}>{movie.imdbRating}</Text>
        </View>
      </View>
      <View style={defaultStyle.Row2}>
        <View style={defaultStyle.Column}>
          <Text style={defaultStyle.Subtitle}>Plot</Text>
          <Text style={defaultStyle.Text}>{movie.Plot}</Text>
        </View>
      </View>

      <WatchListButton onPress={onAddToWatchList} isInWatchList={isItemInWatchList}/>
    </SafeAreaView>
  );
}

const defaultStyle = StyleSheet.create({
  View: {
    backgroundColor: "black",
    height: "100%",
    paddingLeft: 16,
    paddingRight: 16,
  },
  Title: {
    fontWeight: "bold",
    alignSelf: "center",
    fontSize: 24,
    color: "white",
  },
  Subtitle: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  Text: {
    color: "white",
    fontSize: 16,
  },
  Column: {
    flex: 1,
    flexDirection: "column",
  },
  Column2: {
    flex: 2,
    flexDirection: "column",
    alignItems: "center",
  },
  Column3: {
    flex: 2,
    flexDirection: "column",
  },
  Row: {
    flex: 2,
    flexDirection: "row",
    borderRadius: 10,
    backgroundColor: "#2C2A2F",
    padding: 8,
    marginTop: 8,
    marginBottom: 8,
  },
  Row2: {
    flex: 1,
    flexDirection: "row",
    marginTop: 8,
    marginBottom: 8,
    alignItems: "center",
    borderRadius: 10,
    backgroundColor: "#2C2A2F",
    padding: 8,
  },
  Poster: {
    flex: 1,
    width: "100%",
    aspectRatio: 0.6535947712418301, // 300 / 459
    borderRadius: 10,
  },
  spinnerView: {
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black"
  }
});
