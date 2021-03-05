import "../stylesheets/CharacterList.scss";
function CharacterNotFound() {
  return (
    <section className="notFound">
      <h2>¿A quién dices que buscas?</h2>
      <section>
        <p>
          No encuentro un personaje con ese nombre en todo el Planeta Tierra del
          Universo C-137
        </p>
      </section>
    </section>
  );
}

export default CharacterNotFound;
