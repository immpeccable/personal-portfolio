import React from "react"
import './Header.css'

let Header = () => {

return <div className="header-wrapper">
    <div className="header-left-section hovered-yellow">
        Home
    </div>

    <div className="header-right-section">
        <div className="hovered-yellow">
            About
        </div>
        <div className="hovered-yellow">
            Skills
        </div>
        <div className="hovered-yellow">
            Projects
        </div>
        <div className="hovered-yellow">
            Contact
        </div>
    </div>

 </div>
}

export default Header;