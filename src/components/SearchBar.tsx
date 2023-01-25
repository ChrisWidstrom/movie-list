import React, { useRef } from "react";

const SearchBar = ({ setQuery } : { setQuery: Function}) => {

  const searchField = useRef(document.createElement("input"));

  /**
   * updateSearchQuery
   * This function calls the setQuery function in the App component passing it the current value of the Search Field.
   * 
   * @param - Not applicable
   * @returns - Not applicable.
   *
   */

  const updateSearchQuery = () => {
    setQuery(searchField.current.value);
  };

  // Prevents the enter key from submitting the form
  const submitForm = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  }

  return (
    <form onSubmit={submitForm}>
      <input
        ref={searchField}
        type="text"
        placeholder=" Search movie database"
        className="searchBar"
        onChange={updateSearchQuery}
      ></input>
    </form>
  );
};

export default SearchBar;
