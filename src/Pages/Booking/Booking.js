import NavBar from "../../NavBar/NavBar";
import NavTop from "../../NavBar/NavTop";
import SearchIcon from "@mui/icons-material/Search";
import "./Booking.css";
import FooterElement from "../../Footer/Footer";
import MedicalCenterCard from "../../Medical-Center-Card/MedicalCenterCard";
import { useState } from "react";
export default function Booking({ medicalCenterData }) {
  let medicalCenterDataLength = 1;
  const [search, setSearch] = useState("Search By Hospital");
  const [filteredBooking, setFilteredBooking] = useState();

  const handleSearch = () => {
    return;
  };

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
      <div className="blueBox">
        <h1>My Bookings</h1>
        <div className="booking-search">
          <input
            placeholder={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button onClick={() => handleSearch()}>
            <SearchIcon /> Search
          </button>
        </div>
      </div>
      <div className="booking-content">
        {medicalCenterDataLength == 0 ? (
          <div
            style={{
              width: "786px",
              height: "269",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            No Bookings Visible
          </div>
        ) : (
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
                <div>
                  <MedicalCenterCard
                    key={item["Provider ID"]}
                    data={item}
                    booking={true}
                  />
                </div>
              );
            })}
          </div>
        )}
        <div className="booking-ad">
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
        <FooterElement />
      </div>
    </div>
  );
}
