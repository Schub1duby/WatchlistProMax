import { View, Text, StyleSheet, FlatList } from "react-native"
import WatchListItem from "../../../components/WatchListItem"
export default function HomeScreen() {
    let watchList = ["AAPL", "TSLA", "GOOGL", "AMZN", "MSFT", "FB", "NFLX", "DIS", "NVDA", "PYPL"];

    return (
        <FlatList data={watchList}
            renderItem={WatchListItem} />
    )
}

const defaultStyle = StyleSheet.create({
    View: {
        display: "flex",
        justifyContent: "center",
        alignContent: "center"
    }
})