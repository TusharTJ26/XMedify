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
            <option value="" style={{ color: "rgba(171, 182, 199, 1)" }}>
              <li>
                <SearchIcon />
                State
              </li>
            </option>
            {stateData.map((state) => {
              return (
                <option key={state} value={state}>
                  <li>{state}</li>
                </option>
              );
            })}
          </select>
        </div>
        <div id="city">
          <select onChange={(e) => setCity(e.target.value)} required>
            <option value="" style={{ color: "rgba(171, 182, 199, 1)" }}>
              <li>
                <SearchIcon />
                City
              </li>
            </option>
            {cityData.map((city) => {
              return (
                <option key={city} value={city}>
                  <li>{city}</li>
                </option>
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
