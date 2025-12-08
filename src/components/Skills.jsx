import React from "react";
import { motion } from "framer-motion";

const Skills = ({config})=>{
  return (
    <section className="container" id="skills">
      <h2>Skills</h2>
      <motion.div initial={{opacity:0}} whileInView={{opacity:1}} className="card" style={{display:"flex",flexDirection:"column",gap:12,alignItems:"center"}}>
        <div className="skills-grid">
          {config.skills.map((s,i)=>(
            <motion.div key={i} whileHover={{y:-6}} className="skill-pill">{s}</motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default Skills;