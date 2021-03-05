import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../stylesheets/CharacterInfo.scss";

function CharacterInfo(props) {
  console.log(props);
  console.log(props.character);
  if (props.character === undefined) {
    return (
      <div>
        <h2>¿A quién buscas?</h2>
        <section>
          <p>
            No encuentro un personaje con ese nombre en todo el Planeta Tierra
            del Universo C-137
          </p>
        </section>
      </div>
    );
  } else {
    return (
      <div className="characterInfo">
        <h2>{props.character.name}</h2>
        <section>
          <img src={props.character.image} alt={props.character.name} />
          <ul>
            <li>Especie: {props.character.specie}</li>
            <li>Estado: {props.character.status}</li>
            <li>Episodios: {props.character.episode.length}</li>
          </ul>
        </section>
      </div>
    );
  }
}

export default CharacterInfo;
