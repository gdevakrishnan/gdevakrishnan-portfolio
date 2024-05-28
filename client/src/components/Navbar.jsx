import React, { Fragment, useContext } from 'react'
import logo from '../assets/gd_logo.png'
import { Link } from 'react-router-dom'
import appContext from '../context/appContext'

function Navbar() {
    const { navState } = useContext(appContext);

    return (
        <Fragment>
            <nav className="menu-container">
                <input type="checkbox" aria-label="Toggle menu" />
                <span></span>
                <span></span>
                <span></span>

                <Link to="/" className="menu-logo">
                    <img src={logo} alt="gdevakrishnan" />
                </Link>

                <div className="menu">
                    <ul>
                        <li>
                            <Link style={{ color: (navState.home) ? "#00e0d5": null }} to="/">Home</Link>
                        </li>
                        <li>
                            <Link style={{ color: (navState.about) ? "#00e0d5": null }} to="/about">About</Link>
                        </li>
                        <li>
                            <Link style={{ color: (navState.skills) ? "#00e0d5": null }} to="/skills">Skills</Link>
                        </li>
                        <li>
                            <Link style={{ color: (navState.projects) ? "#00e0d5": null }} to="/projects">Projects</Link>
                        </li>
                        <li>
                            <Link style={{ color: (navState.contact) ? "#00e0d5": null }} to="/contact">Contact</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </Fragment>
    )
}

export default Navbar