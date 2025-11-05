import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, ChevronDown, ChevronUp } from "lucide-react";

const projectsData = [
  {
    id: 1,
    title: "Calculator",

    image: "https://i.ibb.co.com/C319440C/Screenshot-258.png",
    technologies: ["HTML5", "Vercel", "Tailwind CSS"],
    liveLink: "https://apon2-cse.github.io/CodeAlpha_Build-a-calculator/",
    githubLink: "https://github.com/Apon2-CSE/CodeAlpha_Build-a-calculator.git",
  },
  {
    id: 2,
    title: "Image Gallery",

    image: "https://i.ibb.co.com/Df0VqXTs/Screenshot-259.png",
    technologies: ["HTML5", "CSS", "Javascript", "Tailwind CSS"],
    liveLink: "https://apon2-cse.github.io/CodeAlpha_Image-Gallery/",
    githubLink: "https://github.com/Apon2-CSE/CodeAlpha_Image-Gallery.git",
  },
  {
    id: 3,
    title: "Green Earth",

    image: "https://i.ibb.co.com/wFYZsJnw/Screenshot-261.png",
    technologies: ["HTML5", "CSS", "Javascript", "Tailwind CSS"],
    liveLink: "https://apon2-cse.github.io/Green-Earth-Assign-6/",
    githubLink: "https://github.com/Apon2-CSE/Green-Earth-Assign-6.git",
  },
  {
    id: 4,
    title: "Emergency Service Web",

    image: "https://i.ibb.co.com/chQBMrDG/Screenshot-263.png",
    technologies: ["HTML5", "CSS", "Javascript", "Tailwind CSS"],
    liveLink: "https://apon2-cse.github.io/Emergency-Service-Web/",
    githubLink: "https://github.com/Apon2-CSE/Emergency-Service-Web.git",
  },
  {
    id: 5,
    title: "BMI Calculator",

    image: "https://i.ibb.co.com/1BZrdT6/Screenshot-265.png",
    technologies: ["HTML5", "CSS", "Javascript", "Tailwind CSS"],
    liveLink: "https://apon2-cse.github.io/BMI-Calculator-JS/",
    githubLink: "https://github.com/Apon2-CSE/BMI-Calculator-JS.git",
  },
  {
    id: 6,
    title: "Own Porfolio",

    image: "https://i.ibb.co.com/m5XJD7Xv/Screenshot-264.png",
    technologies: ["HTML5", "CSS", "Javascript", "Tailwind CSS"],
    liveLink: "https://apon2-cse.github.io/my-website/",
    githubLink: "https://github.com/Apon2-CSE/my-website.git",
  },
  {
    id: 7,
    title: "E-commerce Platform",

    image: "https://i.ibb.co.com/WW6wjBdp/Screenshot-268.png",
    technologies: ["HTML5", "CSS", "Javascript", "Tailwind CSS"],
    liveLink:
      "https://apon2-cse.github.io/Talukder-Accesories-Ecommerce-website/",
    githubLink:
      "https://github.com/Apon2-CSE/Talukder-Accesories-Ecommerce-website.git",
  },
  {
    id: 8,
    title: "English Janala",

    image: "https://i.ibb.co.com/LDGP4V6m/Screenshot-262.png",
    technologies: ["HTML5", "CSS", "Javascript", "Tailwind CSS"],
    liveLink: "https://apon2-cse.github.io/English-Course-Website/",
    githubLink: "https://github.com/Apon2-CSE/English-Course-Website.git",
  },
  {
    id: 9,
    title: "Apps Platform",

    image: "https://i.ibb.co.com/3YVD5Vv2/Screenshot-260.png",
    technologies: ["React", "Daisy UI", "Tailwind CSS", "Express JS"],
    liveLink: "https://pet-adoption-f71aa.web.app/",
    githubLink: "https://github.com/Auntim/pet-adoption-A12-client",
  },
];

const Projects = () => {
  const [openProject, setOpenProject] = useState(null);

  const toggleProject = (id) => {
    // যদি একই project already open থাকে, close হবে, নাহলে নতুন open হবে
    setOpenProject(openProject === id ? null : id);
  };

  const container = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const item = {
    hidden: { y: 30, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6 } },
  };

  return (
    <section
      id="projects"
      className="section-padding relative overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, rgba(0,255,255,0.08), rgba(0,100,255,0.08))",
        backdropFilter: "blur(4px)",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-cyan-400/10 to-transparent blur-3xl"></div>

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Featured{" "}
            <span className="bg-gradient-to-r from-cyan-300 to-cyan-500 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className="max-w-2xl mx-auto text-gray-400">
            Click on a project to expand details.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
        >
          {projectsData.map((project) => (
            <motion.div
              key={project.id}
              variants={item}
              className="group relative bg-white/5 border border-cyan-400/30 rounded-2xl overflow-hidden shadow-lg hover:shadow-cyan-500/30 transition-all duration-300 hover:-translate-y-2 backdrop-blur-lg"
            >
              <div
                className="relative overflow-hidden h-52 cursor-pointer"
                onClick={() => toggleProject(project.id)}
              >
                <img
                  alt={project.title}
                  src={project.image}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-3 left-4 text-white font-semibold flex items-center gap-2">
                  {openProject === project.id ? (
                    <>
                      Hide Details <ChevronUp size={18} />
                    </>
                  ) : (
                    <>
                      Show Details <ChevronDown size={18} />
                    </>
                  )}
                </div>
              </div>

              {/* Toggle Details */}
              {openProject === project.id && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.4 }}
                  className="p-6"
                >
                  <h3 className="text-xl font-semibold text-cyan-300 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 text-sm mb-4">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 text-xs font-medium bg-cyan-900/30 text-cyan-200 rounded-full border border-cyan-500/40"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-3">
                    <Button
                      size="sm"
                      asChild
                      className="bg-cyan-500 hover:bg-cyan-400 text-white border-0 shadow-cyan-500/40 shadow-md"
                    >
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
                      </a>
                    </Button>

                    <Button
                      variant="outline"
                      size="sm"
                      asChild
                      className="border-cyan-500 text-cyan-400 hover:bg-cyan-500/10"
                    >
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="mr-2 h-4 w-4" /> Code
                      </a>
                    </Button>
                  </div>
                </motion.div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
