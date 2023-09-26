import React, { useState } from "react";
import { Select } from "antd";
import axios from "axios";

function SearchComponent() {
  const [selectedItems, setSelectedItems] = useState([]);
  const [results, setResults] = useState([]);

  const handleSearch = (e) => {
    setSelectedItems((prev) => [...prev, e.target.value]);
    const apiKey = "4db3b4ee5893cead9657d41699ec4c26";
    const URL = `https://api.themoviedb.org/3/search/keyword?api_key=${apiKey}`;
    const params = {
      query: e.target.value,
      page: 1,
    };
    axios
      .get(URL, { params })
      .then((response) => {
        setResults(response.data.results);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <Select
        mode="multiple"
        placeholder="Keyword"
        value={selectedItems}
        onChange={(e) => {
          handleSearch(e);
        }}
        style={{
          width: "100%",
        }}
        options={results.map((item) => ({
          value: item.id,
          label: item.name,
        }))}
      />
    </div>
  );
}

export default SearchComponent;
