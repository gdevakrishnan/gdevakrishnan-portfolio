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
      <header>
        <nav>
          <input type="checkbox" id="check" onClick={() => setMenuBtn(!menuBtn)} />
          <label htmlFor='check' class="checkbtn">
            {
              (menuBtn) ? <FaBarsStaggered /> : <GrClose />
            }
          </label>

          <img src={logo} alt="gd" className="logo" />

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
      </header>
    </Fragment>
  )
}

export default Navbar