import React, { useState, useEffect } from "react";
import "../stylesheets/CharacterList.scss";
import Character from "./Character";
import CharacterNotFound from "./CharacterNotFound";
import PropTypes from "prop-types";

function CharacterList(props) {
  const characterItems = props.filteredCharacters.map((character) => {
    return <Character character={character} key={character.id} />;
  });
  return characterItems.length === 0 ? (
    <CharacterNotFound />
  ) : (
    <section className="CharacterSection">
      <ul className="CharacterList">{characterItems}</ul>
    </section>
  );
}

export default CharacterList;

CharacterList.propTypes = {
  filteredCharacters: PropTypes.arrayOf(
    PropTypes.shape({
      episode: PropTypes.array,
      id: PropTypes.number,
      image: PropTypes.string,
      name: PropTypes.string,
      planet: PropTypes.string,
      specie: PropTypes.string,
      status: PropTypes.string,
    })
  ),
};
