import React, { useRef } from "react";

const SearchBar = (props: any) => {

  const searchField = useRef(document.createElement("input"));

  const updateSearchQuery = () => {
    props.setQuery(searchField.current.value);
  };

  const submitForm = (event: any) => {
    event.preventDefault();
  }

  return (
    <form onSubmit={submitForm}>
      <input
        ref={searchField}
        type="text"
        placeholder=" Search movie title"
        className="searchBar"
        onChange={updateSearchQuery}
      ></input>
    </form>
  );
};

export default SearchBar;
