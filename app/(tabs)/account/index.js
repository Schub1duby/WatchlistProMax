import { Text, StyleSheet, SafeAreaView} from "react-native"
export default function FavoritesScreen()  {
    return (
        <SafeAreaView style={defaultStyle.View}>
            <Text style={defaultStyle.Text}>Coming Soon ...</Text>
        </SafeAreaView>
    )
}

const defaultStyle = StyleSheet.create({
    View: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "black",
        height: "100%",
        width: "100%",
    },
    Text: {
        color: "white",
        fontSize: 25
    }
})