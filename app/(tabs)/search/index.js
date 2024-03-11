import {View, Text, StyleSheet, FlatList, Alert} from "react-native"
import React, {useEffect, useState} from "react";
import WatchListItem from "../../../components/WatchListItem";

export default function HomeScreen() {
    let [movies, setMovies] = useState([])
    let [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const loadMovies = async () => {
            try {
                const response = await fetch("https://www.omdbapi.com/?s=iron&page=1&apikey=e69bd20e", {
                    method: 'GET',
                    headers: {
                        contentType: "application/json"
                    }
                })
                if (!response.ok) {
                    Alert.alert("Error", `The Server responded with ${response.status} ${response.statusText}`)
                }
                const movieData = await response.json()
                if (movieData.Response === "True") {
                    setMovies(movieData.Search)
                } else {
                    Alert.alert("Error", "No Movies found")
                }
                setIsLoading(false)
            } catch (error) {
                console.log(error)
                Alert.alert("An Error occurred", error.message)
            }
        }
        loadMovies()
    }, [])

    //console.log(movies)


    return (
        isLoading ?
            <Text>Loading</Text>
            :
            <FlatList data={movies}
                      renderItem={({item}) => <WatchListItem item={item} />}
                      keyExtractor={item => item.imdbID}

            />

    )
}

const defaultStyle = StyleSheet.create({
    View: {
        display: "flex",
        justifyContent: "center",
        alignContent: "center"
    }
})