import {View, Text, StyleSheet} from "react-native"
export default function FavoritesScreen()  {
    return (
        <View style={defaultStyle.View}>
            <Text>Account</Text>
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