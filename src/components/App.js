import React, { useState, useEffect } from "react";
import "../stylesheets/App.scss";
import { Link, Route, Switch } from "react-router-dom";
import getData from "../services/Api";
import CharacterList from "./CharacterList";
import Filter from "./Filter";
import CharacterInfo from "./CharacterInfo";
import Header from "./Header";
import Footer from "./Footer";

function App() {
  const [characters, setCharacters] = useState([]);
  const [filter, setFilter] = useState({
    name: "",
    specie: "Todas",
    sort: "No",
  });

  //API
  useEffect(() => {
    getData().then((data) => setCharacters(data));
  }, []);

  //FILTER
  const handleFilter = (value, key) => {
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
    })
    .sort((a, b) => {
      return filter.sort === "No"
        ? a.id < b.id
          ? -1
          : 1
        : a.name < b.name
        ? -1
        : 1;
    });

  //CHARACTER INFO
  const renderCharacterInfo = (props) => {
    let characterId = props.match.params.characterId;
    const foundCharacter = characters.find((character) => {
      const characterIdApi = character.id.toString();
      return characterIdApi === characterId;
    });

    return <CharacterInfo character={foundCharacter} />;
  };

  return (
    <div className="App">
      <div className="wrapper">
        <Switch>
          <Route exact path="/">
            <Header />
            <main className="main">
              <Filter handleFilter={handleFilter} filter={filter} />
              <CharacterList
                filteredCharacters={filteredCharacters}
                render={renderCharacterInfo}
              ></CharacterList>
            </main>
            <Footer />
          </Route>
          <Route
            path="/character/:characterId"
            render={renderCharacterInfo}
          ></Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
