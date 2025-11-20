import "./FAQ.css";
import FAQAccordion from "./FAQAccordion";

export default function Questions() {
  return (
    <div className="qna-holder">
      <div className="qna-heading">
        <p>Get Your Answer</p>
        <h3>Frequently Asked Questions</h3>
      </div>
      <div>
        <div className="qna-main">
          <div className="qna-image-holder">
            <img
              className="qna-image"
              src="./images/QNA/qna-image.png"
              alt="QNA-image"
            />
            {/* <img
        src="C:\Users\Tushar\Desktop\Crio\November\XMedify\medify\public\images\QNA\qna-image.png"
        alt="QNA-image"
      /> */}
          </div>
          <div className="questions">
            <FAQAccordion />
          </div>
        </div>
      </div>
    </div>
  );
}
