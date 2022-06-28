import BodySection2 from "../landing/BodySection2";
import Navbar from "../landing/Navbar";
import "./About.css";

function About() {
  return (
    <div>
      <Navbar />
      <div>
        <div className="top-credit">
          <div className="about-title">
            <span>About</span>the project
          </div>
          <div className="about-top-content">
            <div>
              <div className="sp-bold">
                <span>Clinical access</span> to relevant key-frames from an
                ultrasound scan video.
              </div>
              <ul>
                <br />
                <br />
                <li>
                  Effective video summarisation by selection of non-redundant
                  clinically relevant frames.
                </li>
                <br />
                <li>
                  Automatic classification of ultrasound data into normal and
                  abnormal classes.
                </li>
                <br />
                <li>
                  Detection and segmentation of various critical signs to
                  determine the severity of anomalies.
                </li>
                <br />
                <li>
                  AI-driven object detection model which automatically
                  identifies the significant landmarks in the lung.
                </li>
              </ul>
            </div>
            <div className="side-img-container">
              <img className="sir" src="./Group71.png" alt="photo" />
              {/* <img className="overlap-img" src="./Group71.png" alt="photo" /> */}
              <iframe
                className="overlap-img"
                // width="942"
                height="300"
                src="https://www.youtube.com/embed/mwr-wF_IMeU"
                title="Web5... The Web3 Killer?"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </div>
        <div className="hb-container">
          <div>
            An automated clinically scoring and reporting lung ultrasound tool
            for real-time analysis of lung ultrasound videos.
          </div>
        </div>
        <div className="sp-container">
          <img className="sp-img" src="./sp-img.png" alt="photo" />
          <div className="sp-content">
            14 lung videos obtained using the obliquely positioned probe along
            the posterior, anterior, and lateral chest walls.
          </div>
        </div>
        <div className="git-link">
          <div>
            Github link :{" "}
            <a href={"https://viralzone.expasy.org/5216"} target="_blank">
              https://viralzone.expasy.org/5216
            </a>
          </div>
        </div>
        <BodySection2 />
      </div>
    </div>
  );
}

export default About;
