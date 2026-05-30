import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import {
  Menu,
  X,
  Shield,
  Github,
  Linkedin,
} from "lucide-react";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Scroll Effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navLinks = [
    {
      name: "About",
      href: "#about",
    },

    {
      name: "Projects",
      href: "#projects",
    },

    {
      name: "Expertise",
      href: "#expertise",
    },

    {
      name: "Contact",
      href: "#contact",
    },
  ];

  return (
    <header
      className={`
        fixed
        top-0
        left-0
        w-full
        z-50
        transition-all
        duration-500
        ${
          scrolled
            ? "bg-[#050816]/80 backdrop-blur-2xl border-b border-white/10 shadow-2xl"
            : "bg-transparent"
        }
      `}
    >
      {/* ================= BACKGROUND GLOW ================= */}

      <div className="absolute inset-0 overflow-hidden pointer-events-none">

        <div className="absolute top-0 left-0 w-[300px] h-[300px] bg-cyan-500/10 blur-[120px] rounded-full"></div>

        <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-purple-500/10 blur-[120px] rounded-full"></div>
      </div>

      {/* ================= NAVBAR CONTENT ================= */}

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        <div className="flex items-center justify-between h-20">

          {/* ================= LOGO ================= */}

          <motion.a
            href="#"
            whileHover={{
              scale: 1.03,
            }}
            className="flex items-center gap-3"
          >
            {/* Logo Icon */}
            <div
              className="
                w-12
                h-12
                rounded-2xl
                bg-gradient-to-r
                from-cyan-500
                via-blue-500
                to-purple-500
                flex
                items-center
                justify-center
                shadow-xl
              "
            >
              <Shield size={22} />
            </div>

            {/* Text */}
            <div className="flex flex-col">

              <h2
                className="
                  text-2xl
                  font-black
                  leading-none
                  bg-gradient-to-r
                  from-cyan-400
                  via-blue-500
                  to-purple-500
                  bg-clip-text
                  text-transparent
                "
              >
                Shihab Khan
              </h2>

              <span className="text-xs text-gray-400 tracking-[0.2em] uppercase">
                Full Stack & Security
              </span>
            </div>
          </motion.a>

          {/* ================= DESKTOP NAV ================= */}

          <nav
            className="
              hidden
              lg:flex
              items-center
              gap-3
              bg-white/[0.03]
              border
              border-white/10
              backdrop-blur-2xl
              px-4
              py-3
              rounded-2xl
            "
          >
            {navLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.href}
                whileHover={{
                  y: -2,
                }}
                className="
                  relative
                  px-5
                  py-2
                  rounded-xl
                  text-sm
                  font-medium
                  text-gray-300
                  hover:text-white
                  transition-all
                  duration-300
                  group
                "
              >
                {link.name}

                {/* Hover Underline */}
                <span
                  className="
                    absolute
                    left-0
                    bottom-0
                    h-[2px]
                    w-0
                    group-hover:w-full
                    transition-all
                    duration-500
                    bg-gradient-to-r
                    from-cyan-400
                    to-purple-500
                  "
                ></span>
              </motion.a>
            ))}
          </nav>

          {/* ================= RIGHT SIDE ================= */}

          <div className="hidden lg:flex items-center gap-4">

            {/* Socials */}
            <motion.a
              whileHover={{
                y: -3,
                scale: 1.05,
              }}
              href="https://github.com/shihab252"
              target="_blank"
              rel="noopener noreferrer"
              className="
                w-11
                h-11
                rounded-2xl
                bg-white/[0.04]
                border
                border-white/10
                flex
                items-center
                justify-center
                text-gray-300
                hover:text-white
                hover:border-cyan-400
                transition-all
                duration-300
              "
            >
              <Github size={18} />
            </motion.a>

            <motion.a
              whileHover={{
                y: -3,
                scale: 1.05,
              }}
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="
                w-11
                h-11
                rounded-2xl
                bg-white/[0.04]
                border
                border-white/10
                flex
                items-center
                justify-center
                text-gray-300
                hover:text-white
                hover:border-cyan-400
                transition-all
                duration-300
              "
            >
              <Linkedin size={18} />
            </motion.a>

            {/* CTA Button */}
            <motion.a
              whileHover={{
                scale: 1.05,
              }}
              whileTap={{
                scale: 0.95,
              }}
              href="#contact"
              className="
                px-6
                py-3
                rounded-2xl
                bg-gradient-to-r
                from-cyan-500
                to-blue-500
                text-sm
                font-semibold
                shadow-xl
              "
            >
              Let's Talk
            </motion.a>
          </div>

          {/* ================= MOBILE BUTTON ================= */}

          <motion.button
            whileTap={{
              scale: 0.9,
            }}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="
              lg:hidden
              w-12
              h-12
              rounded-2xl
              bg-white/[0.04]
              border
              border-white/10
              flex
              items-center
              justify-center
              text-white
            "
          >
            {mobileMenuOpen ? (
              <X size={22} />
            ) : (
              <Menu size={22} />
            )}
          </motion.button>
        </div>
      </div>

      {/* ================= MOBILE MENU ================= */}

      <AnimatePresence>

        {mobileMenuOpen && (
          <motion.div
            initial={{
              opacity: 0,
              y: -20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: -20,
            }}
            transition={{
              duration: 0.3,
            }}
            className="
              lg:hidden
              px-6
              pb-6
            "
          >
            <div
              className="
                mt-4
                rounded-[30px]
                border
                border-white/10
                bg-[#050816]/95
                backdrop-blur-2xl
                overflow-hidden
              "
            >
              {/* Links */}
              <div className="flex flex-col p-5">

                {navLinks.map((link, index) => (
                  <motion.a
                    key={index}
                    href={link.href}
                    whileHover={{
                      x: 8,
                    }}
                    onClick={() => setMobileMenuOpen(false)}
                    className="
                      px-5
                      py-4
                      rounded-2xl
                      text-gray-300
                      hover:text-white
                      hover:bg-white/[0.04]
                      transition-all
                      duration-300
                      font-medium
                    "
                  >
                    {link.name}
                  </motion.a>
                ))}
              </div>

              {/* Bottom */}
              <div
                className="
                  border-t
                  border-white/10
                  p-5
                  flex
                  items-center
                  justify-between
                "
              >
                {/* Socials */}
                <div className="flex items-center gap-4">

                  <a
                    href="https://github.com/shihab252"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      w-11
                      h-11
                      rounded-2xl
                      bg-white/[0.04]
                      border
                      border-white/10
                      flex
                      items-center
                      justify-center
                    "
                  >
                    <Github size={18} />
                  </a>

                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      w-11
                      h-11
                      rounded-2xl
                      bg-white/[0.04]
                      border
                      border-white/10
                      flex
                      items-center
                      justify-center
                    "
                  >
                    <Linkedin size={18} />
                  </a>
                </div>

                {/* CTA */}
                <a
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="
                    px-5
                    py-3
                    rounded-2xl
                    bg-gradient-to-r
                    from-cyan-500
                    to-blue-500
                    text-sm
                    font-semibold
                  "
                >
                  Contact
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;