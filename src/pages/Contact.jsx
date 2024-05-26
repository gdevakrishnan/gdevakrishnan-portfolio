import React, { Fragment, useContext, useEffect } from 'react'
import appContext from '../context/appContext';
import Profile from '../components/Profile';
import { FaMobileAlt } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import { FaLocationDot } from "react-icons/fa6";

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
    <Fragment>
      <section className="page contact_page">
        <h1 className="title">Contact Me</h1>
        <div className="main">
          <div className="left">
            <form>
              <input
                type="text"
                name="uname"
                id="uname"
                placeholder='Enter you name'
                autoComplete='off'
                />

              <input
                type="email"
                name="gmail"
                id="gmail"
                placeholder='Enter your email'
                autoComplete='off'
              />

              <textarea 
                name="message" 
                id="message" 
                placeholder='Enter you message'
                autoComplete='off'
              >
              </textarea>
              <input type="submit" value="Send" />
            </form>
          </div>

          <div className="right">
            <Profile />
            <table className="details">
              <tbody>
                <tr>
                  <th><h1><FaMobileAlt /></h1></th>
                  <td>+91 93842 84280</td>
                </tr>
                <tr>
                  <th><h1><CiMail /></h1></th>
                  <td>gdevakrishnan700@gmail.com</td>
                </tr>
                <tr>
                  <th><h1><FaLocationDot /></h1></th>
                  <td>
                    <p>11, Kamatchi Nagar,</p>
                    <p>Om Sakti Nagar, Kovaipudhur,</p>
                    <p>Coimbatore - 641042</p>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </Fragment>
  )
}

export default Contact