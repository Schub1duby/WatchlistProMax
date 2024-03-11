import {Redirect} from "expo-router"
import {View} from "react-native";

export default function HomeScreen() {
    return (
        <View style={{backgroundColor: "red"}}>
            <Redirect href="/home"/>
        </View>
    )
}