import {View, Text, StyleSheet, TouchableOpacity, Image} from "react-native";
import {Link} from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";
import React from "react";

export default function WatchListItem({item, path}) {
    return (
        <Link
            href={{pathname: path, params: {imdbID: item.imdbID}}}
            asChild
        >
            <TouchableOpacity>
                <View style={styles.container}>
                    <Image
                        style={styles.image}
                        source={{uri: item.Poster}}
                    />
                    <View>
                        <Text style={styles.text}>{item.Title}</Text>
                        <Text style={styles.text}>{item.Year}</Text>
                    </View>

                </View>
            </TouchableOpacity>
        </Link>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row",
        height: 104,
        backgroundColor: "#2C2A2F",
        alignItems: "center",
        justifyContent: "left",
        paddingLeft: 16,
        paddingRight: 16,
        paddingTop: 8,
        paddingBottom: 8,
        margin: 8,
        borderRadius: 10,
        marginTop: 4,
        marginBottom: 4
    },
    text: {
        paddingLeft: 16,
        paddingRight: 16,
        color: "white"
    },
    image: {
        width: 63,
        height: 96,
        borderRadius: 5
    }
});
