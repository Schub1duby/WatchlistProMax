import { Text, StyleSheet, SafeAreaView} from "react-native"
export default function FavoritesScreen()  {
    return (
        <SafeAreaView style={defaultStyle.View}>
            <Text>Account</Text>
        </SafeAreaView>
    )
}

const defaultStyle = StyleSheet.create({
    View: {
        display: "flex",
        justifyContent: "center",
        alignContent: "center"
    }
})