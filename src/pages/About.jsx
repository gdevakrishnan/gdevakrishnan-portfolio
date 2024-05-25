import React, { Fragment, useContext, useEffect } from 'react'
import appContext from '../context/appContext';
import devakrishnan_profile from "../assets/devakrishnan_profile.jpg"
import { FaSchool } from "react-icons/fa";
import { FaUserGraduate } from "react-icons/fa";

function About() {
  const { setNavState } = useContext(appContext);
  useEffect(() => {
    setNavState({
      "home": false,
      "about": true,
      "skills": false,
      "projects": false,
      "contact": false
    });
  }, []);

  return (
    <Fragment>
      <section className="page about_page">
        <h1 className="title">who i am?</h1>
        <div className="image">
          <img src={devakrishnan_profile} alt="" className="img" />
        </div>
        <p className="about_me">
          I'm <span>Devakrishnan G</span>., a visionary Fullstack Developer specializing in the MERN stack (MongoDB, Express.js, React.js, Node.js) and pioneering Blockchain and Web3 technologies. Passionate about pushing boundaries, I craft dynamic web experiences and redefine digital innovation through decentralized solutions. From seamless UIs to secure blockchain projects, I thrive on challenges that drive transformation. Join me on this electrifying journey as we reshape the digital landscape with code and innovation as our guiding stars!
        </p>
        <h1 className="title">Education</h1>
        <div className="cards">
          <div className="card">
            <div className="left">
              <h1><FaSchool /></h1>
            </div>
            <div className="right">
              <h1 className="Name">Sri Sowdeswari Vidhyalaya Matric Hr Sec School</h1>
              <p className="course">12-std (2021-22)</p>
            </div>
          </div>

          <div className="card">
            <div className="left">
              <h1><FaUserGraduate /></h1>
            </div>
            <div className="right">
              <h1 className="Name">KGiSL Institute Of Technology</h1>
              <p className="course">B.E. ECE (2022-26)</p>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  )
}

export default About