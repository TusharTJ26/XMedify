import "./Home.css";
import { useNavigate } from "react-router";
import Blog from "../../Components/Home/Blog/Blogs";
import Questions from "../../Components/Common/FAQ/FAQ";
import FooterElement from "../../Components/Common/Footers/Footer";
import Goal from "../../Components/Home/Goal/Goal";
import MedicalSpecialist from "../../Medical-Specialist/MedicalSpecialist";
import NavBar from "../../NavBar/NavBar";
import OurFamily from "../../Components/Home/Hospital-Family/OurFamily";
import SearchBar from "../../Search-Bar/SearchBar";
import NavTop from "../../NavBar/NavTop";
import Services from "../../Services/Services";
import HomeSearchBar from "./HomeSearchBar";
import FindSpecialisation from "../../Find-Specialisation/FindSpecialisation";
import Offer from "../../Offers/Offers";
export default function Home({
  cityData,
  stateData,
  selectedState,
  selectedCity,
  setSelectedCity,
  setSelectedState,
}) {
  const navigate = useNavigate();
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
      <div className="hero">
        <div>
          <NavBar home={true} />
        </div>
        <div className="hero-content">
          <div className="hero-tag">
            <h3>
              Skip the travel! Find Online
              <br />
              <span
                style={{
                  fontWeight: "700",
                  fontSize: "56px",
                  color: "rgba(16, 40, 81, 1)",
                }}
              >
                Medical{" "}
                <span
                  style={{
                    color: "rgba(42, 167, 255, 1)",
                  }}
                >
                  Centers
                </span>
              </span>
            </h3>
            <div className="hero-tag-text">
              Connect instantly with a 24x7 specialist or choose to video visit
              a particular doctor.
            </div>
            <div
              style={{ marginTop: "32px" }}
              onClick={() => navigate("/medical-center")}
            >
              <button
                style={{
                  width: "177px",
                  height: "48px",
                  borderRadius: "8px",
                  // gap: "10px",
                  padding: "12px 36px",
                  backgroundColor: "rgba(42, 168, 255, 1)",
                  // fontFamily: Poppins,
                  fontWeight: "500",
                  fontSize: "16px",
                  lineHeight: "100%",
                  letterSpacing: "2%",
                  color: "rgba(255, 255, 255, 1)",
                }}
              >
                Find Centers
              </button>
            </div>
          </div>
          <div className="hero-image">
            <img src="./images/home/hero.png" />
          </div>
        </div>
      </div>

      <div className="home-search">
        {/* <SearchBar
          cityData={cityData}
          stateData={stateData}
          selectedState={selectedState}
          selectedCity={selectedCity}
          setSelectedCity={setSelectedCity}
          setSelectedState={setSelectedState}
        /> */}
        <HomeSearchBar
          cityData={cityData}
          stateData={stateData}
          selectedState={selectedState}
          selectedCity={selectedCity}
          setSelectedCity={setSelectedCity}
          setSelectedState={setSelectedState}
        />
        <div>
          <Services />
        </div>
      </div>
      <div>
        <Offer />
      </div>
      <div>
        <FindSpecialisation />
      </div>
      <div>
        <MedicalSpecialist />
      </div>
      <div>
        <Goal />
      </div>
      <div>
        <Blog />
      </div>
      <div>
        <OurFamily />
      </div>
      <div>
        <Questions />
      </div>
      <div>
        <FooterElement />
      </div>
    </div>
  );
}
