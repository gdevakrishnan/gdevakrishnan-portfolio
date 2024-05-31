import React, { Fragment, useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { FaBarsStaggered } from "react-icons/fa6";
import logo from '../assets/gd_logo.png';
import appContext from '../context/appContext';
import { GrClose } from "react-icons/gr";

function Navbar() {
  const { navState } = useContext(appContext);
  const [menuBtn, setMenuBtn] = useState(true);

  return (
    <Fragment>
      <nav className='nav'>
        <input type="checkbox" name="check" id="check" />
        <h1 className="logo">
          <img src={logo} alt="gd" className="img" />
        </h1>

        <label htmlFor="check" onClick={() => setMenuBtn(!menuBtn)}>
          <h1 className="fa">
            {
              (menuBtn) ? <FaBarsStaggered /> : <GrClose />
            }
          </h1>
        </label>
        <ul>
          <li>
            <Link
              style={{ color: navState.home ? "#00e0d5" : null }}
              to="/"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              style={{ color: navState.about ? "#00e0d5" : null }}
              to="/about"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              style={{ color: navState.skills ? "#00e0d5" : null }}
              to="/skills"
            >
              Skills
            </Link>
          </li>
          <li>
            <Link
              style={{ color: navState.projects ? "#00e0d5" : null }}
              to="/projects"
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              style={{ color: navState.contact ? "#00e0d5" : null }}
              to="/contact"
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </Fragment>
  )
}

export default Navbar