import React from "react";
import { motion } from "framer-motion";

const About = ({config})=>{
  return (
    <section className="container" id="about">
      <motion.div initial={{opacity:0,y:10}} whileInView={{opacity:1,y:0}} viewport={{once:true}} className="card">
        <h2>About</h2>
        <p style={{color:"var(--muted)"}}>{config.bio} I specialize in front-end development, performance and accessibility.</p>
      </motion.div>
    </section>
  )
}

export default About;