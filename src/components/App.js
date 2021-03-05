import React, { useState, useEffect } from "react";
import "../stylesheets/App.scss";
import { Link, Route, Switch } from "react-router-dom";
import getData from "../services/Api";
import CharacterList from "./CharacterList";
import Filter from "./Filter";
import CharacterInfo from "./CharacterInfo";

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

  //CHARACTER INFO

  const renderCharacterInfo = (props) => {
    //console.log(props);
    let characterId = props.match.params.characterId;
    const foundCharacter = characters.find((character) => {
      const characterIdApi = character.id.toString();
      //console.log("characterID", characterId);
      //console.log("characterIdApi", characterIdApi);
      return characterIdApi === characterId;
    });

    return <CharacterInfo character={foundCharacter} />;
  };

  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <h1>Rick and Morty</h1>
          <Filter handleFilter={handleFilter} />
          <CharacterList
            filteredCharacters={filteredCharacters}
          ></CharacterList>
        </Route>
        <Route path="/character/:characterId" render={renderCharacterInfo} />
      </Switch>
    </div>
  );
}

export default App;
