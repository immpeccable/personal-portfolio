import "./Projects.css"
import CvAppImage from './project-images/Screen Shot 2022-07-10 at 18.20.25.png'
import ToDoImage from './project-images/Screen Shot 2022-07-10 at 18.21.37.png'
import BattleShipImage from './project-images/Screen Shot 2022-07-10 at 18.22.39.png'
import MemoryCardImage from './project-images/Screen Shot 2022-07-10 at 18.23.34.png'
import Project from "./Project"

//const projectImages = [CvAppImage, ToDoImage, BattleShipImage, MemoryCardImage]
    //const projectTitles  = ["Cv Application", "To Do Application", "Battleship Game", "Memory Card Game"];
    /*const projectExplanations = ["This is an example CV application that dynamically creates the corresponding CV that user is creating. Creation process is basicly entering the related inputs to the blank spaces. User can create one or more work experience and education information",
"This is an exampel To Do Application that user can enter todo's that needs to be met at certain time. Moreover, user can create projects to group related todo's under the same project. Finally, you can remove todo's once you have done with it.",
"Battleship game explains the purpose of the application. At the beginning of the game, user places the ships. After that AI automatically places ships and game on!",
"The purpose of the Memory Card Game is that user tries to select all the pokemons without clicking any item twice."]

    const livePreviews = ["https://immpeccable.github.io/cv-application/", "https://immpeccable.github.io/to-do-list/",
    "https://immpeccable.github.io/battleship-game/", "https://immpeccable.github.io/memory-card-game/"];
    const githubRepos = ["https://github.com/immpeccable/cv-application", "https://github.com/immpeccable/to-do-list",
"https://github.com/immpeccable/battleship-game", "https://github.com/immpeccable/memory-card-game"];*/




let Projects = () => {

    const ProjectObjects = [{
        "image": CvAppImage,
        "title": "Cv Application",
        "explanation": "This is an example CV application that dynamically creates the corresponding CV that user is creating. Creation process is basicly entering the related inputs to the blank spaces. User can create one or more work experience and education information",
        "livePreview": "https://immpeccable.github.io/cv-application/",
        "githubRepo": "https://immpeccable.github.io/cv-application/"
    },
    {
        "image": ToDoImage,
        "title": "To Do Application",
        "explanation": "This is an exampel To Do Application that user can enter todo's that needs to be met at certain time. Moreover, user can create projects to group related todo's under the same project. Finally, you can remove todo's once you have done with it.",
        "livePreview": "https://immpeccable.github.io/to-do-list/",
        "githubRepo": "https://github.com/immpeccable/to-do-list",
    },
    {
        "image": BattleShipImage,
        "title": "Battleship Game",
        "explanation": "Battleship game explains the purpose of the application. At the beginning of the game, user places the ships. After that AI automatically places ships and game on!",
        "livePreview": "https://immpeccable.github.io/battleship-game/",
        "githubRepo": "https://github.com/immpeccable/battleship-game"
    },
    {
        "image": MemoryCardImage,
        "title": "Memory Card Game",
        "explanation": "The purpose of the Memory Card Game is that user tries to select all the pokemons without clicking any item twice.",
        "livePreview": "https://immpeccable.github.io/memory-card-game/",
        "githubRepo": "https://github.com/immpeccable/memory-card-game"
    }  
];

    let MapProjects = () => {
        return ProjectObjects.map((el) => {
            return <Project image = {el.image} title = {el.title} explanation = {el.explanation} livePreview = {el.livePreview} githubRepo = {el.githubRepo} />

        })
    }

    

    return <div className="projects-wrapper">
        <div className="projects-title">
            PROJECTS
        </div>
        <div className="project-table">
            {MapProjects()}
        </div>
    </div>



}

export default Projects