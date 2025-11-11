import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Github, Linkedin, Twitter } from "lucide-react";
import image1 from "../assets/images/Aps.png";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center hero-pattern section-padding pt-24"
    >
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="order-2 lg:order-1"
          >
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-block px-4 py-1.5 mb-4 text-sm font-medium rounded-full bg-cyan-100 text-cyan-700"
            >
              MERN Stack Developer
            </motion.span>

            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
            >
              Hi, I'm{" "}
              <span className="bg-gradient-to-r from-cyan-400 via-teal-400 to-cyan-600 text-transparent bg-clip-text">
                Apon Talukder
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-lg text-muted-foreground mb-8 max-w-lg"
            >
              I am a MERN Stack Developer from Bangladesh 🇧🇩. I specialize in
              building responsive, interactive web applications using React.JS,
              Node.js, Express, and MongoDB. I love crafting elegant interfaces
              and solving real-world problems with code.
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex flex-wrap gap-4"
            >
              <Button
                size="lg"
                className="bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-600 hover:to-teal-600 text-white shadow-lg"
                onClick={() =>
                  document
                    .querySelector("#projects")
                    .scrollIntoView({ behavior: "smooth" })
                }
              >
                View My Works <ArrowRight className="ml-2 h-4 w-4" />
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="border-cyan-500 text-cyan-600 hover:bg-cyan-50"
                onClick={() =>
                  document
                    .querySelector("#contact")
                    .scrollIntoView({ behavior: "smooth" })
                }
              >
                Contact Me
              </Button>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex items-center gap-4 mt-8"
            >
              <a
                href="https://github.com/Apon2-CSE"
                className="text-muted-foreground hover:text-cyan-600 transition-colors"
              >
                <Github className="h-6 w-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/apon-talukder-570332337//"
                className="text-muted-foreground hover:text-cyan-600 transition-colors"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-cyan-600 transition-colors"
              >
                <Twitter className="h-6 w-6" />
              </a>
            </motion.div>
          </motion.div>

          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="order-1 lg:order-2 flex justify-center"
          >
            <div className="relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-400 to-teal-500 rounded-full blur opacity-70 mt-6 md:mt-0"></div>
              <div className="relative overflow-hidden rounded-full border-4 border-white shadow-lg">
                <img
                  alt="Professional portrait of Apon Talukder"
                  className="w-64 h-64 md:w-[400px] md:h-[400px] object-cover"
                  src={image1}
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
