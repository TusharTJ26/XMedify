import ServiceCard from "./ServiceCard";
import "./Services.css";

export default function Services() {
  const serivce = [
    { image: "./images/Services/Doctor.png", title: "Doctor" },
    { image: "./images/Services/Drugstore.png", title: "Labs" },
    { image: "./images/Services/Hospital.png", title: "Hospitals" },
    { image: "./images/Services/Capsule.png", title: "Medical Store" },
    { image: "./images/Services/Ambulance.png", title: "Ambulance" },
  ];

  return (
    <div className="service-holder">
      <h3>You may be looking for</h3>
      <div className="service-cards">
        {serivce.map((item, index) => {
          return (
            <div key={index}>
              <ServiceCard image={item.image} name={item.title} />
            </div>
          );
        })}
        {/* <ServiceCard icon={PermIdentityIcon} name={"Doctors"} />
        <ServiceCard icon={PermIdentityIcon} name={"Labs"} />
        <ServiceCard icon={PermIdentityIcon} name={"Hospitals"} active={true} />
        <ServiceCard icon={PermIdentityIcon} name={"Medical Store"} />
        <ServiceCard icon={PermIdentityIcon} name={"Ambulance"} /> */}
      </div>
    </div>
  );
}
