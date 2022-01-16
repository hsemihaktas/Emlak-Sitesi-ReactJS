import React from 'react'
import {Link} from 'react-router-dom';
import Image from '../images/logo.png'

function Navbar() {
    return (
        <div>
            <nav className="navbar fixed-top navbar-expand-lg  fixed-top" id="navbar">
                <div className="container-fluid">
                    <img src={Image} alt="..."  id="logo"></img>
                    <button className="navbar-toggler button" id="navbar-menu" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="fas fa-bars black"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <Link to="/anasayfa" className="nav-link active" id="navbarText">Anasayfa</Link>
                            <Link to="/kiralik" className="nav-link active" id="navbarText">Kiralık</Link>
                            <Link to="/satilik" className="nav-link active" id="navbarText">Satılık</Link>
                            <Link to="/hakkimizda" className="nav-link active" id="navbarText">Hakkımızda</Link>                           
                        </div>
                    </div>
                </div>
                <Link to="/admin" className="nav-link active" id="navbarText">Admin</Link>
            </nav>
            
        </div>
    )
}

export default Navbar
