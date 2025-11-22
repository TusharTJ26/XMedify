import "./HomeSearchBar.css";

import SearchIcon from "@mui/icons-material/Search";
import { useNavigate } from "react-router-dom";
export default function HomeSearchBar({
  cityData,
  stateData,
  selectedState,
  selectedCity,
  setSelectedCity,
  setSelectedState,
}) {
  const navigate = useNavigate();
  return (
    <div className="home-search-bar">
      <div id="state">
        <select
          onChange={(e) => {
            setSelectedState(e.target.value);
          }}
        >
          <option value="" style={{ color: "rgba(171, 182, 199, 1)" }}>
            <SearchIcon />
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
        <select onChange={(e) => setSelectedCity(e.target.value)}>
          <option value="" style={{ color: "rgba(171, 182, 199, 1)" }}>
            <SearchIcon />
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
        <button
          type="submit"
          id="searchBtn"
          onClick={() => navigate("/search")}
        >
          <SearchIcon /> Search
        </button>
      </div>
    </div>
  );
}
