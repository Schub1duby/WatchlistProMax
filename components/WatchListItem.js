import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Link } from "expo-router";
export default function WatchListItem({ item }) {
  return (
    <Link
      href={{ pathname: "details", params: { detailUrl: item.imdbID } }}
      asChild
    >
      <TouchableOpacity>
        <View style={styles.container}>
          <Text style={styles.paddingLR}>{item.Title}</Text>
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
    backgroundColor: "#f2f2f2",
    alignItems: "center",
    justifyContent: "left",
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 8,
    paddingBottom: 8,
  },
  paddingLR: {
    paddingLeft: 16,
    paddingRight: 16,
  },
});
