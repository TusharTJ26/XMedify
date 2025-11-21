import "./MedicalCenterCard.css";
import VerifiedIcon from "@mui/icons-material/Verified";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import { useNavigate } from "react-router";
import { useState } from "react";
import Calander from "../Calander/Calander";
export default function MedicalCenterCard({
  data,
  time,
  bookingPage,
  booking,
  setBooking,
}) {
  const navigate = useNavigate();
  const [isBooking, setIsBooking] = useState(false);
  const handleClick = () => {
    setIsBooking(!isBooking);
  };
  return (
    <div>
      {/* {bookingPage?
        (<div className="medical-center-card-holder">):
      (<div className="medical-center-card-holder" onClick={() => setIsBooking(!isBooking)}>)
    } */}
      <div
        className="medical-center-card-holder"
        onClick={bookingPage ? undefined : () => handleClick()}
      >
        <div className="medical-center-card-content">
          <div className="medical-center-card-details">
            <div className="medical-center-image-container">
              <div className="medical-center-image-holder">
                <img
                  src="./images/Medical-Center/medical-center.png"
                  width="80px"
                  height="80px"
                  style={{ display: "absolute" }}
                />
              </div>
              <VerifiedIcon
                //   color="primary"
                sx={{
                  // display: "absolute",
                  color: "rgba(42, 167, 255, 1)",
                  // marginTop: "-500px",
                  marginLeft: "-20px",
                }}
              />
            </div>
            <div className="medical-center-info">
              {/* <h3>Fortis Hospital Richmond Road</h3> */}
              <h3>{data["Hospital Name"]}</h3>
              <div className="medical-center-location">
                {/* <h3>Banglore, Karnataka</h3> */}
                <h3>
                  {data.City},{data.State}
                </h3>
                {/* <h5>Smilessence Center for Advanced Dentistry + 1</h5> */}
                <h5>{data["Hospital Type"]}</h5>
                <p>
                  <span
                    style={{
                      fontWeight: "700",
                      color: "rgba(2, 164, 1, 1)",
                    }}
                  >
                    Free
                  </span>
                  <span style={{ textDecoration: "line-through" }}> ₹500</span>
                  Consultation fee at clinic
                </p>
              </div>
              <div className="medical-center-rating">
                <div>
                  <ThumbUpIcon style={{ width: "14px", height: "14px" }} />{" "}
                  {data["Hospital overall rating"]}
                </div>
              </div>
            </div>
          </div>
          <div className="medical-center-booking-btn-holder">
            {bookingPage ? (
              <div style={{ display: "flex", gap: "35px" }}>
                <div className="booked-time">{time} </div>
                <div className="booked-date"> </div>
              </div>
            ) : (
              <>
                <div
                  style={{
                    position: "absolute",
                    bottom: "4px",
                    width: "220px",
                    height: "82.4px",
                    textAlign: "center",
                  }}
                >
                  <p>Available Today</p>
                  {/* <button onClick={() => navigate("/my-bookings")}> */}
                  <button onClick={() => setIsBooking(!isBooking)}>
                    Book FREE Center Visit
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
      {isBooking ? (
        <Calander data={data} booking={booking} setBooking={setBooking} />
      ) : (
        ""
      )}
    </div>
  );
}
