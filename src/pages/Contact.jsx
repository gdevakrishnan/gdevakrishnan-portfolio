import React, { useContext, useEffect } from 'react'
import appContext from '../context/appContext';

function Contact() {
  const { setNavState } = useContext(appContext);
  useEffect(() => {
    setNavState({
      "home": false,
      "about": false,
      "skills": false,
      "projects": false,
      "contact": true
    });
  }, []);
  return (
    <div>Contact</div>
  )
}

export default Contact