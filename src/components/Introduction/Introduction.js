import { useEffect } from "react";
import "./Introduction.css";
import Aos from "aos";
import "aos/dist/aos.css";
import MyImage from "../images/WhatsApp Image 2022-07-09 at 17.29.41 copy.jpeg";

let Introduction = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div data-aos="fade-up" className="intro-wrapper">
      <div className="intro-content">
        <div className="my-name">Tunahan Dündar</div>
        <div className="middle-section">
          <div className="job-description">
            Full Stack Developer
          </div>
          <div className="cool-line">
            Thrilled to learn all about software.
          </div>
        </div>
        <div className="bottom-section">
            <img></img>
            <img></img>
            <img></img>
        </div>
      </div>
      <div>
        <img className="my-image" src={MyImage} alt="myImage"></img>
      </div>
    </div>
  );
};
export default Introduction;
