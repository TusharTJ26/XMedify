import SpecialistCard from "./Specialist-Card";
import "./Specialist-Carousel-Item.css";
export default function SCarouselItem() {
  return (
    <div style={{ display: "flex" }}>
      <div>
        <SpecialistCard
          image="s1.png"
          name="Dr. Lesley Hull"
          speciality="Medicine"
        />
      </div>
      <div>
        <SpecialistCard
          image="s2.png"
          name="Dr Ahmed Khan"
          speciality="Neurologist"
        />
      </div>
      <div>
        <SpecialistCard
          image="s3.png"
          name="Dr. Heena Sachdeva"
          speciality="Orthopadics"
        />
      </div>
      <div>
        <SpecialistCard
          image="s4.png"
          name="Dr. Ankur Sharma"
          speciality="Medicine"
        />
      </div>
      <div>
        <SpecialistCard
          image="s5.png"
          name="Dr. Ahmad Stevens"
          speciality="Neurologist"
        />
      </div>
    </div>
  );
}
