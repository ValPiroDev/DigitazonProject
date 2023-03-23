import { useState, useEffect } from "react";

// necessari per importare il modale

const SearchBar = ({ callWhenSubmit, updateData }) => {
  const [inputValue, setInputValue] = useState("");
  // per gestire apertura e chiusura modale

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
    updateData(event.target.value);
  };

  const handleSearch = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <form
        className="d-flex justify-content-center d-xs-4 col-sm-6 col-lg-8 "
        role="search"
        onSubmit={handleSearch}
      >
        <input
          className="form-control mx-1"
          style={{ width: "65%" }}
          type="text"
          placeholder="Cosa vuoi mangiare oggi?"
          aria-label="Search"
          onChange={handleInputChange}
          value={inputValue}
        />
      </form>
    </>
  );
};

export default SearchBar;
