import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { Foundation } from "@expo/vector-icons";

export default function ResultDetail({ resultItem }) {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={resultItem.image_url ? { uri: resultItem.image_url } : null}
      />
      <Text style={styles.restoranTitle}> {resultItem.name} </Text>
      <Text style={styles.restoranText}>
        {resultItem.review_count} Değerlendirme{" "}
        <Foundation name="star" size={18} color="#FFE382" />
        {resultItem.rating} Yıldız
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginLeft: 6,
  },
  image: {
    width: 250,
    height: 150,
    borderRadius: 6,
    marginBottom: 4,
  },
  restoranTitle: {
    alignSelf: "center",
    fontWeight: "bold",
  },
  restoranText: {
    alignSelf: "center",
  },
});
