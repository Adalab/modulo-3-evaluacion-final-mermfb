import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../stylesheets/CharacterInfo.scss";
import CharacterNotFound from "./CharacterNotFound";
import Header from "./Header";
import Footer from "./Footer";

function CharacterInfo(props) {
  console.log(props);
  console.log(props.character);

  if (props.character === undefined) {
    return <CharacterNotFound />;
  } else {
    return (
      <>
        <Header></Header>
        <div className="characterInfo-wrapper">
          <Link to="/" className="comeback">
            <i className="fas fa-rocket icon"></i>
            Volver
          </Link>
          <div className="characterInfo">
            <img
              className="characterInfo__img"
              src={props.character.image}
              alt={props.character.name}
            />
            <section className="characterInfo__text">
              <h2>{props.character.name}</h2>
              <ul>
                <li>Especie: {props.character.specie}</li>
                <li>Planeta: {props.character.planet}</li>
                <li>Estado: {props.character.status}</li>
                <li>Episodios: {props.character.episode.length}</li>
              </ul>
            </section>
          </div>
        </div>
        <Footer />
      </>
    );
  }
}

export default CharacterInfo;
