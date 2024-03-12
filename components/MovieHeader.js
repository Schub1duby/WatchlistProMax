import {FlatList, StyleSheet, Text, View} from "react-native"
import {useLocalSearchParams} from "expo-router"
import React from "react";

export default function MovieHeader() {
    const {movieName} = useLocalSearchParams()
    console.log(movieName)
    return (
        <View>
            <Text style={styles.title}>{movieName}</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    title: {
        fontWeight: "bold",
        fontSize: 24,
        color: "white"
    }
})