import React, { useState, useEffect } from "react";
import "../stylesheets/App.scss";
import { Link, Route, Switch } from "react-router-dom";
import getData from "../services/Api";
import CharacterList from "./CharacterList";
import Filter from "./Filter";

function App() {
  const [characters, setCharacters] = useState([]);
  const [filter, setFilter] = useState("");

  //API
  useEffect(() => {
    getData().then((data) => setCharacters(data));
  }, []);

  //FILTER

  const handleFilter = (data) => {
    console.log(data);
    if (data.key === "character") {
      setFilter(data.value);
    }
  };

  const filteredCharacters = characters.filter((character) => {
    return character.name.toUpperCase().includes(filter.toUpperCase());
  });

  return (
    <div className="App">
      <h1>Rick and Morty</h1>
      <Filter handleFilter={handleFilter} />
      <CharacterList filteredCharacters={filteredCharacters}></CharacterList>
    </div>
  );
}

export default App;
