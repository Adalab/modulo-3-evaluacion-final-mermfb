import React, { useState, useEffect } from "react";

const Filter = (props) => {
  const handleChange = (ev) => {
    props.handleFilter({
      value: ev.target.value,
      key: "character",
    });
  };
  return (
    <form>
      <label htmlFor="name">Encuentra al personaje:</label>
      <input type="text" name="name" id="name" onChange={handleChange} />
    </form>
  );
};

export default Filter;
