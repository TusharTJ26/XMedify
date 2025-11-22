import "./SearchBar.css";
import SearchIcon from "@mui/icons-material/Search";
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
  const [city, setCity] = useState("");
  const handleForm = (e) => {
    e.preventDefault();
    setSelectedCity(city);
  };

  return (
    <div className="search-holder">
      <form className="searchBar-form" onSubmit={handleForm}>
        <div id="state">
          {/* <input type="text" placeholder="State" style={{ width: "326px" }} /> */}
          <select
            required
            style={{ width: "326px" }}
            onChange={(e) => {
              // setState(e.target.value);
              setSelectedState(e.target.value);
            }}
          >
            <li>
              <option value="" style={{ color: "rgba(171, 182, 199, 1)" }}>
                State
              </option>
            </li>
            {stateData.map((state) => {
              return (
                <li>
                  <option key={state} value={state}>
                    {state}
                  </option>
                </li>
              );
            })}
          </select>
        </div>
        <div id="city">
          {/* <input type="text" placeholder="City" style={{ width: "522px" }} /> */}
          <select
            required
            style={{ width: "522px" }}
            onChange={(e) => setCity(e.target.value)}
          >
            <li>
              <option value="" style={{ color: "rgba(171, 182, 199, 1)" }}>
                City
              </option>
            </li>
            {cityData.map((city) => {
              return (
                <li>
                  <option key={city} value={city}>
                    {city}
                  </option>
                </li>
              );
            })}
          </select>
        </div>
        <div>
          <button type="submit" id="searchBtn">
            <SearchIcon /> Search
          </button>
        </div>
      </form>
    </div>
  );
}
