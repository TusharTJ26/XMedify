import GppGoodIcon from "@mui/icons-material/GppGood";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import PinterestIcon from "@mui/icons-material/Pinterest";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { useNavigate } from "react-router";

import Download from "./Download/Download";
import "./Footer.css";
export default function FooterElement() {
  const navigate = useNavigate();
  return (
    <div className="footer">
      <Download />
      <div className="footer-container">
        <div className="content-row">
          <div className="icons">
            <div className="icon-and-name" onClick={() => navigate("/")}>
              <div className="main-icon">
                <GppGoodIcon />
              </div>
              <h2>Medify</h2>
            </div>
            <div className="social-icons">
              <FacebookIcon />
              <TwitterIcon />
              <YouTubeIcon />
              <PinterestIcon />
            </div>
          </div>
          <div className="link-items">
            <ul type="none">
              <li>
                <ChevronRightIcon />
                About Us
              </li>
              <li>
                <ChevronRightIcon />
                Our Pricing
              </li>
              <li>
                <ChevronRightIcon />
                Our Gallery
              </li>
              <li>
                <ChevronRightIcon />
                Appointment
              </li>
              <li>
                <ChevronRightIcon />
                Privacy Poilcy
              </li>
            </ul>
          </div>
          <div className="link-items">
            <ul type="none">
              <li>
                <ChevronRightIcon />
                Orthology
              </li>
              <li>
                <ChevronRightIcon />
                Neurology
              </li>
              <li>
                <ChevronRightIcon />
                Dental Care
              </li>
              <li>
                <ChevronRightIcon />
                Opthalmology
              </li>
              <li>
                <ChevronRightIcon />
                Cardiology
              </li>
            </ul>
          </div>
          <div className="link-items">
            <ul type="none">
              <li>
                <ChevronRightIcon />
                About Us
              </li>
              <li>
                <ChevronRightIcon />
                Our Pricing
              </li>
              <li>
                <ChevronRightIcon />
                Our Gallery
              </li>
              <li>
                <ChevronRightIcon />
                Appointment
              </li>
              <li>
                <ChevronRightIcon />
                Privacy Poilcy
              </li>
            </ul>
          </div>
        </div>
        <div className="copyright">
          Copyright ©2023 Surya Nursing Home.com. All Rights Reserved
        </div>
      </div>
    </div>
  );
}
