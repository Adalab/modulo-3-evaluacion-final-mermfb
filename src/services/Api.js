const getData = () => {
  return fetch("//rickandmortyapi.com/api/character/")
    .then((response) => response.json())
    .then((data) => {
      return data.results.map((character) => {
        return {
          id: character.id,
          image: character.image,
          name: character.name,
          specie: character.species,
          planet: character.location.name,
          episode: character.episode,
          status: character.status,
        };
      });
    });
};

export default getData;
