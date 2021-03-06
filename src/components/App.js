import React, { useState, useEffect } from "react";
import "../stylesheets/App.scss";
import { Link, Route, Switch } from "react-router-dom";
import getData from "../services/Api";
import CharacterList from "./CharacterList";
import Filter from "./Filter";
import CharacterInfo from "./CharacterInfo";
import logo from "../images/Rick_and_Morty_-_logo_(English).png";

function App() {
  const [characters, setCharacters] = useState([]);
  const [filter, setFilter] = useState({
    name: "",
    specie: "Todas",
  });

  //API
  useEffect(() => {
    getData().then((data) => setCharacters(data));
  }, []);

  //ORDER

  Array.prototype.orderByString = function (property, sortOrder) {
    if (sortOrder != -1 && sortOrder != 1) sortOrder = 1;
    this.sort(function (a, b) {
      var stringA = a[property],
        stringB = b[property];
      // Si un valor es null o undefined, se convierte a cadena vacía.
      if (stringA == null) stringA = "";
      if (stringB == null) stringB = "";
      // Si ignoreCase es true, se convierten ambas variables a minúsculas.
      var res = 0;
      if (stringA < stringB) res = -1;
      else if (stringA > stringB) res = 1;
      return res * sortOrder;
    });
  };

  //FILTER
  const handleFilter = (value, key) => {
    console.log(value, key);
    setFilter({
      ...filter,
      [key]: value,
    });
  };

  const filteredCharacters = characters
    .filter((character) => {
      return character.name.toUpperCase().includes(filter.name.toUpperCase());
    })
    .filter((character) => {
      return filter.specie === "Todas"
        ? true
        : character.specie === filter.specie;
    });
  filteredCharacters.orderByString("name");
  console.log("FILTRADOS", filteredCharacters);

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
      <div className="wrapper">
        <Switch>
          <Route exact path="/">
            <img
              src={logo}
              title="Rick and Morty logo"
              alt="Rick and Morty logo"
              className="logo"
            />
            <Filter handleFilter={handleFilter} filter={filter} />
            <CharacterList
              filteredCharacters={filteredCharacters}
              render={renderCharacterInfo}
            ></CharacterList>
          </Route>
          <Route path="/character/:characterId" render={renderCharacterInfo} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
