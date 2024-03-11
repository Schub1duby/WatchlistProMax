import {StyleSheet, Text, TextInput, TouchableOpacity, View} from "react-native";
import {useState} from "react";

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
                        <Text style={styles.paddingLR}>Search</Text>
                    </View>
                </TouchableOpacity>
            </View>



        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: 242,
        marginBottom: 15
    },
    input: {
        height: 48,
        marginTop: 5,
        marginBottom: 5,
        fontSize: 20,
        color: "black",
        borderWidth: 2,
        borderRadius: 10,
        padding: 10,
        paddingRight: 50,
        marginLeft: 8
    },

    paddingLR: {
        paddingLeft: 3,
        paddingRight: 3,
        borderWidth: 2
    },

    searchbar: {
        display: "flex",
        flexDirection: "row"
    },
    searchButton: {
        width: 60,
        marginTop: 5,
        marginLeft: 20
    }

})