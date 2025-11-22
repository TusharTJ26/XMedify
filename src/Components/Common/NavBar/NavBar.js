import "./NavBar.css";
import GppGoodIcon from "@mui/icons-material/GppGood";
import { useNavigate } from "react-router";
export default function NavBar({ home }) {
  const navigate = useNavigate();
  return (
    <div className={`nav-holder ${home ? "home-nav" : ""}`}>
      <div className="nav-name" onClick={() => navigate("/")}>
        <div className="nav-icon">
          <GppGoodIcon />
        </div>
        <h2>Medify</h2>
      </div>
      <div className="nav-items">
        <ul type="none">
          <li onClick={() => navigate("/search")}>Find Doctors</li>
          <li onClick={() => navigate("/search")}>Hospitals</li>
          <li>Medicines</li>
          <li>Surgeries</li>
          <li>Software for Provider</li>
          <li>Facilities</li>
        </ul>
        <button onClick={() => navigate("/my-bookings")}>My Bookings</button>
      </div>
    </div>
  );
}
