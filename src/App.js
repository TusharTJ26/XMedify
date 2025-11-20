import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import "./App.css";
// Components Imports
import Home from "./Pages/Home/Home";
import MedicalCenter from "./Pages/Medical-Centers/MedicalCenters";
import Booking from "./Pages/Booking/Booking";
function App() {
  // Data fetching
  const [stateData, setStateData] = useState([]);
  const [cityData, setCityData] = useState([]);
  const [medicalCenterData, setMedicalCenterData] = useState([]);

  // Selection by form
  const [selectedState, setSelectedState] = useState("");
  const [selectedCity, setSelectedCity] = useState("");

  // Fetching States
  useEffect(() => {
    const fetchState = async () => {
      try {
        const response = await fetch(
          "https://meddata-backend.onrender.com/states"
        );
        const data = await response.json();
        setStateData(data);
      } catch (e) {
        console.error("an error occured", e);
      }
    };
    fetchState();
  }, []);

  //Fetching City
  useEffect(() => {
    const fetchCity = async () => {
      try {
        const response = await fetch(
          `https://meddata-backend.onrender.com/cities/${selectedState}`
        );
        const data = await response.json();
        setCityData(data);
      } catch (e) {
        console.error("an error occured", e);
      }
    };
    fetchCity();
  }, [selectedState]);
  // Fetching Medical Centers
  useEffect(() => {
    const fetchCenter = async () => {
      try {
        const response = await fetch(
          `https://meddata-backend.onrender.com/data?state=${selectedState}&city=${selectedCity}`
        );
        const data = await response.json();
        setMedicalCenterData(data);
      } catch (e) {
        console.error("an error occured", e);
      }
    };
    fetchCenter();
  }, [selectedCity]);

  console.log(medicalCenterData);
  // console.log(cityData);
  return (
    <div className="App">
      {/* <div>
        <Home
          cityData={cityData}
          stateData={stateData}
          selectedState={selectedState}
          selectedCity={selectedCity}
          setSelectedCity={setSelectedCity}
          setSelectedState={setSelectedState}
        />
      </div> */}
      <Routes>
        <Route
          path="/"
          element={
            <Home
              cityData={cityData}
              stateData={stateData}
              selectedState={selectedState}
              selectedCity={selectedCity}
              setSelectedCity={setSelectedCity}
              setSelectedState={setSelectedState}
            />
          }
        />
        <Route
          path="/medical-center"
          element={
            <MedicalCenter
              cityData={cityData}
              stateData={stateData}
              selectedState={selectedState}
              selectedCity={selectedCity}
              setSelectedCity={setSelectedCity}
              setSelectedState={setSelectedState}
              medicalCenterData={medicalCenterData}
              setMedicalCenterData={setMedicalCenterData}
            />
          }
        />
        <Route
          path="/my-bookings"
          element={<Booking medicalCenterData={medicalCenterData} />}
        />
        {/* <Route path="/contact" element={<Contact />} /> */}
      </Routes>
    </div>
  );
}

export default App;
