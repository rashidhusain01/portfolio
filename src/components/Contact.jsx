import React, { useState } from "react";
import { motion } from "framer-motion";

const Contact = ({ config }) => {
  const [submitted, setSubmitted] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  // ✔️ Correct Backend URL
  const BACKEND_URL = "https://backend-3frb.onrender.com/contact/send";

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitted(true);

    try {
      const res = await fetch(BACKEND_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });

      const data = await res.json();

      if (data.success) {
        alert("Message sent successfully!");
        setName("");
        setEmail("");
        setMessage("");
      } else {
        alert("Failed to send message");
      }
    } catch (error) {
      alert("Server error, please try again later");
    }

    setTimeout(() => setSubmitted(false), 2500);
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

          <button className="cta" type="submit">
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
