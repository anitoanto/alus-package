import Navbar from "../landing/Navbar";
import "./Contact.css";

function Contact() {
  return (
    <div>
      <Navbar />
      <div className="top-credit">
        <div className="about-title">
          <span>Our</span>Team
        </div>
        <div className="top-content">
          <div>
            <div className="top-name">Dr. Mahesh Raveendranatha Panicker</div>
            <div>Assistant Professor</div>
            <div>Electrical Engineering</div>
            <div>Indian Institute of Technology Palakkad</div>
          </div>
          <div className="side-img-container">
            <img className="sir" src="./Group122.png" alt="photo" />
          </div>
        </div>
      </div>
      <div className="other-container">
        <img src="./contacts.png" alt="photo" />
      </div>
      <div className="software-dev">
        <div className="about-title">
          <span>Our</span>Software Team
        </div>
        <div className="name-container">
          <div>Anito Anto</div>
          <div>Linda Rose Jimson</div>
          <div>Mohammed Jafrin</div>
          <div>Tanya Rose</div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
