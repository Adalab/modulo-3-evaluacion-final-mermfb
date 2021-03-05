import React, { useState, useEffect } from "react";
import "../stylesheets/Character.scss";
import { Link, Route, Switch } from "react-router-dom";

const Character = (props) => {
  return (
    <Link to={`/character/${props.character.id}`}>
      <li key={props.character.id} className="card">
        <img
          src={props.character.image}
          title={`Foto de ${props.character.name}`}
          alt={`Foto de ${props.character.name}`}
          className="card__img"
        />
        <h3 className="card__name">{props.character.name}</h3>
        <p>{props.character.specie}</p>
      </li>
    </Link>
  );
};

export default Character;
