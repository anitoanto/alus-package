import "./Landing.css";
import BodySection from "./BodySection";
import BodySection2 from "./BodySection2";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";

function Landing() {
  return (
    <>
      <Navbar />
      <div className="bg-container">
        <img className="bg-graphics" src="./LooperBG2.png" />
      </div>
      <div className="land-body">
        <div className="mission">OUR MISSION</div>
        <div className="main-head">
          Automatic <span className="main-head-sub">Lung Ultrasound</span>
        </div>
        <div className="main-content">
          An automated lung ultrasound clinical scoring and reporting tool
          <br /> for real-time analysis of lung ultrasound images
        </div>
        <Link to="/webapp" className="btnn">
          <button type="submit" className="btn">
            <span className="btn-name">GET STARTED →</span>
          </button>
        </Link>
      </div>
      <BodySection />
      <BodySection2 />
    </>
  );
}

export default Landing;
