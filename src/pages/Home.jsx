import React, { Fragment, useContext, useEffect } from 'react'
import appContext from '../context/appContext'
import { SiLeetcode } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { Link } from 'react-router-dom';

function Home() {
  const { setNavState } = useContext(appContext);
  useEffect(() => {
    setNavState({
      "home": true,
      "about": false,
      "skills": false,
      "projects": false,
      "contact": false
    });
  }, []);

  return (
    <Fragment>
      <section className="page home_page">
        <div className="left">
          <h1>
            <span className='hello'>Hello there, </span>This is <span className='Name'>Devakrishnan G</span> I'm a Professional <span className='job_role'>Software Developer</span>.
          </h1>

          {/* Social Links */}
          <ul className="list">
            <li className="github">
              <a href="https://github.com/gdevakrishnan" target='_blank'>
                <FaGithub />
              </a>
            </li>

            <li className="linkedin">
              <a href="https://www.linkedin.com/in/deva-krishnan-52981a245/" target='_blank'>
                <FaLinkedin />
              </a>
            </li>

            <li className="leetcode">
              <a href="https://leetcode.com/u/gdevakrishnan700/" target='_blank'>
                <SiLeetcode />
              </a>
            </li>
          </ul>

          {/* Buttons */}
          <div className="btn">
            <Link to="/contact">Contact</Link>
          </div>
        </div>
        <div className="right">
          <div className="spinner">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </section>
    </Fragment>
  )
}

export default Home