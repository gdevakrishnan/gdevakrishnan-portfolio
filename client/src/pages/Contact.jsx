import React, { Fragment, useContext, useEffect, useState } from 'react';
import appContext from '../context/appContext';
import Profile from '../components/Profile';
import { FaMobileAlt } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import { FaLocationDot } from "react-icons/fa6";
import validator from 'validator'
import { sendEmail } from '../services/serviceWorker';

function Contact() {
  const { setNavState } = useContext(appContext);
  const [msg, setMsg] = useState("Hello this is my message");
  const [formData, setFormData] = useState({
    name: '',
    gmail: '',
    message: ''
  });

  useEffect(() => {
    setNavState({
      home: false,
      about: false,
      skills: false,
      projects: false,
      contact: true
    });
  }, [setNavState]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name.trim() === "" || formData.gmail.trim() === "" || formData.message.trim() === "") {
      setMsg("Enter all the fields");
      setTimeout(() => {
        setMsg("");
      }, 5000);
      return;
    }

    if (!validator.isEmail(formData.gmail)) {
      setMsg("Invalid Email");
      setTimeout(() => {
        setMsg("");
      }, 5000);
      return;
    }

    sendEmail(formData)
      .then((response) => {
        setMsg(response.message);
        setTimeout(() => {
          setMsg("");
        }, 5000);
      })
      .catch((e) => console.log(e.message));
  }

  return (
    <Fragment>
      <section className="page contact_page">
        <h1 className="title">Contact Me</h1>
        <div className="main">
          <div className="left">
            <form onSubmit={(e) => handleSubmit(e)}>
              {
                (msg.trim() !== "") ? <h1 className="msg">{msg}</h1> : null
              }
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Enter your name"
                autoComplete="off"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, [e.target.id]: e.target.value })}
              />
              <input
                type="email"
                name="gmail"
                id="gmail"
                placeholder="Enter your email"
                autoComplete="off"
                value={formData.gmail}
                onChange={(e) => setFormData({ ...formData, [e.target.id]: e.target.value })}
              />
              <textarea
                name="message"
                id="message"
                placeholder="Enter your message"
                autoComplete="off"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, [e.target.id]: e.target.value })}
              ></textarea>
              <input type="submit" value="Send" onClick={(e) => handleSubmit(e)} />
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
  );
}

export default Contact;
