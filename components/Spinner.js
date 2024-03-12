import { ActivityIndicator, StyleSheet } from "react-native";

export default function Spinner() {
  return <ActivityIndicator size="large" color="#ff5800" />;
}

const styles = StyleSheet.create({
  spinner: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    margin: 30,
  },
});
