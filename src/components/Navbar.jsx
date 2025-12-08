import React from "react";
import myPhoto from "../assets/myphoto.jpg";
import { motion } from "framer-motion";

const Navbar = ({theme, setTheme})=>{
  return (
    <nav>
      <div className="brand">
        
        {/* <div className="logo">R</div> */}
        <img 
         src={myPhoto}
         alt="Profile"
         style={{
        width: 45,
        height: 45,
        borderRadius: "50%",
        objectFit: "cover"
        }}
        />

        <div>
          <div style={{fontWeight:800}}>Rashid Husain</div>
          <div style={{fontSize:12,color:"var(--muted)"}}>Web Developer</div>
        </div>
      </div>

      <div className="nav-links">
        <a href="#projects">Projects</a>
        <a href="#skills">Skills</a>
        <a href="#contact">Contact</a>

        <motion.button whileTap={{scale:0.95}} onClick={()=> setTheme(theme==="dark"?"light":"dark")} style={{padding:"8px 12px",borderRadius:10,border:"none",cursor:"pointer",fontWeight:700,background:"var(--glass)",color:"var(--text)"}}>
          {theme==="dark" ? "Light" : "Dark"} Mode
        </motion.button>
      </div>
    </nav>
  )
}

export default Navbar;