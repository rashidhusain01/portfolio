import React, {useState} from "react";
import { motion } from "framer-motion";

const Contact = ({config})=>{
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = (e)=>{
    e.preventDefault();
    // for demo purposes we just show a success state
    setSubmitted(true);
    setTimeout(()=> setSubmitted(false), 3000);
  }
  return (
    <section className="container" id="contact">
      <h2>Contact</h2>
      <motion.div className="card" initial={{opacity:0}} whileInView={{opacity:1}} viewport={{once:true}}>
        <form onSubmit={handleSubmit}>
          <input placeholder="Your name" required />
          <input placeholder="Your email" type="email" required />
          <textarea placeholder="Message" rows="5" required></textarea>
          <button className="cta" type="submit">{submitted ? "Sent ✓" : "Send Message"}</button>
        </form>
        <div style={{marginTop:12,color:"var(--muted)"}}>Or email me at <a href={"mailto:"+config.email} style={{color:"var(--accent)"}}>{config.email}</a></div>
      </motion.div>
    </section>
  )
}

export default Contact;