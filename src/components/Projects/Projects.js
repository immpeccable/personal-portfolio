import "./Projects.css";
import CvAppImage from "./project-images/Screen Shot 2022-07-10 at 18.20.25.png";
import ToDoImage from "./project-images/Screen Shot 2022-07-10 at 18.21.37.png";
import BattleShipImage from "./project-images/Screen Shot 2022-07-10 at 18.22.39.png";
import QRCodeImage from "./project-images/Screen Shot 2022-07-10 at 21.15.22.png";
import Project from "./Project";

let Projects = () => {
  const ProjectObjects = [
    {
      image: QRCodeImage,
      title: "QR Code Generator",
      explanation:
        "QR Code Generator can generate a qr code for almost anything. For example, user can create qrcode for a website, location, application. Moreover, user can create qrcode to automatically connect to a Wifi.",
      livePreview: "https://www.qrcode-lemon.com/",
      githubRepo: "https://github.com/onuruci/qr-frontend",
    },

    {
      image: CvAppImage,
      title: "Cv Application",
      explanation:
        "This is an example CV application that dynamically creates the corresponding CV that user is creating. Creation process is basicly entering the related inputs to the blank spaces. User can create one or more work experience and education information",
      livePreview: "https://immpeccable.github.io/cv-application/",
      githubRepo: "https://immpeccable.github.io/cv-application/",
    },
    {
      image: ToDoImage,
      title: "To Do Application",
      explanation:
        "This is an exampel To Do Application that user can enter todo's that needs to be met at certain time. Moreover, user can create projects to group related todo's under the same project. Finally, you can remove todo's once you have done with it.",
      livePreview: "https://immpeccable.github.io/to-do-list/",
      githubRepo: "https://github.com/immpeccable/to-do-list",
    },
    {
      image: BattleShipImage,
      title: "Battleship Game",
      explanation:
        "Battleship game explains the purpose of the application. At the beginning of the game, user places the ships. After that AI automatically places ships and game on!",
      livePreview: "https://immpeccable.github.io/battleship-game/",
      githubRepo: "https://github.com/immpeccable/battleship-game",
    },
  ];

  let MapProjects = () => {
    return ProjectObjects.map((el) => {
      return (
        <Project
          image={el.image}
          title={el.title}
          explanation={el.explanation}
          livePreview={el.livePreview}
          githubRepo={el.githubRepo}
        />
      );
    });
  };

  return (
    <div className="projects-wrapper">
      <div className="projects-title">PROJECTS</div>
      <div className="project-table">{MapProjects()}</div>
    </div>
  );
};

export default Projects;
