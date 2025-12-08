import React from "react";
import { motion } from "framer-motion";

const Projects = ({config})=>{
  return (
    <section className="container" id="projects">
      <h2>Projects</h2>
      <div className="projects-grid">
        {config.projects.map((p,i)=>(
          <motion.div key={i} initial={{opacity:0,y:8}} whileInView={{opacity:1,y:0}} viewport={{once:true}} className="project-card">
            <h3>{p.title}</h3>
            <p>{p.desc}</p>
            <div style={{display:"flex",gap:8}}>
              <a className="cta" href={p.link} target="_blank" rel="noreferrer">View</a>
              <a style={{alignSelf:"center",marginLeft:8,color:"var(--muted)"}} href={p.link} target="_blank" rel="noreferrer">Source</a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Projects;