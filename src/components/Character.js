import React, { useState, useEffect } from "react";
import "../stylesheets/Character.scss";
import { Link, Route, Switch } from "react-router-dom";

const Character = (props) => {
  return (
    <li key={props.character.id}>
      <Link to={`/character/${props.character.id}`}>
        <img
          src={props.character.image}
          title={`Foto de ${props.character.name}`}
          alt={`Foto de ${props.character.name}`}
        />
        <h3>{props.character.name}</h3>
      </Link>
      <p>{props.character.specie}</p>
    </li>
  );
};

export default Character;
