import "./Download.css";
// import AppleIcon from "@mui/icons-material/Apple";

export default function Download() {
  return (
    <div className="download-container">
      <div className="download-main">
        <div className="download-images">
          <div>
            <img
              src="../../../../public/images/footer/MobileDisplay.png"
              alt="image"
            />
          </div>
        </div>
        <div className="download-content">
          <div className="download-heading">
            Download the{" "}
            <span style={{ color: "rgba(42, 168, 255, 1)" }}>Medify</span> App
          </div>
          <p
            style={{
              // fontFamily: "Lato",
              color: "rgba(65, 65, 70, 1)",
              fontWeight: "700",
              lineHeight: "24px",
              verticalAlign: "middle",
            }}
          >
            Get the link to download the app
          </p>
          <div className="number-container">
            <div className="number-input">
              <div className="number-start">+91</div>
              <div className="inputbox">Enter phone number</div>
            </div>
            <button className="send-button">Send SMS</button>
          </div>
          <div className="download-icons">
            <img src="./images/footer/google_play.png" alt="google-icon" />
            <img src="./images/footer/app_store.png" alt="apple-icon" />
          </div>
        </div>
      </div>
    </div>
  );
}
