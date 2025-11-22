import "./SearchBar.css";
import SearchIcon from "@mui/icons-material/Search";
import { MenuItem, Select, Button, InputAdornment, Box } from "@mui/material";
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
  const [city, setCity] = useState("City");
  const handleForm = (e) => {
    e.preventDefault();
    setSelectedCity(city);
  };

  return (
    <div className="search-holder">
      <form className="searchBar-form" onSubmit={handleForm}>
        <Select
          displayEmpty
          className="home-search-bar-select-field"
          id="state"
          name="state"
          // value={formData.state}
          onChange={(e) => setSelectedState(e.target.value)}
          startAdornment={
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          }
          required
          sx={{ width: "326px" }}
          // sx={{ minWidth: 200, width: "100%" }}
        >
          <MenuItem disabled value="" selected>
            State
          </MenuItem>
          {stateData.map((state) => (
            <MenuItem key={state} value={state}>
              {state}
            </MenuItem>
          ))}
        </Select>
        {/* <div id="state" name="state">
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
        </div> */}
        <Select
          displayEmpty
          className="home-search-bar-select-field"
          id="city"
          name="city"
          value={city}
          // value={formData.city}
          onChange={(e) => setCity(e.target.value)}
          startAdornment={
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          }
          required
          sx={{ width: "522px" }}
          // sx={{ minWidth: 200, width: "100%" }}
        >
          <MenuItem disabled value="" selected>
            City
          </MenuItem>
          {cityData.map((city) => (
            <MenuItem key={city} value={city}>
              {city}
            </MenuItem>
          ))}
        </Select>
        {/* <div id="city" name="city">
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
        </div> */}
        <div>
          <button type="submit" id="searchBtn">
            <SearchIcon /> Search
          </button>
        </div>
      </form>
    </div>
  );
}
