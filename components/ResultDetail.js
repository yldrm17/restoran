import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { Foundation } from "@expo/vector-icons";

export default function ResultDetail({ resultItem }) {
  return (
    <View>
      <Image
        style={{ width: 250, height: 120 }}
        source={resultItem.image_url ? { uri: resultItem.image_url } : null}
      />
      <Text> {resultItem.name} </Text>
      <Text>
        {resultItem.review_count} Değerlendirmeden{" "}
        <Foundation name="star" size={18} color="#FFE382" /> {resultItem.rating}{" "}
        Yıldız
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({});
