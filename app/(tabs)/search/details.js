import { Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { useLocalSearchParams } from "expo-router";
export default function Details() {
  let [movies, setMovies] = useState([]);
  let [isLoading, setIsLoading] = useState(true);
  const { imdbID } = useLocalSearchParams();

  useEffect(() => {
    if (!imdbID) {
      return;
    }

    const loadMovieDetails = async () => {
      try {
        setIsLoading(true);
        let url = "http://www.omdbapi.com/?i=" + imdbID + "&apikey=e69bd20e";
        const response = await fetch(url);
        const data = await response.json();
        setMovies(data);
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
    <View>
      <Text>{movies.Title}</Text>
      <Text>{movies.Plot}</Text>
    </View>
  );
}
