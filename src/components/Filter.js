import React, { useState, useEffect } from "react";
import "../stylesheets/Filter.scss";

const Filter = (props) => {
  const handleChange = (ev) => {
    props.handleFilter({
      value: ev.target.value,
      key: "character",
    });
    console.log(props);
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
        value={props.filter}
        onChange={handleChange}
        className="form__input"
      />
    </form>
  );
};

export default Filter;
