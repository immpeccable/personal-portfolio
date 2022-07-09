import React from "react"
import "./MainWrapper.css"
import Header from '../Header/Header'
import Introduction from "../Introduction/Introduction"

let MainWrapper = () => {

    return <div className="main-wrapper">
        <Header/>
        <Introduction/>
    </div>
    
}

export default MainWrapper