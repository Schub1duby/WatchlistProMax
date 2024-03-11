import {View, Text, StyleSheet, FlatList, Alert, TextInput} from "react-native"
import React, {useEffect, useState} from "react";
import WatchListItem from "../../../components/WatchListItem";
import SearchInput from "../../../components/SearchInput";

export default function HomeScreen() {
    let [movies, setMovies] = useState([])
    let [isLoading, setIsLoading] = useState(true)
    let [searchQuery, setSearchQuery] = useState('');

    const loadMovies = async (query) => {
        if (query === undefined || query === "") {
            return null
        }
        try {
            const response = await fetch(`https://www.omdbapi.com/?s=${query}&page=1&apikey=e69bd20e`, {
                method: 'GET',
                headers: {
                    "Content-Type": "application/json"
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


    return (
        <View>
            <SearchInput placeholder={"Search for movies ..."} value={searchQuery}
                         onSearchPress={(query => {
                             setSearchQuery(query);
                             loadMovies(query);
                         })}>

            </SearchInput>
            <FlatList data={movies}
                      renderItem={({item}) => <WatchListItem item={item}/>}
                      keyExtractor={item => item.imdbID}

            />
        </View>


    )
}

const defaultStyle = StyleSheet.create({
    View: {
        display: "flex",
        justifyContent: "center",
        alignContent: "center"
    },
    Input: {
        height: 48,
        marginTop: 5,
        marginBottom: 5,
        fontSize: 24,
        borderWidth: 2,
        borderRadius: 10,
        padding: 10,
    },
})