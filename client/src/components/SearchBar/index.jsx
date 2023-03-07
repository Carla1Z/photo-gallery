import React, { useState } from "react";
import { BiSearchAlt } from "react-icons/bi";

export const SearchBar = () => {
  const [search, setSearch] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const value = e.target.input.value;
    console.log(value);
    // setSearch
  };

  return (
    <form onSubmit={handleSubmit}>
      | <input type="text" placeholder="Search some photos..." name="input" />
      <button type="submit">
        <BiSearchAlt />
      </button>
    </form>
  );
};
