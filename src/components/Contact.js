import React from 'react';
import { FaTwitterSquare, FaLinkedin, FaDev, FaYoutube } from 'react-icons/fa'
import { DiGithubBadge } from 'react-icons/di'
import { FiSend } from 'react-icons/fi'
import HeadShot from '../images/profilepic.png'

const Contact = () => {

    return <section className="contact" id="contact">
      <h2>Connect with Me</h2>
      <div className="headshot">
        <img src={HeadShot} alt='head shot' />
      </div>
      <div className="socials-container">
  
        <a href="https://twitter.com/T_Bhamidipati">
          <div>
            <FaTwitterSquare />
          </div>
        </a>
        <a href="https://github.com/tbhamidipati">
          <div>
            <DiGithubBadge />
          </div>
        </a>
        <a href="https://www.linkedin.com/in/tanuja-bhamidipati/">
          <div>
            <FaLinkedin />
          </div>
        </a>
      </div>
  
      <form action="https://formspree.io/f/mbjpqaqq" method="POST">
      <h3>Send me an Email</h3>
        <input name="name" type="text" placeholder="Your Name"></input>
        <input name="_replyto" type="email" placeholder="Your Email Address"></input>
        <textarea id="message" name="Your Message" placeholder="Your Message"></textarea>
        <button type="submit"><FiSend /> SUBMIT</button>
      </form>
    </section>
  }
  
  export default Contact