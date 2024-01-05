import { StyleSheet, Text, View, Image, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import yelp from "../api/yelp";
import { Foundation } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

export default function ResultsShowScreen({ route }) {
  const [result, setResult] = useState(null);
  const id = route.params.id;

  const getResult = async (id) => {
    const response = await yelp.get(`/${id}`);
    setResult(response.data);
  };

  useEffect(() => {
    getResult(id);
  }, []);

  //asekron bir işlem yaptığımız için ilk başta herhangibir değer gelmez ve hata alırız bunu egellemek için ıf blogunun ıcınde bu durumda hata alınmasını engelledık
  if (!result) {
    return null;
  }

  return (
    <View style={styles.conteiner}>
      <Text style={styles.title}>{result.name}</Text>
      <Text style={styles.text}>Tel: {result.display_phone}</Text>
      <Text style={styles.text}>
        {result.rating}
        {""}
        <Foundation name="star" size={18} color="#FFE382" />
      </Text>
      {result.is_closed ? (
        <AntDesign name="close" size={30} color="black" />
      ) : (
        <MaterialIcons name="delivery-dining" size={30} color="black" />
      )}
      <FlatList
        data={result.photos}
        keyExtractor={(photo, index) => index.toString()}
        renderItem={({ item }) => (
          <Image style={styles.image} source={{ uri: item }} />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  conteiner: {
    alignItems: "center",
    margin: 15,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 5,
  },
  text: {
    fontSize: 16,
    marginBottom: 5,
  },

  image: {
    width: 340,
    height: 220,
    borderRadius: 6,
    marginBottom: 4,
  },
});
