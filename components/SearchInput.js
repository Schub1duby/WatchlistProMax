import {StyleSheet, Text, TextInput, TouchableOpacity, View} from "react-native";
import {useState} from "react";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function SearchInput({placeholder, value, onSearchPress}) {

    let [inputValue, setInputValue] = useState(value)
    return (
        <View style={styles.container}>
            <View style={styles.searchbar}>
                <TextInput
                    style={styles.input}
                    value={inputValue}
                    placeholder={placeholder}
                    onChangeText={setInputValue}
                />

                <TouchableOpacity onPress={() => onSearchPress(inputValue)}>
                    <View style={styles.searchButton}>
                        <Ionicons
                            size={42}
                            style={{marginBottom: -3}}
                            name="search"
                            color="#E77D00"
                        />
                    </View>
                </TouchableOpacity>
            </View>


        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: "row",
        alignContent: "center",
        width: "100%",
        marginBottom: 15,
        marginTop: 15
    },
    input: {
        height: 42,
        marginTop: 5,
        marginBottom: 5,
        fontSize: 20,
        backgroundColor: "white",
        borderWidth: 2,
        borderRadius: 10,
        padding: 10,
        paddingRight: 50,
        marginLeft: 8,
        width: "75%"

    },

    paddingLR: {
        paddingLeft: 3,
        paddingRight: 3,
        borderWidth: 2
    },

    searchbar: {
        display: "flex",
        flexDirection: "row",
        alignContent: "center",
        justifyContent: "space-between"
    },
    searchButton: {
        width: 60,
        marginTop: 5,
        marginLeft: 20,
        backgroundColor: "black"
    }

})