import NavBar from "../../Components/Common/NavBar/NavBar";
import NavTop from "../../Components/Common/NavBar/NavTop";
import SearchIcon from "@mui/icons-material/Search";
import "./Booking.css";
import FooterElement from "../../Components/Common/Footers/Footer";
import MedicalCenterCard from "../../Medical-Center-Card/MedicalCenterCard";
import { useState, useEffect } from "react";
export default function Booking({ medicalCenterData, booking, setBooking }) {
  let medicalCenterDataLength = 1;
  const [search, setSearch] = useState("Search By Hospital");
  const [filteredBooking, setFilteredBooking] = useState(booking);

  const handleSearch = () => {
    const filteredData = booking.filter((item) => {
      if (
        item.hospital["Hospital Name"]
          .toLowerCase()
          .includes(search.toLowerCase())
      ) {
        return item;
      }
    });
    setFilteredBooking(filteredData);
  };

  console.log(filteredBooking);
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
            {booking.map((item, index) => {
              // console.log(item.hospital);
              return (
                <div key={index}>
                  <MedicalCenterCard
                    data={item.hospital}
                    time={item.time}
                    bookingPage={true}
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
