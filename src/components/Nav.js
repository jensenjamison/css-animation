import React from "react"
import "../styles/Nav.css"

function Nav(props){
    return(
        <>
        <nav className="nav-bar">
            <div>
                <h1>Start Bootstrap</h1>
            </div>
            <div>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Services</li>
                    <li>Contact</li>
                    <li className="hamburger-button">
                        <img src="https://static.thenounproject.com/png/703781-200.png"></img>
                    </li>
                </ul>
            </div>
        </nav>
        <div className="side-menu">
        
        </div>
        </>
    )
}

export default Nav;