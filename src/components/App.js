import React, { useState, useEffect } from "react";
import "../stylesheets/App.scss";
import { Link, Route, Switch } from "react-router-dom";
import getData from "../services/Api";
import CharacterList from "./CharacterList";

function App() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    console.log(getData());
    getData().then((data) => setCharacters(data));
  }, []);
  console.log(characters);

  return (
    <div className="App">
      <h1>Rick and Morty</h1>
      <CharacterList characters={characters}></CharacterList>
    </div>
  );
}

export default App;
