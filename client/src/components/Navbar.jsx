import React, { Fragment, useContext, useState } from 'react';
import logo from '../assets/gd_logo.png';
import { Link } from 'react-router-dom';
import appContext from '../context/appContext';

function Navbar() {
    const { navState } = useContext(appContext);
    const [menuOpen, setMenuOpen] = useState(false);

    const handleMenuToggle = () => {
        setMenuOpen(!menuOpen);
    };

    const handleLinkClick = () => {
        setMenuOpen(false);
    };

    return (
        <Fragment>
            <nav className="menu-container">
                <input
                    type="checkbox"
                    aria-label="Toggle menu"
                    checked={menuOpen}
                    onChange={handleMenuToggle}
                />
                <span onClick={handleMenuToggle}></span>
                <span onClick={handleMenuToggle}></span>
                <span onClick={handleMenuToggle}></span>

                <Link to="/" className="menu-logo" onClick={handleLinkClick}>
                    <img src={logo} alt="gdevakrishnan" />
                </Link>

                <div className={`menu ${menuOpen ? 'open' : ''}`}>
                    <ul>
                        <li>
                            <Link
                                style={{ color: navState.home ? "#00e0d5" : null }}
                                to="/"
                                onClick={handleLinkClick}
                            >
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link
                                style={{ color: navState.about ? "#00e0d5" : null }}
                                to="/about"
                                onClick={handleLinkClick}
                            >
                                About
                            </Link>
                        </li>
                        <li>
                            <Link
                                style={{ color: navState.skills ? "#00e0d5" : null }}
                                to="/skills"
                                onClick={handleLinkClick}
                            >
                                Skills
                            </Link>
                        </li>
                        <li>
                            <Link
                                style={{ color: navState.projects ? "#00e0d5" : null }}
                                to="/projects"
                                onClick={handleLinkClick}
                            >
                                Projects
                            </Link>
                        </li>
                        <li>
                            <Link
                                style={{ color: navState.contact ? "#00e0d5" : null }}
                                to="/contact"
                                onClick={handleLinkClick}
                            >
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </Fragment>
    );
}

export default Navbar;
