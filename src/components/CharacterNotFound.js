import "../stylesheets/CharacterList.scss";
function CharacterNotFound() {
  return (
    <section className="notFound">
      <h2 className="notFound__title">¿A quién dices que buscas?</h2>
      <p className="notFound__text">
        No encuentro un personaje con ese nombre en todo el Planeta Tierra del
        Universo C-137
      </p>
    </section>
  );
}

export default CharacterNotFound;
