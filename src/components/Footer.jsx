import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";


const Footer = ({config})=>{
  return (
    <footer>
      <div style={{maxWidth:1100,margin:"auto"}}>
        <div style={{marginBottom:6}}>© {new Date().getFullYear()} {config.name} — Built with ❤️</div>
        <div style={{color:"var(--muted)"}}>Follow:  

          <a style={{ fontSize: "24px", color: "var(--muted)" }} href="https://github.com/rashidhusain01" target="_blank" rel="noopener noreferrer"><FaGithub /></a>· 


          <a style={{ fontSize: "24px", marginRight: "15px", color: "var(--muted)" }} href="https://www.linkedin.com/in/rashid-husain-16a0b522a" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a></div>
      </div>
    </footer>
  )
}

export default Footer;