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

  //FILTER
  const handleFilter = (value, key) => {
    console.log(value, key);
    setFilter({
      ...filter,
      [key]: value,
    });
  };
  // const handleFilter = (data) => {
  //   console.log(data);
  //   if (data.key === "character") {
  //     setFilter(data.value);
  //   }
  //   if (data.key === "specie") {
  //     setFilter(data.value);
  //   }
  // };

  const filteredCharacters = characters
    .filter((character) => {
      return character.name.toUpperCase().includes(filter.name.toUpperCase());
    })
    .filter((character) => {
      return filter.specie === "Todas"
        ? true
        : character.specie === filter.specie;
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
