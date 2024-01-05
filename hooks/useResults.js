import { useEffect, useState } from "react";
import yelp from "../api/yelp";

export default () => {
  const [results, setResults] = useState([]);
  const [err, setErr] = useState("");
  const searchApi = async (searchTerm) => {
    try {
      const response = await yelp.get("/search", {
        params: {
          limit: 20,
          term: searchTerm,
          location: "İstanbul",
        },
      });
      setResults(response.data.businesses);
      setErr("");
    } catch (err) {
      setErr("Bağlantı Hatası");
    }
  };

  useEffect(() => {
    searchApi("Toast");
  }, []);

  return [searchApi, results, err];
};
