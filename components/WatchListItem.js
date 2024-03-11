import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Link } from "expo-router";
export default function WatchListItem({ item, path }) {
  return (
    <Link
      href={{ pathname: path, params: { imdbID: item.imdbID } }}
      asChild
    >
      <TouchableOpacity>
        <View style={styles.container}>
          <Text style={styles.text}>{item.Title}</Text>
        </View>
      </TouchableOpacity>
    </Link>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    height: 56,
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "left",
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 8,
    paddingBottom: 8,
  },
  text: {
    paddingLeft: 16,
    paddingRight: 16,
    color: "white"
  },
});
