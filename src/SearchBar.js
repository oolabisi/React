import React, { useState } from "react";

const Searchbar = props => {
  const [searchValue, setSearchValue] = useState("");

  const handleSearchInputChanges = e => {
    setSearchValue(e.target.value);
  };
  const resetInputField = () => {
    setSearchValue("");
  };
  const callSearchFunction = e => {
    e.preventDefault();
    props.search(searchValue);
    resetInputField();
  };
  return (
    <form>
      <input
        value={searchValue}
        onChange={handleSearchInputChanges}
        type="text"
        placeholder="search movies here"
      />
      <input
        onClick={callSearchFunction}
        className="f6 grow no-underline br-pill ph3 pv2 mb2 dib white bg-blue"
        type="submit"
        value="search"
      />
    </form>
  );
};
export default Searchbar;
