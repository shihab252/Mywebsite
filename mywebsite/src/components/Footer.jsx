import React from "react";
import { motion } from "framer-motion";

import {
  Github,
  Linkedin,
  Mail,
  ArrowUpRight,
  Shield,
  Terminal,
  Code2,
  Heart,
  ChevronUp,
} from "lucide-react";

const Footer = () => {
  const socialLinks = [
    {
      name: "GitHub",
      icon: <Github size={20} />,
      link: "https://github.com/shihab252",
      color: "from-cyan-500 to-blue-500",
    },

    {
      name: "LinkedIn",
      icon: <Linkedin size={20} />,
      link: "https://linkedin.com",
      color: "from-purple-500 to-pink-500",
    },

    {
      name: "Email",
      icon: <Mail size={20} />,
      link: "mailto:khanshihab252@gmail.com",
      color: "from-emerald-500 to-green-500",
    },
  ];

  const quickLinks = [
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
    <footer className="relative overflow-hidden bg-[#030712] text-white border-t border-white/10">

      {/* ================= BACKGROUND EFFECTS ================= */}

      {/* Glow Effects */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-cyan-500/10 blur-[140px] rounded-full"></div>

      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-purple-500/10 blur-[140px] rounded-full"></div>

      {/* Grid Background */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="h-full w-full bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:45px_45px]"></div>
      </div>

      {/* ================= CONTENT ================= */}

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* ================= TOP SECTION ================= */}

        <div className="py-20 grid lg:grid-cols-12 gap-14 border-b border-white/10">

          {/* ================= LEFT ================= */}

          <div className="lg:col-span-5">

            {/* Name */}
            <motion.h2
              whileHover={{
                scale: 1.02,
              }}
              className="
                text-5xl
                font-black
                leading-tight
                mb-6
                bg-gradient-to-r
                from-cyan-400
                via-blue-500
                to-purple-500
                bg-clip-text
                text-transparent
              "
            >
              Shihab
              <br />
              Khan
            </motion.h2>

            {/* Description */}
            <p className="text-gray-400 leading-relaxed text-lg max-w-lg mb-8">
              Full Stack Developer, Cybersecurity Enthusiast and CTF Player
              focused on building scalable, secure and immersive digital
              experiences with modern technologies.
            </p>

            {/* Status Badge */}
            <motion.div
              whileHover={{
                scale: 1.03,
              }}
              className="
                inline-flex
                items-center
                gap-3
                bg-white/[0.04]
                border
                border-white/10
                backdrop-blur-xl
                px-5
                py-3
                rounded-2xl
              "
            >
              <div className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse"></div>

              <span className="text-sm text-gray-300">
                Available For Projects & Collaborations
              </span>
            </motion.div>
          </div>

          {/* ================= CENTER ================= */}

          <div className="lg:col-span-3">

            {/* Title */}
            <div className="flex items-center gap-3 mb-8">
              <Terminal className="text-cyan-400" />

              <h3 className="text-2xl font-bold">
                Navigation
              </h3>
            </div>

            {/* Links */}
            <div className="flex flex-col gap-5">

              {quickLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  whileHover={{
                    x: 8,
                  }}
                  className="
                    group
                    flex
                    items-center
                    gap-3
                    text-gray-400
                    hover:text-white
                    transition-all
                    duration-300
                    w-max
                  "
                >
                  <span className="text-lg">
                    {link.name}
                  </span>

                  <ArrowUpRight
                    size={18}
                    className="
                      opacity-0
                      group-hover:opacity-100
                      transition-all
                      duration-300
                    "
                  />
                </motion.a>
              ))}
            </div>
          </div>

          {/* ================= RIGHT ================= */}

          <div className="lg:col-span-4">

            {/* Title */}
            <div className="flex items-center gap-3 mb-8">
              <Shield className="text-cyan-400" />

              <h3 className="text-2xl font-bold">
                Connect
              </h3>
            </div>

            {/* Social Cards */}
            <div className="grid sm:grid-cols-2 gap-5">

              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{
                    y: -8,
                    scale: 1.03,
                  }}
                  whileTap={{
                    scale: 0.95,
                  }}
                  className="
                    group
                    relative
                    overflow-hidden
                    rounded-2xl
                    border
                    border-white/10
                    bg-white/[0.03]
                    backdrop-blur-2xl
                    p-5
                  "
                >
                  {/* Hover Glow */}
                  <div
                    className={`
                      absolute
                      inset-0
                      opacity-0
                      group-hover:opacity-10
                      transition-all
                      duration-500
                      bg-gradient-to-r
                      ${social.color}
                    `}
                  ></div>

                  <div className="relative z-10">

                    {/* Icon */}
                    <div
                      className={`
                        w-max
                        p-4
                        rounded-2xl
                        mb-5
                        bg-gradient-to-r
                        ${social.color}
                      `}
                    >
                      {social.icon}
                    </div>

                    {/* Text */}
                    <div className="flex items-center justify-between">
                      <span className="font-semibold">
                        {social.name}
                      </span>

                      <ArrowUpRight
                        size={18}
                        className="
                          opacity-0
                          group-hover:opacity-100
                          group-hover:translate-x-1
                          group-hover:-translate-y-1
                          transition-all
                          duration-300
                        "
                      />
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Bottom Mini Card */}
            <motion.div
              whileHover={{
                scale: 1.02,
              }}
              className="
                mt-6
                rounded-2xl
                border
                border-white/10
                bg-white/[0.03]
                backdrop-blur-2xl
                p-5
              "
            >
              <div className="flex items-center gap-3 mb-3">
                <Code2 className="text-cyan-400" />

                <h4 className="font-semibold">
                  Tech Stack
                </h4>
              </div>

              <p className="text-sm text-gray-400 leading-relaxed">
                React • Next.js • Tailwind CSS • Node.js • MongoDB •
                Cybersecurity
              </p>
            </motion.div>
          </div>
        </div>

        {/* ================= BOTTOM SECTION ================= */}

        <div className="py-8 flex flex-col lg:flex-row items-center justify-between gap-6">

          {/* Left */}
          <div className="flex items-center gap-3 text-gray-500 text-sm">
            <span>
              © {new Date().getFullYear()} Shihab Khan.
            </span>

            <span className="w-1 h-1 rounded-full bg-gray-600"></span>

            <span>All rights reserved.</span>
          </div>

          {/* Center */}
          <div className="flex items-center gap-2 text-gray-500 text-sm">
            <span>Built with</span>

            <Heart
              size={15}
              className="text-red-400 fill-red-400"
            />

            <span>using React & Tailwind CSS</span>
          </div>

          {/* Right */}
          <motion.a
            whileHover={{
              y: -5,
            }}
            href="#"
            className="
              flex
              items-center
              gap-3
              px-5
              py-3
              rounded-2xl
              border
              border-white/10
              bg-white/[0.03]
              hover:border-cyan-400
              transition-all
              duration-300
            "
          >
            <ChevronUp size={18} />

            <span className="text-sm">
              Back To Top
            </span>
          </motion.a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;