import React, { Fragment, useContext, useEffect, useState } from 'react';
import appContext from '../context/appContext';
import Profile from '../components/Profile';
import { FaMobileAlt } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import { FaLocationDot } from "react-icons/fa6";
import emailjs from 'emailjs-com';

function Contact() {
  const { setNavState } = useContext(appContext);
  const [formData, setFormData] = useState({
    uname: '',
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send(
      process.env.REACT_APP_EMAILJS_SERVICE_ID,
      process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
      formData,
      process.env.REACT_APP_EMAILJS_PUBLIC_KEY
    ).then((response) => {
      console.log('SUCCESS!', response.status, response.text);
      alert('Message sent successfully!');
    }, (err) => {
      console.error('FAILED...', err);
      alert('Failed to send message. Please try again.');
    });

    setFormData({
      uname: '',
      gmail: '',
      message: ''
    });
  };

  return (
    <Fragment>
      <section className="page contact_page">
        <h1 className="title">Contact Me</h1>
        <div className="main">
          <div className="left">
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="uname"
                id="uname"
                placeholder="Enter your name"
                autoComplete="off"
                value={formData.uname}
                onChange={handleChange}
              />
              <input
                type="email"
                name="gmail"
                id="gmail"
                placeholder="Enter your email"
                autoComplete="off"
                value={formData.gmail}
                onChange={handleChange}
              />
              <textarea
                name="message"
                id="message"
                placeholder="Enter your message"
                autoComplete="off"
                value={formData.message}
                onChange={handleChange}
              ></textarea>
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
  );
}

export default Contact;
