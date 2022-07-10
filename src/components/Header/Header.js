import React from "react"
import './Header.css'
import {Link} from 'react-scroll'

let Header = () => {

return <div className="header-wrapper">
    <div className="header-left-section hovered-yellow">
        Home
    </div>

    <div className="header-right-section">
    <Link className = "hovered-yellow"
    to="about-me"
    smooth={true}
    duration={1500}
        >
            About
        </Link>
        <Link className="hovered-yellow" to="skills-wrapper"
    smooth={true}
    duration={1500}>
            Skills
        </Link>
        <Link className="hovered-yellow"
        smooth={true}
        duration={1500}
        to = "projects-wrapper">
            Projects
        </Link>
        <Link className="hovered-yellow">
            Contact
        </Link>
    </div>

 </div>
}

export default Header;