import React, { useState, useEffect } from "react";
import "../stylesheets/CharacterList.scss";
import Character from "./Character";

function CharacterList(props) {
  const characterItems = props.filteredCharacters.map((character) => {
    return <Character character={character} key={character.id} />;
  });

  return (
    <section>
      <ul>{characterItems}</ul>
    </section>
  );
}

export default CharacterList;
