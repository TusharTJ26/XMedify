import "./MedicalCenter.css";

import SearchBar from "../../Components/Medical-Cards/Search-Bar/SearchBar";
import MedicalCenterCard from "../../Medical-Center-Card/MedicalCenterCard";
import Questions from "../../Components/Common/FAQ/FAQ";
import FooterElement from "../../Components/Common/Footers/Footer";
import NavTop from "../../Components/Common/NavBar/NavTop";
import NavBar from "../../Components/Common/NavBar/NavBar";

// import SearchBar from "../../Search-Bar/SearchBar";
export default function MedicalCenter({
  cityData,
  stateData,
  selectedState,
  selectedCity,
  setSelectedCity,
  setSelectedState,
  medicalCenterData,
  setMedicalCenterData,
  booking,
  setBooking,
}) {
  const medicalCenterDataLength = medicalCenterData.length;

  //   console.log(medicalCenterData);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div>
        <NavTop />
      </div>
      <div>
        <NavBar />
      </div>
      <div className="blueBox"></div>
      <div style={{ marginTop: "-55px" }}>
        <SearchBar
          cityData={cityData}
          stateData={stateData}
          selectedState={selectedState}
          selectedCity={selectedCity}
          setSelectedCity={setSelectedCity}
          setSelectedState={setSelectedState}
        />
      </div>

      <div className="medical-center-holder">
        <div>
          {medicalCenterDataLength > 0 ? (
            <div className="medical-center-number">
              <h1>
                {medicalCenterDataLength} medical centers available in{" "}
                {selectedCity.toLowerCase()}
                {/* {selectedCity} */}
              </h1>
              <p>
                Book appointments with minimum wait-time & verified doctor
                details
              </p>
            </div>
          ) : (
            <div
              style={{
                width: "786px",
                height: "269",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              No Hospitals Available
            </div>
          )}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              gap: "50px",
            }}
          >
            {medicalCenterData.map((item) => {
              return (
                <div key={item["Provider ID"]}>
                  <MedicalCenterCard
                    data={item}
                    booking={booking}
                    setBooking={setBooking}
                  />
                </div>
              );
            })}
            {/* <div>
          <MedicalCenterCard
            medicalCenterData={medicalCenterData}
            setMedicalCenterData={setMedicalCenterData}
          />
        </div> */}
          </div>
        </div>

        <div className="medical-center-ad">
          <img
            src="./images/Ad/advertisement.png"
            style={{
              // width: "100%",
              height: "100%",
              objectFit: "cover",
              borderRadius: "15px",
            }}
          />
        </div>
      </div>
      <div>
        <Questions />
        <FooterElement />
      </div>
    </div>
  );
}
