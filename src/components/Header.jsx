import React, { useState, useEffect, useContext } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Menu, X, Sun, Moon, Download } from "lucide-react";
import { ThemeContext } from "@/App";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" },
];

const Header = ({ scrollY }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const { theme, toggleTheme } = useContext(ThemeContext);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section[id]");
      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute("id");

        if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
          setActiveSection(sectionId);
        } else if (
          scrollY <
          document.querySelector("#home").offsetHeight - 100
        ) {
          setActiveSection("home");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrollY]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrollY > 50
          ? "bg-background/80 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="container-custom flex items-center justify-between py-4">
        {/* Logo */}
        <motion.a
          href="#home"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="text-2xl font-bold text-cyan-600"
        >
          Apon Talukder
        </motion.a>

        <div className="flex items-center">
          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-1">
            {navItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors hover:text-cyan-600 hover:bg-cyan-50 ${
                  activeSection === item.href.substring(1)
                    ? "text-cyan-600 font-semibold"
                    : "text-muted-foreground"
                }`}
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector(item.href).scrollIntoView({
                    behavior: "smooth",
                  });
                }}
              >
                {item.name}
              </motion.a>
            ))}

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <a href="/resume.pdf" download>
                <Button className="bg-cyan-600 hover:bg-cyan-700 text-white transform hover:scale-105 transition-transform">
                  <Download className="mr-2 h-4 w-4" /> Resume
                </Button>
              </a>
            </motion.div>
          </nav>

          {/* Theme Toggle */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.6 }}
            className="ml-4"
          >
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              aria-label="Toggle theme"
            >
              <AnimatePresence mode="wait" initial={false}>
                {theme === "light" ? (
                  <motion.div
                    key="sun"
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 20, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-cyan-600"
                  >
                    <Sun size={20} />
                  </motion.div>
                ) : (
                  <motion.div
                    key="moon"
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 20, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-cyan-400"
                  >
                    <Moon size={20} />
                  </motion.div>
                )}
              </AnimatePresence>
            </Button>
          </motion.div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden ml-2 text-cyan-600"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <motion.div
              initial={{ rotate: 0 }}
              animate={{ rotate: isMenuOpen ? 90 : 0 }}
              transition={{ duration: 0.3 }}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.div>
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-background border-t"
          >
            <nav className="container-custom py-4 flex flex-col space-y-2">
              {navItems.map((item) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  transition={{ duration: 0.3 }}
                  className={`px-4 py-3 rounded-md text-base font-medium transition-colors ${
                    activeSection === item.href.substring(1)
                      ? "bg-cyan-50 text-cyan-600"
                      : "text-muted-foreground hover:text-cyan-600 hover:bg-cyan-50"
                  }`}
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector(item.href).scrollIntoView({
                      behavior: "smooth",
                    });
                    setIsMenuOpen(false);
                  }}
                >
                  {item.name}
                </motion.a>
              ))}
              <a href="/resume.pdf" download>
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                >
                  <Button className="bg-cyan-600 hover:bg-cyan-700 text-white w-full">
                    <Download className="mr-2 h-4 w-4" /> Resume
                  </Button>
                </motion.div>
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
