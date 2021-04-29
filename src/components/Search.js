import React from "react";

function Search({ searchInput, setSearchInput, handleChange }) {
  return (
    <header>
      <h1>😎 EmojiSearch 😎</h1>
      <input
        type="text"
        name="search"
        id="search"
        placeholder="What emoji are you looking for ?"
        onChange={(e) => {
          setSearchInput(e.target.value);
        }}
        value={searchInput}
      />
    </header>
  );
}

export default Search;
