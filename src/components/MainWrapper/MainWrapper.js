import React from "react"
import "./MainWrapper.css"
import Header from '../Header/Header'
import Introduction from "../Introduction/Introduction"
import AboutMe from "../AboutMe/AboutMe"
import SkillsSection from "../SkillsSection/SkillsSection"

let MainWrapper = () => {

    return <div className="main-wrapper">
        <Header/>
        <Introduction/>
        <AboutMe/>
        <SkillsSection/>
    </div>
    
}

export default MainWrapper