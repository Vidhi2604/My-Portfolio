import React from 'react';
import { BsLinkedin, BsGithub, BsTwitter, BsInstagram } from 'react-icons/bs';
import { HiMail } from 'react-icons/hi';

const SocialMedia = () => (
  <div className="app__social">
    <div>
    <a href="https://www.linkedin.com/in/vidhi-sahai/">
      <BsLinkedin/>
    </a>
    </div>
    <div>
    <a href="https://github.com/Vidhi2604">
        <BsGithub/>
    </a>
    </div>
    <div>
    <a href="http://www.instagram.com/sahaividhi">
      <BsInstagram />
    </a>
    </div>
    <div>
    <a href="https://twitter.com/SahaiVidhi">
      <BsTwitter />
    </a>
    </div>
    
    <div>
    <a href="mailto:vidhisahai26april@gmail.com">
      <HiMail/>
    </a>
    </div>
  </div>
);

export default SocialMedia;