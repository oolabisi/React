import React, { useState } from "react";

//const Searchbar = ({ searchfield }) => {

// return (
//  <div>
// <input type="text" placeholder="search for any movies" />
//   <button onClick={searchfield}>search</button>
// </div>
// );

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
    <form className="search">
      <input
        value={searchValue}
        onChange={handleSearchInputChanges}
        type="text"
      />
      <input onClick={callSearchFunction} type="submit" value="SEARCH" />
    </form>
  );
};
export default Searchbar;
