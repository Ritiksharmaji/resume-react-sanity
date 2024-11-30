import React from 'react';
import { BsTwitter, BsInstagram, BsLinkedin } from 'react-icons/bs';
import { FaFacebookF, FaCode } from 'react-icons/fa';

const SocialMedia = () => (
  <div className="app__social">
    <div>
      <a href="https://instagram.com/ritikro3211" target="_blank" rel="noopener noreferrer">
        <BsInstagram  />
      </a>
    </div>
    <div>
      <a href="https://facebook.com/profile.php?id=100028110709919" target="_blank" rel="noopener noreferrer">
        <FaFacebookF />
      </a>
    </div>
    <div>
      <a href="https://twitter.com/Ritiksh98087502" target="_blank" rel="noopener noreferrer">
        <BsTwitter />
      </a>
    </div>
    <div>
      <a href="https://linkedin.com/in/ritiksharmaji" target="_blank" rel="noopener noreferrer">
        <BsLinkedin />
      </a>
    </div>
    <div>
      <a href="https://www.codechef.com/users/ritiksharma55" target="_blank" rel="noopener noreferrer">
        <FaCode />
      </a>
    </div>
    
  </div>
);

export default SocialMedia;
