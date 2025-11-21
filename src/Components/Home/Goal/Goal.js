import "./Goal.css";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
import VerifiedIcon from "@mui/icons-material/Verified";
export default function Goal() {
  return (
    <div className="goal-container">
      <div className="goal-content">
        <div className="goal-images">
          <div className="goal-images-row1">
            <div className="consultation-card">
              <div
                style={{ display: "flex", gap: "5px", alignItems: "center" }}
              >
                <div
                  style={{
                    display: "flex",
                    width: "34px",
                    height: "34px",
                    backgroundColor: "rgba(42, 167, 255, 1)",
                    // textAlign: "center",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: "10px",
                  }}
                >
                  <PhoneInTalkIcon
                    sx={{ width: "15.83px", height: "15.83px", color: "white" }}
                  />
                </div>
                <p
                  style={{
                    color: "rgba(27, 60, 116, 1)",
                    fontWeight: "700",
                    lineHeight: "27px",
                  }}
                >
                  Free Consultation
                </p>
              </div>
              <div
                style={{
                  lineHeight: "24px",
                  fontSize: "15px",
                  color: "rgba(119, 130, 157, 1)",
                }}
              >
                Consultation with the best
              </div>
            </div>
            <img className="goal-image1" src="./images/Goal/goal-image1.png" />
          </div>
          <img className="goal-image2" src="./images/Goal/goal-image2.png" />
        </div>
        <div className="goal-text">
          <p
            style={{
              fontSize: "16px",
              fontWeight: "600",
              lineHeight: "27px",
              color: "rgba(42, 167, 255, 1)",
            }}
          >
            HELPING PATIENTS FROM AROUND THE GLOBE!!
          </p>
          <h3
            style={{
              fontSize: "48px",
              lineHeight: "67px",
              fontWeight: "600",
              color: "rgba(27, 60, 116, 1)",
            }}
          >
            Patient{" "}
            <span style={{ color: "rgba(42, 167, 255, 1)" }}>Caring</span>
          </h3>
          <br />
          <p
            style={{
              fontSize: "17px",
              fontWeight: "500",
              lineHeight: "29px",
              color: "rgba(119, 130, 157, 1)",
            }}
          >
            Our goal is to deliver quality of care in a courteous, respectful,
            and compassionate manner. We hope you will allow us to care for you
            and strive to be the first and best choice for healthcare.
          </p>
          <ul type="none">
            <li className="list-item">
              <VerifiedIcon color="primary" sx={{ marginRight: "10px" }} />
              <span>Stay Updated About Your Health</span>
            </li>
            <li className="list-item">
              <VerifiedIcon color="primary" sx={{ marginRight: "10px" }} />
              <span>Check Your Results Online</span>
            </li>
            <li className="list-item">
              <VerifiedIcon color="primary" sx={{ marginRight: "10px" }} />
              <span>Manage Your Appointments</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
