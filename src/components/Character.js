import React, { useState, useEffect } from "react";
import "../stylesheets/Character.scss";
import { Link, Route, Switch } from "react-router-dom";

const Character = (props) => {
  let status = props.character.status;
  if (status === "Alive") {
    status = "fas fa-heartbeat";
  } else if (status === "unknown") {
    status = "fas fa-question";
  } else {
    status = "fas fa-skull-crossbones";
  }
  return (
    <Link to={`/character/${props.character.id}`}>
      <li key={props.character.id} className="card">
        <img
          src={props.character.image}
          title={`Imagen de ${props.character.name}`}
          alt={`Imagen de ${props.character.name}`}
          className="card__img"
        />
        <h3 className="card__name">{props.character.name}</h3>
        <div className="card__text">
          <i className={status}></i>
          <p>{props.character.specie}</p>
        </div>
      </li>
    </Link>
  );
};

export default Character;
