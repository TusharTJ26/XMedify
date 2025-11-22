import "./HomeSearchBar.css";
import { MenuItem, Select, Button, InputAdornment, Box } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
export default function HomeSearchBar({
  cityData,
  stateData,
  selectedState,
  selectedCity,
  setSelectedCity,
  setSelectedState,
}) {
  const [city, setCity] = useState("");
  const navigate = useNavigate();
  const handleHomeForm = (e) => {
    e.preventDefault();
    setSelectedCity(city);
    navigate("/search");
  };
  return (
    <form onSubmit={handleHomeForm}>
      <div className="home-search-bar">
        <Select
          displayEmpty
          className="home-search-bar-select"
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
            onChange={(e) => {
              setSelectedState(e.target.value);
            }}
          >
            <li>
              <option value="" style={{ color: "rgba(171, 182, 199, 1)" }}>
                <SearchIcon />
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
          className="home-search-bar-select"
          id="city"
          name="city"
          // value={formData.city}
          onChange={(e) => setCity(e.target.value)}
          startAdornment={
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          }
          required
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
          <select onChange={(e) => setCity(e.target.value)} required>
            <li>
              <option value="" style={{ color: "rgba(171, 182, 199, 1)" }}>
                <SearchIcon />
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
          <button
            type="submit"
            id="searchBtn"
            // onClick={() => handleHomeForm()}
          >
            <SearchIcon /> Search
          </button>
        </div>
      </div>
    </form>
  );
}
