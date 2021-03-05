import React, { useState, useEffect } from "react";
import "../stylesheets/Character.scss";

const Character = (props) => {
  console.log(props);
  return (
    <li key={props.character.id}>
      <img
        src={props.character.image}
        title={`Foto de ${props.character.name}`}
        alt={`Foto de ${props.character.name}`}
      />
      <h3>{props.character.name}</h3>
      <p>{props.character.specie}</p>
    </li>
  );
};

export default Character;
