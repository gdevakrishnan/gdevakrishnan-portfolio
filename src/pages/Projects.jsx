import React, { useContext, useEffect } from 'react'
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
    <div>Projects</div>
  )
}

export default Projects