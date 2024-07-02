// src/components/Hero.js
import React from 'react';
import { motion } from 'framer-motion';
import './index.css';

const Hero = () => (
  <motion.div
    className="hero"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1 }}
  >
    <h1>Welcome to My Portfolio</h1>
    <p>Explore my work and projects</p>
  </motion.div>
);

export default Hero;
