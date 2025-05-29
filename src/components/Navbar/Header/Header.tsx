import React from 'react'
import "./Header.css"
import logoImg from "../../../assets/white-logo.png"
const header = () => {
  return (
    <div>
<section>
        <div className="nav-section">
            <div className="img-nav">
                <img src={logoImg} alt="image" width="150px" height="40px"/>
            </div>
            <div className="nav-tag">
                <nav>Home</nav>
                <nav>About</nav>
                <nav>Services</nav>
                <nav>Projects</nav>
                <nav>Contact</nav>
                <nav><button>TAKE ACTION</button></nav>
            </div>
        </div>
    </section>
    </div>
  )
}

export default header