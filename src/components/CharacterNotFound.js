import "../stylesheets/CharacterNotFound.scss";
import { Link } from "react-router-dom";
function CharacterNotFound() {
  return (
    <div className="notFound-wrapper">
      <section className="notFound">
        <h2 className="notFound__title">¿A quién dices que buscas?</h2>
        <div className="notFound__error"></div>
        <p className="notFound__text">
          No encuentro un personaje con ese nombre en todo el Planeta Tierra del
          Universo C-137
        </p>
      </section>
    </div>
  );
}

export default CharacterNotFound;
