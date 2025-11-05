import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Download, Award, Briefcase, GraduationCap } from "lucide-react";

const About = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section id="about" className="section-padding bg-secondary/30">
      <div className="container-custom">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="text-center mb-16"
        >
          <motion.span
            variants={fadeInUp}
            className="inline-block px-3 py-1 text-sm font-medium text-cyan-700 bg-cyan-100 rounded-full mb-4"
          >
            About Me
          </motion.span>
          <motion.h2
            variants={fadeInUp}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            My <span className="gradient-text">Journey</span>
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="max-w-2xl mx-auto text-muted-foreground"
          >
            A passionate developer with a keen eye for design and a commitment
            to creating exceptional user experiences.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-gradient-to-r from-cyan-600/20 to-cyan-400/20 rounded-xl blur-lg"></div>
            <div className="relative overflow-hidden rounded-xl shadow-lg">
              <img
                alt="Alex working on a project"
                className="w-full h-auto rounded-xl"
                src="https://dubai.sae.edu/wp-content/uploads/sites/16/2025/04/250417_Computer-Science-Website_V1-1-840x632.jpg"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold mb-4">Who I Am</h3>
            <p className="text-muted-foreground mb-6">
              I'm a Frontend developer with over 2 years of experience building
              web applications and digital products. My journey in tech began
              with a curiosity about how things work on the web, which led me to
              pursue a degree in Computer Science.
            </p>
            <p className="text-muted-foreground mb-6">
              I specialize in creating responsive, accessible, and performant
              web applications using modern technologies. My approach combines
              technical expertise with a deep understanding of user needs to
              deliver solutions that not only work flawlessly but also provide
              exceptional user experiences.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="flex items-start">
                <div className="mr-3 p-2 bg-cyan-100 text-cyan-700 rounded-md">
                  <Award size={20} />
                </div>
                <div>
                  <h4 className="font-medium">Experience</h4>
                  <p className="text-sm text-muted-foreground">2+ Years</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="mr-3 p-2 bg-cyan-100 text-cyan-700 rounded-md">
                  <Briefcase size={20} />
                </div>
                <div>
                  <h4 className="font-medium">Projects</h4>
                  <p className="text-sm text-muted-foreground">10+ Completed</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="mr-3 p-2 bg-cyan-100 text-cyan-700 rounded-md">
                  <GraduationCap size={20} />
                </div>
                <div className="flex items-start gap-20">
                  <div className="">
                    <h4 className="font-medium">Education</h4>
                    <p className="text-sm text-muted-foreground">
                      B.Sc Computer Science & Engineering
                    </p>
                  </div>
                  <div className="flex items-start">
                    <div className="mr-3 p-2 bg-cyan-100 text-cyan-700 rounded-md">
                      <Award size={20} />
                    </div>
                    <div>
                      <h4 className="font-medium">Course Complete</h4>
                      <p className="text-sm text-muted-foreground">
                        Programming Hero
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <a href="/resume.pdf" download>
              <Button className="bg-cyan-600 hover:bg-cyan-700 text-white">
                <Download className="mr-2 h-4 w-4" /> Download Resume
              </Button>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
