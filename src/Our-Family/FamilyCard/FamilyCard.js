import "./FamilyCard.css";
import VolunteerActivismIcon from "@mui/icons-material/VolunteerActivism";

export default function FamilyCard({ number, text, image }) {
  return (
    <div className="family-card">
      <div className="family-card-main">
        <div className="family-card-icon">
          <img src={image} height="50px" width="50px" />
        </div>
        <div className="family-card-number">{number}+</div>
        <div className="family-card-text">{text}</div>
      </div>
    </div>
  );
}
