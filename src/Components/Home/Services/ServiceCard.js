import "./ServiceCard.css";

export default function ServiceCard({ image, name, active }) {
  // const IconComponent = icon;
  if (name == "Hospitals") {
    active = true;
  }
  return (
    <div className={active ? "service-card-active" : "service-card"}>
      <div className="serivce-card-icon">
        <img src={image} height="60px" width="60px" />
      </div>
      <div
        className="service-card-name"
        style={{ color: active ? "blue" : "rgba(171, 182, 199, 1)" }}
      >
        {name}
      </div>
    </div>
  );
}
