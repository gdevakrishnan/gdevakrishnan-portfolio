import React, { Fragment, useContext, useEffect } from 'react'
import appContext from '../context/appContext';
import AnimatedText from '../components/AnimatedText';

function Skills() {
  const { setNavState } = useContext(appContext);
  useEffect(() => {
    setNavState({
      "home": false,
      "about": false,
      "skills": true,
      "projects": false,
      "contact": false
    });
  }, []);

  return (
    <Fragment>
      <section className="page skills_page">
        <h1 className="title">{"my skills"}</h1>
        {/* <h1 className="title">{"<LanguagesAndTools />"}</h1> */}

        <AnimatedText />

        <div className="skills">
          <table className="stat_table">
            <tbody>
              <tr>
                <th>
                  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/c/c-original.svg" title="c" alt="c" width="40" height="40" />
                </th>
                <td>
                  Advance
                </td>
              </tr>

              <tr>
                <th>
                  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/cplusplus/cplusplus-original.svg" title="c++" alt="cplusplus" width="40" height="40" />
                </th>
                <td>
                  Intermediate
                </td>
              </tr>

              <tr>
                <th>
                  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg" title="python" alt="python" width="40" height="40" />
                </th>
                <td>
                  Intermediate
                </td>
              </tr>

              <tr>
                <th>
                  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" title="javascript" alt="javascript" width="40" height="40" />

                </th>
                <td>
                  Advance
                </td>
              </tr>

              <tr>
                <th>
                  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg" title="java" alt="java" width="40" height="40" />
                </th>
                <td>
                  Advance
                </td>
              </tr>

              <tr>
                <th>
                  <img src="https://raw.githubusercontent.com/github/explore/ba9de12f88fd08825c51928e91f1678cb5c94b26/topics/solidity/solidity.png" title="solidity" alt="solidity" width="40" height="40" />

                </th>
                <td>
                  Advance
                </td>
              </tr>
            </tbody>
          </table>

          <div className='stack'>
            <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/c/c-original.svg" title="c" alt="c" width="40" height="40" />

            <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/cplusplus/cplusplus-original.svg" title="c++" alt="cplusplus" width="40" height="40" />

            <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" title="javascript" alt="javascript" width="40" height="40" />

            <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg" title="python" alt="python" width="40" height="40" />

            <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg" title="java" alt="java" width="40" height="40" />

            <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg" title="mongodb" alt="mongodb" width="40" height="40" />

            <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg" title="express" alt="express" width="40" height="40" />

            <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" title="react" alt="react" width="40" height="40" />

            <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" title="nodejs" alt="nodejs" width="40" height="40" />

            <img src="https://raw.githubusercontent.com/github/explore/ba9de12f88fd08825c51928e91f1678cb5c94b26/topics/solidity/solidity.png" title="solidity" alt="solidity" width="40" height="40" />

            <img src="https://downloads.marketplace.jetbrains.com/files/18551/453442/icon/pluginIcon.png" title="hardhat" alt="hardhat" width="40" height="40" />

            <img src="https://seeklogo.com/images/E/ethers-logo-D5B86204D8-seeklogo.com.png" title="etherjs" alt="etherjs" width="atuo" height="30" />

            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/MetaMask_Fox.svg/2048px-MetaMask_Fox.svg.png " title="metamask" alt="metamask" width="40" height="40" />

            <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" title="css3" alt="css3" width="40" height="40" />


            <img src="https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg" title="firebase" alt="firebase" width="40" height="40" />

            <img src="https://www.vectorlogo.zone/logos/pocoo_flask/pocoo_flask-icon.svg" title="flask" alt="flask" width="40" height="40" />

            <img src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg" title="git" alt="git" width="40" height="40" />

            <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" title="html5" alt="html5" width="40" height="40" />

            <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg" title="mysql" alt="mysql" width="40" height="40" />

            <img src="https://reactnative.dev/img/header_logo.svg" title="reactnative" alt="reactnative" width="40" height="40" />

            <img src="https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg" title="tailwind" alt="tailwind" width="40" height="40" />
          </div>
        </div>
      </section>
    </Fragment>
  )
}

export default Skills