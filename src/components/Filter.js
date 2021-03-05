import React, { useState, useEffect } from "react";

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
    <form onChange={handleForm}>
      <label htmlFor="name">Encuentra al personaje:</label>
      <input
        type="text"
        name="name"
        id="name"
        value={props.filter}
        onChange={handleChange}
      />
    </form>
  );
};

export default Filter;
