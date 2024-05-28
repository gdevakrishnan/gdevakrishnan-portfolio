import React, { Fragment, useContext, useEffect } from 'react'
import appContext from '../context/appContext'
import { projectsDb } from '../DB/db';
import { FaGithub } from "react-icons/fa";
import { FaEye } from "react-icons/fa";

function Projects() {
  const { setNavState } = useContext(appContext);
  useEffect(() => {
    setNavState({
      "home": false,
      "about": false,
      "skills": false,
      "projects": true,
      "contact": false
    });
  }, []);

  const CardTemplate = (props) => {
    const { projects } = props;
    return (
      <Fragment>
        {
          projects.map((element, index) => {
            return (
              <div className="card" key={index}>
                <div className="main">
                  <div className="image">
                    <img src={element.image} alt={element.name} className="img" />
                  </div>
                  <div className="content">
                    <h1 className="card_title" title={element.name}>{element.name}</h1>
                    <p className="card_subtitle">
                      {element.description}
                    </p>
                  </div>
                </div>
                <div className="btn">
                  <a href={element.git} target='_blank' title='github'>
                    <FaGithub />
                  </a>
                  <a href={element.view} target='_blank' title='view'>
                    <FaEye />
                  </a>
                </div>
              </div>
            );
          })
        }
      </Fragment>
    );
  }

  return (
    <Fragment>
      <section className="page projects_page">
        {/* Projects cards */}
        <h1 className="title">Projects</h1>

        <div className="cards">
          <CardTemplate projects={projectsDb.projects} />
        </div>

        <h1 className="title">Web3 Projects</h1>

        <div className="cards">
          <CardTemplate projects={projectsDb.web3projects} />
        </div>

        <h1 className="title">Contributions</h1>

        <div className="cards">
          <CardTemplate projects={projectsDb.contribution} />
        </div>

        <h1 className="title">Mini Projects</h1>

        <div className="cards">
          <CardTemplate projects={projectsDb.miniprojects} />
        </div>

      </section>
    </Fragment>
  )
}

export default Projects