import { StyleSheet, Text, View } from "react-native";
import React from "react";
import SearchBar from "../components/SearchBar";
import useResults from "../hooks/useResults";
import ResultList from "../components/ResultList";

export default function SearchScreen() {
  const [searchApi, results] = useResults();
  //console.log(results);

  //filterResultsByPrice fonksiyonu bir fiyat kategorisi alacak şekilde parametre olarak price'ı bekler.
  // filter fonksiyonu, results dizisindeki her bir elemanı kontrol eder. Her elemanın price özelliği, belirtilen price parametresiyle eşleşenler filtrelenir ve yeni bir dizi oluşturulur. Bu yeni dizi, sadece belirtilen fiyat kategorisine sahip restoranları içerir.
  const filterResultsByPrice = (price) => {
    return results.filter((result) => {
      return result.price === price;
    });
  };
  return (
    <View>
      <SearchBar />
      <ResultList
        title="Ucuz Restoranlar"
        results={filterResultsByPrice("₺")}
      />
      <ResultList
        title="Uygun Restoranlar"
        results={filterResultsByPrice("₺₺")}
      />
      <ResultList
        title="Pahalı Restoranlar"
        results={filterResultsByPrice("₺₺₺")}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
