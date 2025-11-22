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
  const [city, setCity] = useState("");
  const handleForm = (e) => {
    e.preventDefault();
    setSelectedCity(city);
  };
  const navigate = useNavigate();
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
            <option value="" style={{ color: "rgba(171, 182, 199, 1)" }}>
              State
            </option>
            {stateData.map((state) => {
              return (
                <option key={state} value={state}>
                  {state}
                </option>
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
            <option value="" style={{ color: "rgba(171, 182, 199, 1)" }}>
              City
            </option>
            {cityData.map((city) => {
              return (
                <option key={city} value={city}>
                  {city}
                </option>
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
