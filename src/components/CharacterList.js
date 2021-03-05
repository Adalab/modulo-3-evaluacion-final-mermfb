import React, { useState, useEffect } from "react";
import "../stylesheets/CharacterList.scss";
import Character from "./Character";

function CharacterList(props) {
  console.log(props.characters);
  const characterItems = props.characters.map((character) => {
    return <Character character={character} />;
  });

  return (
    <section>
      <ul>{characterItems}</ul>
    </section>
  );
}

export default CharacterList;
