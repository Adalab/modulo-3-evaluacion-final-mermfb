import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../stylesheets/CharacterInfo.scss";
import CharacterNotFound from "./CharacterNotFound";
import Header from "./Header";
import Footer from "./Footer";
import PropTypes from "prop-types";

function CharacterInfo(props) {
  return props.character === undefined ? (
    <>
      <Header></Header>
      <Link to="/" className="comeback">
        <i className="fas fa-rocket icon"></i>
        Volver
      </Link>

      <CharacterNotFound />
      <Footer />
    </>
  ) : (
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

export default CharacterInfo;

CharacterInfo.propTypes = {
  character: PropTypes.shape({
    episode: PropTypes.array,
    id: PropTypes.number,
    image: PropTypes.string,
    name: PropTypes.string,
    planet: PropTypes.string,
    specie: PropTypes.string,
    status: PropTypes.string,
  }),
};
