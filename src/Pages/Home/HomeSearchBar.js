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
      <div>
        <select
          onChange={(e) => {
            setSelectedState(e.target.value);
          }}
        >
          <option value="" style={{ color: "rgba(171, 182, 199, 1)" }}>
            <div id="state">
              <SearchIcon />
              State
            </div>
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
        <select onChange={(e) => setSelectedCity(e.target.value)}>
          <option value="" style={{ color: "rgba(171, 182, 199, 1)" }}>
            <div id="city">
              <SearchIcon />
              City
            </div>
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
    </div>
  );
}
