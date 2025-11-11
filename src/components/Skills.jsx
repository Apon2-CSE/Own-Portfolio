import React from "react";
import { motion } from "framer-motion";
import { Code, Layout, Database, Server, Figma, LineChart } from "lucide-react";

const skillsCategories = [
  {
    icon: <Database className="h-6 w-6" />,
    title: "Database Management",
    skills: ["MongoDB", "Firebase", "Git"],
  },
  {
    icon: <Server className="h-6 w-6" />,
    title: "Backend Development",
    skills: ["Node.js", "Express", "RESTful APIs", "Authentication"],
  },
  {
    icon: <Layout className="h-6 w-6" />,
    title: "UI/UX Design",
    skills: ["User Research", "Design Systems", "User Testing"],
  },
  {
    icon: <LineChart className="h-6 w-6" />,
    title: "Other Skills",
    skills: ["Project Management", "Analytics", "Technical Writing"],
  },
  {
    icon: <Figma className="h-6 w-6" />,
    title: "Design Tools",
    skills: ["Figma", "Photoshop", "Illustrator"],
  },
  {
    icon: <Code className="h-6 w-6" />,
    title: "Frontend Development",
    skills: ["HTML/CSS", "JavaScript", "React", "Tailwind CSS", "Next.js"],
  },
];

const Skills = () => {
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section
      id="skills"
      className="relative section-padding overflow-hidden transition-colors duration-500"
      style={{
        background:
          "linear-gradient(120deg, rgba(0,255,255,0.05), rgba(0,100,255,0.08), rgba(0,255,200,0.05))",
        backgroundSize: "300% 300%",
        animation: "cyanMove 8s ease infinite",
      }}
    >
      {/* Gradient animation */}
      <style>
        {`
          @keyframes cyanMove {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
        `}
      </style>

      <div className="container-custom relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-3 py-1 text-sm font-medium bg-gradient-to-r from-cyan-400 to-blue-500 text-white rounded-full mb-4 animate-pulse">
            My Expertise
          </span>

          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800 dark:text-white">
            Technical{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent animate-gradient">
              Skills
            </span>
          </h2>

          <p className="max-w-2xl mx-auto text-gray-700 dark:text-gray-300">
            A showcase of my technical stack and creative development skills.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {skillsCategories.map((category, index) => (
            <motion.div
              key={index}
              variants={item}
              className="bg-white/70 dark:bg-white/5 border border-cyan-400/20 rounded-xl p-6 shadow-lg backdrop-blur-md hover:border-cyan-400/60 hover:shadow-cyan-500/30 transition-all duration-300"
            >
              <div className="p-3 w-fit rounded-lg mb-4 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 animate-gradient text-white shadow-md">
                {category.icon}
              </div>

              <h3 className="text-xl font-bold mb-4 text-gray-800 dark:text-cyan-300">
                {category.title}
              </h3>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-3 py-1 text-sm rounded-full bg-cyan-100 dark:bg-cyan-900/30 text-gray-800 dark:text-cyan-100 border border-cyan-500/30"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-16 p-8 bg-white/70 dark:bg-white/5 rounded-xl shadow-lg border border-cyan-400/20 backdrop-blur-md"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <h3 className="text-4xl font-bold text-cyan-600 dark:text-cyan-400 mb-2">
                2+
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                2 Years of Experience
              </p>
            </div>
            <div>
              <h3 className="text-4xl font-bold text-cyan-600 dark:text-cyan-400 mb-2">
                10+
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                Projects Completed
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-cyan-500 dark:text-cyan-300 mb-2">
                Continuous Growth
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                Always Learning
              </p>
            </div>
            <div>
              <h3 className="text-4xl font-bold text-cyan-600 dark:text-cyan-400 mb-2">
                8+
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                Technologies Mastered
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
