import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from "react-native";
import React from "react";
import ResultDetail from "./ResultDetail";

export default function ResultList({ title, results }) {
  console.log(results);
  return (
    <View>
      <Text> {title} </Text>
      <FlatList
        data={results}
        horizontal={true}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity>
              <ResultDetail resultItem={item} />
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
