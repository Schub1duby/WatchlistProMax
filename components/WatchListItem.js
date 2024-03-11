import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Link } from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";
export default function WatchListItem({ item, path }) {
  return (
    <Link
      href={{ pathname: path, params: { imdbID: item.imdbID } }}
      asChild
    >
      <TouchableOpacity>
        <View style={styles.container}>
          <Ionicons
              size={64}
              style={{ marginBottom: -3}}
              name="film-outline"
              color="white"
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
    height: 72,
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
