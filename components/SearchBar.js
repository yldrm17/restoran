import { StyleSheet, Text, View, TextInput } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

export default function SearchBar({ term, onTermChange, onTermSubmit }) {
  return (
    <View style={styles.backgroundStyle}>
      <Ionicons
        style={styles.iconStyle}
        name="search"
        size={30}
        color="black"
      />
      <TextInput
        style={styles.input}
        placeholder="Restoran Ara"
        autoCorrect={false}
        autoCapitalize="none"
        value={term}
        onChangeText={onTermChange}
        onEndEditing={onTermSubmit}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  backgroundStyle: {
    backgroundColor: "lightgray",
    borderRadius: 15,
    flexDirection: "row",
    margin: 10,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    borderColor: "black",
    flex: 1,
  },
  iconStyle: {
    marginHorizontal: 15,
  },
});
