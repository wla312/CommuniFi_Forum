import React from "react";
import "./SearchForm.css";

// Using the datalist element we can create autofill suggestions based on the props.zips array
const SearchForm = props =>
  <form className="search">
    <div className="form-group">
      <label htmlFor="breed">Breed Name:</label>
      <input
        value={props.search}
        onChange={props.handleInputChange}
        name="breed"
        list="breeds"
        type="text"
        className="form-control"
        placeholder="Type in a dog breed to begin"
        id="breed"
      />
      {/*<datalist id="zips">
        {props.zips.map(zip => <option value={zip} key={zip} />)}
      </datalist>*/}
      <button
        type="submit"
        onClick={props.handleFormSubmit}
        className="btn btn-success"
      >
        Search
      </button>
    </div>
  </form>;

export default SearchForm;
