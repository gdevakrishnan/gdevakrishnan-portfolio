import React, { Fragment, useState } from 'react'
import Routers from './routers/Routers'
import appContext from './context/appContext'
import Footer from './components/Footer'

function App() {
  const initialState = {
    "home": true,
    "about": false,
    "skills": false,
    "projects": false,
    "contact": false
  };
  const [navState, setNavState] = useState(initialState);

  const context = {
    navState,
    setNavState
  };

  return (
    <Fragment>
      <appContext.Provider value={context}>
        <Routers />
        <Footer />
      </appContext.Provider>
    </Fragment>
  )
}

export default App
