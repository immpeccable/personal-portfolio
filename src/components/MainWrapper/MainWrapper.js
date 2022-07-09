import React from "react"
import "./MainWrapper.css"
import Header from '../Header/Header'
import Introduction from "../Introduction/Introduction"
import AboutMe from "../AboutMe/AboutMe"

let MainWrapper = () => {

    return <div className="main-wrapper">
        <Header/>
        <Introduction/>
        <AboutMe/>
    </div>
    
}

export default MainWrapper