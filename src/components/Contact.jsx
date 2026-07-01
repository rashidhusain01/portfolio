import React, { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

const Contact = ({ config }) => {
  const [submitted, setSubmitted] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const SERVICE_ID = "service_ailzoz9";
  const TEMPLATE_ID = "template_ih3if1q";
  const PUBLIC_KEY = "m7u5Q-G_bhBPxn6x0";



  const handleSubmit = async (e) => {
  e.preventDefault();

  if (submitted) return;

  setSubmitted(true);

  try {
    await emailjs.send(
      SERVICE_ID,
      TEMPLATE_ID,
      {
        name: name,
        email: email,
        message: message,
      },
      PUBLIC_KEY
    );

    setName("");
    setEmail("");
    setMessage("");

    alert("Message sent successfully!");
  } catch (error) {
    console.error(error);
    alert("Failed to send message.");
  }

  setTimeout(() => setSubmitted(false), 2000);
};

  return (
    <section className="container" id="contact">
      <h2>Contact</h2>

      <motion.div
        className="card"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <form onSubmit={handleSubmit}>
          <input
            placeholder="Your name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <input
            placeholder="Your email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <textarea
            placeholder="Message"
            rows="5"
            required
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>

          <button className="cta" type="submit" disabled={submitted}>
            {submitted ? "Sent ✓" : "Send Message"}
          </button>
        </form>

        <div style={{ marginTop: 12, color: "var(--muted)" }}>
          Or email me at{" "}
          <a
            href={"mailto:" + config.email}
            style={{ color: "var(--accent)" }}
          >
            {config.email}
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
