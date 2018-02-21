import React from "react";
import "./SearchForm.css";

// Using the datalist element we can create autofill suggestions based on the props.zips array
const SearchForm = props =>
  <form className="search">
    <label htmlFor="zip">Search by Zip Code:</label>
      <div className="input-group text-center">
      <input
        value={props.search}
        onChange={props.handleInputChange}
        name="zip"
        list="zips"
        type="text"
        className="form-control"
        placeholder="Enter 5-digit US Zip Code to begin"
        id="zip"
      />
      <span className="input-group-btn">
        <button
          type="submit"
          onClick={props.handleFormSubmit}
          className="btn btn-success"
        >
          Search
        </button>
      </span>
    </div>
  </form>;

export default SearchForm;
