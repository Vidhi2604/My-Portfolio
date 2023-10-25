import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion'

import { images } from '../../constants';

import './About.scss';

import { urlFor, client } from '../../client';

import { AppWrap } from '../../wrapper';




const About = () => {

  const [abouts, setAbouts] = useState([]);

useEffect(() => {
  const query = '*[_type == "abouts"]';

  client.fetch(query)
  .then((data) => setAbouts(data)
    )
 
}, []);


  return (
    <>
      <h2 className="head-text">
        Get to know 
        <span> About Me</span>
      </h2>

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

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-img">
            <img src={images.ME} alt="About Image" />
            
          </div>
        </div>
        <div className="about__content">
            <p>
              Hello! This is Vidhi Sahai, a FullStack Web Developer and Designer. I graduatd from Indian Institute of Technology, Guwahati with a Bachelor's degree in Electronics and Communication Engineering. I take pride in creating custom, highly-responsive websites and mobile applications using ReactJS, NodeJS, Sanity. Languages I prefer working with include Python and JavaScript.
            <br />
            <br />
              In my spare time, I enjoy creating beautiful mandala paintings. This hobby has given me invaluable lessons into problem-solving, consistency, honesty, and the ability to pay attention to even the smallest details. I apply these traits to my work as a software developer, tackling each assignment with the same determination and focus that I use on the Mandala paper.
            </p>
            <button><a href="#contact" className='btn btn-primary'>Let's Talk</a> </button>
        </div>
      </div>
    </>
  )}

export default AppWrap(
  About,
  'about',
  );