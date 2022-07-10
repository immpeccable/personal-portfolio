import "./AboutMe.css";
import Aos from "aos";
import "aos/dist/aos.css";
import {useEffect} from 'react';
//import BackgroundImage from '../images/pexels-francesco-ungaro-998641.jpg/'

let AboutMe = () => {

    useEffect(() => {
        Aos.init({ duration: 2000 });
      }, []);

  return (
    <div id="about-me" data-aos = "fade-right" className="about-me-wrapper">
      <div className="about-me-title">About Me</div>
      <div className="about-text">
            With my passion to solve problems since I was a little kid, my journey began.
          </div>
      <div className="about-text">
        I always wanted to dedicate my life to dealing with numbers, solving the problems that are intimidating to many people.
        I was addicted to the joy that I have when I solve one of those problems.
      </div>
      <div className="about-text">
        Currently, I am studying Computer Engineering at <a className = "metu" href = "https://www.metu.edu.tr/tr">METU</a> which is one of the best universities in Turkey. I am thrilled to explore
        the things that I don't know about it yet. I am looking forward to make my life an endless learning journey!
      </div>
    </div>
  );
};

export default AboutMe;
