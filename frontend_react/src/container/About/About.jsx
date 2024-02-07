import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion'
import { images } from '../../constants';
import { urlFor, client } from '../../client';
import { AppWrap } from '../../wrapper';
import './About.scss';

const About = () => {
  const [abouts, setAbouts] = useState([]);
  useEffect(() => {
    const query = '*[_type == "abouts"]';
    client.fetch(query)
    .then((data) => setAbouts(data))
  }, []);

  return (
    <>
      <h2 className="head-text"> About<span> Me</span></h2>
      <div className="app__profiles">
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity:1 }}
            whileHover={{ scale:1.1 }}
            transition={{ duration:0.5, type:'tween' }}
            className="app__profile-item"
            key={ about.title + index }
          >
            <img src={ urlFor(about.imgUrl) } alt ={ about.title } />
            <h2 className="bold-text" style = {{marginTop:20}}> {about.title}</h2>
            <p className="p-text" style = {{marginTop:10}}> {about.description}</p>
          </motion.div>
        ))}
      </div>  

      <div className="app__about app__flex">
        <motion.div
          whileInView={{ opacity: [0, 1] }}
          transition={{ duration: 0.5, delayChildren: 0.5 }}
          className="app__about-img"
        >
          <img src={images.ME} alt="me_img" />
        </motion.div> 

        <motion.div
          whileInView={{ x: [-100, 0], opacity: [0, 1] }}
          transition={{ duration: 0.5 }}
          className="app__about-info"
        >
          <div className="app__about-badge">
            <div className="app__flex">
              <div style={{ marginLeft: 0 }}>
                <p>
                  Hello! This is Vidhi Sahai, a FullStack Web Developer and Designer. I graduatd from Indian Institute of Technology, Guwahati with a Bachelor's degree in Electronics and Communication Engineering. I take pride in creating custom, highly-responsive websites using ReactJS, NodeJS, Sanity. Languages I prefer working with include Python and JavaScript.
                  <br />
                  <br />
                  In my spare time, I enjoy creating beautiful mandalas. This hobby has given me invaluable lessons into problem-solving, consistency, honesty, and the ability to pay attention to even the smallest details. I apply these traits to my work as a software developer, tackling each assignment with the same determination and focus that I use on the Mandala paper.
                </p>
                <br />
                <button><a href="#contact" className='btn btn-primary'>Let's Talk</a> </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  )
}

export default AppWrap(
  About,
  'about',
  );
