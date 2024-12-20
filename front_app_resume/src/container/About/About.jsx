import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {images} from '../../constants'
import './About.scss';
import { urlFor, client } from '../../client';
import { AppWrap, MotionWrap } from '../../wrapper';

// const abouts = [
//   {title: 'web developer', description: 'I am good in ',imgUrl: images.about01 },
//   {title: 'web desing ', description: 'I am good in ', imgUrl: images.about02},
//   {title: 'java developer', description: 'I am good in ', imgUrl: images.about03},
 
// ]
const About = () => {
  const [abouts, setAbouts] = useState([]);

  useEffect(() => {
    const query = '*[_type == "abouts"]';

    client.fetch(query).then((data) => {
      setAbouts(data);
    });
  }, []);

  return (
    <>
      <h2 className="head-text">I Know that <span>Good Design</span> <br />means  <span>Good Business</span></h2>

      <div className="app__profiles">
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: 'tween' }}
            className="app__profile-item"
            key={about.title + index}
          >
            {/* <img src={about.imgUrl} alt={about.title} /> */}
            <img src={urlFor(about.imgUrl)} alt={about.title} />
            <h2 className="bold-text" style={{ marginTop: 20 }}>{about.title}</h2>
            <p className="p-text" style={{ marginTop: 10 }}>{about.description}</p>
          </motion.div>
        ))}
      </div>
    </>
  );
};

// export default About;
export default AppWrap(
  MotionWrap(About, 'app__about'),
  'about',
  'app__whitebg',
);