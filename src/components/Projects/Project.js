import "./Projects.css";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

let Project = ({ image, title, explanation, livePreview, githubRepo }) => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div data-aos="fade-up" className="project-element">
      <img className="project-image" alt="error" src={image} />
      <div className="project-info">
        <div className="project-title">{title}</div>
        <div className="project-explanation">{explanation}</div>
      </div>
      <div className="access-info-wrapper">
        <a className="project-access-info" href={livePreview}>Live Preview</a>
        <a className="project-access-info" href={githubRepo}>Source Code</a>
      </div>
    </div>
  );
};

export default Project;
