import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import SearchBar from "../components/SearchBar";
import useResults from "../hooks/useResults";
import ResultList from "../components/ResultList";

export default function SearchScreen() {
  const [searchApi, results, err] = useResults();
  const [term, setTerm] = useState("");
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
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => searchApi(term)}
      />
      {err ? <Text> {err} </Text> : null}
      {results.length == 0 ? null : (
        <>
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
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({});
