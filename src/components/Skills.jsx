import React from "react";
import { motion } from "framer-motion";

const Skills = ({ config }) => {
  const categories = [
    { title: "💻 Frontend", items: config.skills.frontend },
    { title: "⚙️ Backend", items: config.skills.backend },
    { title: "🗄️ Database", items: config.skills.database },
    { title: "🛠️ Tools", items: config.skills.tools },
    { title: "🤖 AI & Learning", items: config.skills.ai },
  ];

  return (
    <section className="container" id="skills">
      <h2>Technical Skills</h2>

      <motion.div
        className="card"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        {categories.map((category, index) => (
          <div className="skill-category" key={index}>
            <h3>{category.title}</h3>

            <div className="skills-grid">
              {category.items.map((skill, i) => (
                <motion.div
                  key={i}
                  className="skill-pill"
                  whileHover={{ y: -5, scale: 1.05 }}
                >
                  {skill}
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </motion.div>
    </section>
  );
};

export default Skills;