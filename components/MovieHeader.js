import { SafeAreaView, StyleSheet, Text } from "react-native";
import { useLocalSearchParams } from "expo-router";
import React from "react";

export default function MovieHeader() {
  const { movieName } = useLocalSearchParams();
  console.log(movieName);
  return (
    <SafeAreaView style={styles.view}>
      <Text style={styles.title}>{movieName}</Text>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  title: {
    fontWeight: "bold",
    fontSize: 20,
    color: "white",
  },
  view: {
    flex: 1,
    padding: 16
  },
});
