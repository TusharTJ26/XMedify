import "./SearchBar.css";
import SearchIcon from "@mui/icons-material/Search";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
export default function SearchBar({
  cityData,
  stateData,
  selectedState,
  selectedCity,
  setSelectedCity,
  setSelectedState,
}) {
  //   const firstPlaceholder = `${(<SearchIcon />)} State`;
  //   const secondPlaceholder = `${(<SearchIcon />)} City`;
  const navigate = useNavigate();
  return (
    <div className="search-holder">
      <form
        className="searchBar-form"
        //   onSubmit={handleSubmit}
      >
        <div>
          {/* <input type="text" placeholder="State" style={{ width: "326px" }} /> */}
          <select
            style={{ width: "326px" }}
            onChange={(e) => {
              setSelectedState(e.target.value);
            }}
          >
            <option value="" style={{ color: "rgba(171, 182, 199, 1)" }}>
              <div id="state">State</div>
            </option>
            {stateData.map((state) => {
              return (
                <option key={state} value={state}>
                  <div id="state">{state}</div>
                </option>
              );
            })}
          </select>
        </div>
        <div>
          {/* <input type="text" placeholder="City" style={{ width: "522px" }} /> */}
          <select
            style={{ width: "522px" }}
            onChange={(e) => setSelectedCity(e.target.value)}
          >
            <option value="" style={{ color: "rgba(171, 182, 199, 1)" }}>
              <div id="city">City</div>
            </option>
            {cityData.map((city) => {
              return (
                <option key={city} value={city}>
                  <div id="city">{city}</div>
                </option>
              );
            })}
          </select>
        </div>
        <div>
          <button
            type="submit"
            id="searchBtn"
            onClick={() => navigate("/medical-center")}
          >
            <SearchIcon /> Search
          </button>
        </div>
      </form>
    </div>
  );
}
