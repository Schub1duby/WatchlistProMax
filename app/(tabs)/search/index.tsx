import {View, Text, StyleSheet} from "react-native"
export default function HomeScreen()  {
    return (
        <View style={defaultStyle.View}>
            <Text>Search</Text>
        </View>
    )
}

const defaultStyle = StyleSheet.create({
    View: {
        display: "flex",
        justifyContent: "center",
        alignContent: "center"
    }
})