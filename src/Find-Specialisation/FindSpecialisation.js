import "./FindSpecialisation.css";

export default function FindSpecialisation() {
  const cards = [
    { image: "./images/Specialisation/Drugstore.png", title: "Dentistry" },
    { image: "./images/Specialisation/Stethoscope.png", title: "Primary Care" },
    { image: "./images/Specialisation/HeartRate.png", title: "Cardiology" },
    {
      image: "./images/Specialisation/Heart-Rate-Monitor.png",
      title: "MRI Resonance",
    },
    { image: "./images/Specialisation/BloodSample.png", title: "Blood Test" },
    { image: "./images/Specialisation/Immune.png", title: "Piscologist" },
    { image: "./images/Specialisation/Drugstore.png", title: "Laboratory" },
    { image: "./images/Specialisation/X-Ray.png", title: "X-Ray" },
  ];
  return (
    <div className="specialisation-holder">
      <div className="specialisation-heading">Find by specialisation</div>
      <div className="specialisation-cards">
        {cards.map((item, index) => {
          return (
            <div key={index} className="specialisation-card">
              <img src={item.image} width="80px" height="80px" />
              <div>{item.title}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
