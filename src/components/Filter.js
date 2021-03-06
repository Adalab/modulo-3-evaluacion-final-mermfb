import React, { useState, useEffect } from "react";
import "../stylesheets/Filter.scss";

const Filter = (props) => {
  console.log(props);

  const handleChange = (ev) => {
    props.handleFilter(ev.target.value, ev.target.name);
  };

  const handleForm = (ev) => {
    ev.preventDefault();
  };

  return (
    <form onChange={handleForm} className="form">
      <label htmlFor="name" className="form__label">
        Encuentra al personaje:
      </label>
      <input
        type="text"
        name="name"
        id="name"
        value={props.filter.name}
        onChange={handleChange}
        className="form__input"
      />
      <label htmlFor="specie" className="form__label">
        Busca por especie:
      </label>
      <select
        type="text"
        name="specie"
        id="specie"
        value={props.filter.specie}
        onChange={handleChange}
        className="form__input"
      >
        <option>Todas</option>
        <option>Human</option>
        <option>Alien</option>
      </select>
    </form>
  );
};

export default Filter;
