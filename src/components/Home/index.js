// src/pages/Home.js
import React from 'react';
import { motion } from 'framer-motion';
import './index.css';

const Home = () => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="home"
  >
      <div className='main-container'>
            <div className="container">
            <div className="content">
                <h1 className="heading">
                    Full Stack Developer
                </h1>
                <p className="description">
                Full-Stack Developer specializing in the MERN stack (MongoDB, Express.js, React, Node.js), crafting dynamic, high-performance web applications with seamless user experiences and robust server-side functionality.
                </p>
            </div>
            <div className='image-container'>
                <img src='https://i.postimg.cc/Z54cNrtX/IMG-20210725-181307.jpg' alt='logo' className='image'/>
                <h1 className='name'>Rahul Gudipati</h1>
            </div>
        </div>
        </div>
  </motion.div>
);

export default Home;
