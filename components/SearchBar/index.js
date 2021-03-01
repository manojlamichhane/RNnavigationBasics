import React from "react";
import { Text, View, StyleSheet, TextInput } from "react-native";
import { Colors } from "../../constants";
import { EvilIcons } from "@expo/vector-icons";

const SearchBar = () => (
  <View style={styles.container}>
    <TextInput placeholder="Search Products" />
    <EvilIcons name="search" size={34} color="black" />
  </View>
);

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flexDirection: "row",
    width: "100%",
    height: 40,
    borderRadius: 10,
    backgroundColor: "#E1E4EB",
    color: Colors.primary,
    justifyContent: "space-between",
    alignItems: "center",
  },
});
export default SearchBar;
