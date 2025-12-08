import React from "react";
import { motion } from "framer-motion";
import myPhoto from "../assets/myphoto.jpg";


const Hero = ({config})=>{
  return (
    <section className="container hero" id="hero">
      <div className="hero-left">
        <motion.div initial={{opacity:0,y:10}} animate={{opacity:1,y:0}} transition={{duration:0.6}}>
          <h1>Hi, I'm <span style={{color:"var(--accent)"}}>{config.name}</span></h1>
          <p className="lead">{config.bio}</p>
          <div style={{marginTop:18}}>
            <a className="cta" href="#projects">View Projects</a>
            <a style={{marginLeft:12}} className="cta" href={config.socials.github} target="_blank" rel="noreferrer">GitHub</a>
          </div>
        </motion.div>
      </div>

      <div className="hero-right">
        <motion.div initial={{scale:0.95,opacity:0}} animate={{scale:1,opacity:1}} transition={{duration:0.6}} className="card">
          {/* My Photo */}
          <img 
  src={myPhoto}
  alt="Profile"
  style={{
    width: 220,
    height: 220,
    borderRadius: 12,
    objectFit: "cover",
    boxShadow: "0 8px 25px rgba(0,0,0,0.2)"
  }}
/>

          <div style={{marginTop:12, textAlign:"center"}}>
            <div style={{fontWeight:800}}>{config.name}</div>
            <div style={{color:"var(--muted)", fontSize:13}}>{config.title}</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero;