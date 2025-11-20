import "./Specialist-Card.css";
export default function SpecialistCard({ image, name, speciality }) {
  const cardImage = `./images/Specialist/${image}`;
  return (
    <div className="specialist-card">
      <div className="specialist-card-box">
        <div className="specialist-card-image">
          <img
            src={cardImage}
            alt={name}
            width="295px"
            height="364px"
            border-radius="250px 250px 8px 8px"
          />
        </div>
      </div>
      <div className="specialist-card-discription">
        <div
          style={{
            fontWeight: "400",
            fontSize: "24px",
            lineHeight: "48px",
            textAlign: "center",
          }}
        >
          {name}
        </div>
        <div
          style={{
            fontWeight: "500",
            fontSize: "16px",
            lineHeight: "27px",
            color: "rgba(42, 167, 255, 1)",
            textAlign: "center",
          }}
        >
          {speciality}
        </div>
      </div>
    </div>
  );
}
