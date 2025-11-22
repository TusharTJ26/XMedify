import "./HomeSearchBar.css";

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
        <div id="state">
          <select
            required
            onChange={(e) => {
              setSelectedState(e.target.value);
            }}
          >
            <li key="State">
              <option value="" style={{ color: "rgba(171, 182, 199, 1)" }}>
                <SearchIcon />
                State
              </option>
            </li>
            {stateData.map((state) => {
              return (
                <li key={state}>
                  <option value={state}>{state}</option>
                </li>
              );
            })}
          </select>
        </div>
        <div id="city">
          <select onChange={(e) => setCity(e.target.value)} required>
            <li key="City">
              <option value="" style={{ color: "rgba(171, 182, 199, 1)" }}>
                <SearchIcon />
                City
              </option>
            </li>
            {cityData.map((city) => {
              return (
                <li key={city}>
                  <option key={city} value={city}>
                    {city}
                  </option>
                </li>
              );
            })}
          </select>
        </div>
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
