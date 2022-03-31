import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faYoutube,
    faFacebook,
    faTwitter,
    faInstagram,
    faLinkedin,
    faGithub
  } from "@fortawesome/free-brands-svg-icons";

export default function SocialFollow() {
  return (
    <div class="social-container">
      <a className="mail social"  target="blank" href="mailto:rahulnor@gmail.com"><h1 >Connect with Me!</h1></a><br/>
      <a href="https://www.linkedin.com/in/rahul-noronha-77a020189/" target="blank"
        className="linkedin social">
      <FontAwesomeIcon icon={faLinkedin} size="4x"/>
      </a> <br/><br/> 
      <a href="https://github.com/rahulnoronha" target="blank"
        className="github social">
      <FontAwesomeIcon icon={faGithub} size="4x"/>
      </a> <br/><br/> 
      <a href="https://www.youtube.com/channel/UChB1VE3VaXUxq4xcHiz679w" target="blank"
        className="youtube social">
        <FontAwesomeIcon icon={faYoutube} size="4x" />
      </a> <br/><br/> 
      <a href="https://twitter.com/rahulnoronha" target="blank"
      className="twitter social">
        <FontAwesomeIcon icon={faTwitter} size="4x" />
      </a> <br/><br/> 
</div>
  );
}