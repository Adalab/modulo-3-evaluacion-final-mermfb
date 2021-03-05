import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../stylesheets/CharacterInfo.scss";
import CharacterNotFound from "./CharacterNotFound";

function CharacterInfo(props) {
  console.log(props);
  console.log(props.character);

  if (props.character === undefined) {
    return <CharacterNotFound />;
  } else {
    return (
      <div className="characterInfo">
        <h2>{props.character.name}</h2>
        <section>
          <img src={props.character.image} alt={props.character.name} />
          <ul>
            <li>Especie: {props.character.specie}</li>
            <li>Planeta: {props.character.planet}</li>
            <li>Estado: {props.character.status}</li>
            <li>Episodios: {props.character.episode.length}</li>
          </ul>
        </section>
      </div>
    );
  }
}

export default CharacterInfo;
