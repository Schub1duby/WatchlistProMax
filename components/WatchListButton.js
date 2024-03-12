import React, { useState, useEffect } from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

function WatchListButton({ onPress, isInWatchList }, ref) {
  const [isAdded, setIsAdded] = useState(isInWatchList);

  useEffect(() => {
    setIsAdded(isInWatchList);
  }, [isInWatchList]);

  const handlePress = () => {
    setIsAdded(!isAdded);
    onPress();
  };

  const buttonText = isAdded ? "Remove from Watchlist" : "Add to Watchlist";
  const buttonColor = isAdded ? "#A05700" : "#E77D00";

  return (
    <TouchableOpacity
      ref={ref}
      onPress={handlePress}
      style={[styles.button, { backgroundColor: buttonColor }]}
    >
      <Text style={styles.text}>{buttonText}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    elevation: 4,
    borderRadius: 50,
    marginTop: 10,
    marginBottom: 10,
  },
  text: {
    color: "white",
    fontWeight: "bold",
    alignSelf: "center",
  },
});

export default React.forwardRef(WatchListButton);