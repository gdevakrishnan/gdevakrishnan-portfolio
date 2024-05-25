import React, { Fragment, useContext, useEffect } from 'react'
import appContext from '../context/appContext'

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

  return (
    <Fragment>
      <section className="page projects_page">
        <h1 className="title">Projects</h1>
      </section>
    </Fragment>
  )
}

export default Projects