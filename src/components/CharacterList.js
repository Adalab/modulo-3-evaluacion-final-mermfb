import React, { useState, useEffect } from "react";
import "../stylesheets/CharacterList.scss";
import Character from "./Character";
import CharacterNotFound from "./CharacterNotFound";

function CharacterList(props) {
  console.log(props);
  const characterItems = props.filteredCharacters.map((character) => {
    return <Character character={character} key={character.id} />;
  });
  console.log("CHARACTERITEMS", characterItems);
  if (characterItems.length === 0) {
    return <CharacterNotFound />;
  } else {
    return (
      <section className="CharacterSection">
        <ul className="CharacterList">{characterItems}</ul>
      </section>
    );
  }
}

export default CharacterList;
