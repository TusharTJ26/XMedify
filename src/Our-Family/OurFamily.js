import FamilyCard from "./FamilyCard/FamilyCard";
import "./OurFamily.css";

export default function OurFamily() {
  return (
    <div className="family-holder">
      <div className="family-main">
        <div className="family-text">
          <p className="family-quote">
            CARING FOR THE HEALTH OF YOU AND YOUR FAMILY.
          </p>
          <h3 className="family-heading">Our Families</h3>
          <br />
          <p className="family-text-content">
            We will work with you to develop individualised care plans,
            including management of chronic diseases. If we cannot assist, we
            can provide referrals or advice about the type of practitioner you
            require. We treat all enquiries sensitively and in the strictest
            confidence.
          </p>
        </div>
        <div className="family-card-container">
          <div className="family-card-row">
            <div className="family-card-item1">
              <FamilyCard
                number="5000"
                text="Happy Patients"
                image="./images/OurFamily/first.png"
              />
            </div>
            <div className="family-card-item2">
              <FamilyCard
                number="200"
                text="Hospitals"
                image="./images/OurFamily/Hospital.png"
              />
            </div>
          </div>
          <div className="family-card-row2">
            <div>
              <FamilyCard
                number="1000"
                text="Laboratories"
                image="./images/OurFamily/Drugstore.png"
              />
            </div>
            <div className="family-card-item2">
              <FamilyCard
                number="700"
                text="Expert Doctors"
                image="./images/OurFamily/last.png"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
