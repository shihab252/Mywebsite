import React from "react";
import { motion } from "framer-motion";

import {
  Github,
  ExternalLink,
  Layers3,
  ShieldCheck,
  Globe,
  ShoppingCart,
} from "lucide-react";

import Supercar from "../assets/Supercar.png";
import SpicyBites from "../assets/SpicyBites.png";
import ecom from "../assets/ecom.png";
import foodDel from "../assets/FoodDelivery.png";

const Projects = () => {
  const projectJson = [
    {
      title: "Super Car Platform",
      desc: "A futuristic automotive showcase platform focused on immersive animations, responsive layouts and premium user interaction patterns.",
      image: Supercar,
      live: "https://supercar123.netlify.app/",
      github: "https://github.com/shihab252/supercar.git",
      icon: <Globe size={18} />,
      tech: ["React", "Tailwind", "Framer Motion"],
      color: "from-cyan-500 to-blue-500",
    },

    {
      title: "Spicy Bites Restaurant Hub",
      desc: "A modern restaurant discovery experience with elegant UI systems, asynchronous state management and interactive ordering flows.",
      image: SpicyBites,
      live: "https://spicybites.netlify.app/",
      github: "https://github.com/rohitsingh93300/YtSpicyBites",
      icon: <Layers3 size={18} />,
      tech: ["React", "Node.js", "MongoDB"],
      color: "from-orange-500 to-red-500",
    },

    {
      title: "Responsive E-Commerce Matrix",
      desc: "A scalable shopping ecosystem featuring optimized rendering, responsive product architecture and dynamic cart interactions.",
      image: ecom,
      live: "https://shihab252.github.io/e-commerce-project-2/",
      github: "https://github.com/shihab252/e-commerce-project-2.git",
      icon: <ShoppingCart size={18} />,
      tech: ["React", "Redux", "Tailwind"],
      color: "from-purple-500 to-pink-500",
    },

    {
      title: "Food Delivery Web App",
      desc: "A complete full stack food delivery solution with real-time flows, API-driven systems and scalable backend infrastructure.",
      image: foodDel,
      live: "https://food-frontend-54t5.onrender.com/",
      github: "https://github.com/shihab252/food",
      icon: <ShieldCheck size={18} />,
      tech: ["MERN", "JWT", "REST API"],
      color: "from-emerald-500 to-green-500",
    },
  ];

  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-[#050816] text-white py-32"
    >
      {/* ================= BACKGROUND ================= */}

      {/* Glow Effects */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-cyan-500/10 blur-[140px] rounded-full"></div>

      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-purple-500/10 blur-[140px] rounded-full"></div>

      {/* Grid */}
      <div className="absolute inset-0 opacity-[0.04]">
        <div className="h-full w-full bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:45px_45px]"></div>
      </div>

      {/* ================= CONTENT ================= */}

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* ================= SECTION HEADER ================= */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 backdrop-blur-xl px-5 py-2 rounded-full mb-6">
            <Layers3 size={16} className="text-cyan-400" />

            <span className="text-sm uppercase tracking-[0.2em] text-gray-300">
              Portfolio
            </span>
          </div>

          {/* Title */}
          <h2 className="text-5xl md:text-7xl font-black leading-tight">
            Featured
            <br />

            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>

          {/* Description */}
          <p className="text-gray-400 text-lg leading-relaxed max-w-3xl mx-auto mt-8">
            A collection of modern applications focused on scalability,
            performance, immersive UI experiences and security-conscious
            engineering.
          </p>
        </motion.div>

        {/* ================= PROJECT GRID ================= */}

        <div className="grid md:grid-cols-2 xl:grid-cols-2 gap-10">

          {projectJson.map((project, index) => (
            <motion.div
              key={index}
              initial={{
                opacity: 0,
                y: 40,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.7,
                delay: index * 0.15,
              }}
              viewport={{ once: true }}
              whileHover={{
                y: -10,
              }}
              className="
                group
                relative
                overflow-hidden
                rounded-[32px]
                border
                border-white/10
                bg-white/[0.03]
                backdrop-blur-2xl
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
                  duration-700
                  bg-gradient-to-r
                  ${project.color}
                `}
              ></div>

              {/* Image Container */}
              <div className="relative overflow-hidden">

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#050816] via-[#050816]/30 to-transparent z-10"></div>

                {/* Image */}
                <img
                  src={project.image}
                  alt={project.title}
                  className="
                    w-full
                    h-[280px]
                    object-cover
                    group-hover:scale-110
                    transition-all
                    duration-700
                  "
                />

                {/* Floating Tech Badge */}
                <div
                  className={`
                    absolute
                    top-5
                    left-5
                    z-20
                    flex
                    items-center
                    gap-2
                    px-4
                    py-2
                    rounded-full
                    bg-gradient-to-r
                    ${project.color}
                    text-sm
                    font-medium
                    shadow-xl
                  `}
                >
                  {project.icon}

                  <span>Featured Project</span>
                </div>
              </div>

              {/* ================= CARD CONTENT ================= */}

              <div className="p-8 relative z-20">

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-3 mb-5">
                  {project.tech.map((tech, idx) => (
                    <div
                      key={idx}
                      className="
                        px-3
                        py-1.5
                        rounded-xl
                        bg-white/[0.04]
                        border
                        border-white/10
                        text-xs
                        text-gray-300
                      "
                    >
                      {tech}
                    </div>
                  ))}
                </div>

                {/* Title */}
                <h3 className="text-3xl font-bold mb-4">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 leading-relaxed mb-8">
                  {project.desc}
                </p>

                {/* Buttons */}
                <div className="flex flex-wrap gap-4">

                  {/* Live Preview */}
                  <motion.a
                    whileHover={{
                      scale: 1.05,
                    }}
                    whileTap={{
                      scale: 0.95,
                    }}
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`
                      flex
                      items-center
                      gap-2
                      px-6
                      py-3
                      rounded-2xl
                      bg-gradient-to-r
                      ${project.color}
                      font-medium
                      shadow-xl
                    `}
                  >
                    <ExternalLink size={18} />

                    <span>Live Preview</span>
                  </motion.a>

                  {/* Github */}
                  <motion.a
                    whileHover={{
                      scale: 1.05,
                    }}
                    whileTap={{
                      scale: 0.95,
                    }}
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      flex
                      items-center
                      gap-2
                      px-6
                      py-3
                      rounded-2xl
                      bg-white/[0.04]
                      border
                      border-white/10
                      hover:border-cyan-400
                      transition-all
                      duration-300
                    "
                  >
                    <Github size={18} />

                    <span>Source Code</span>
                  </motion.a>
                </div>
              </div>

              {/* Bottom Border Glow */}
              <div
                className={`
                  absolute
                  bottom-0
                  left-0
                  h-[2px]
                  w-0
                  group-hover:w-full
                  transition-all
                  duration-700
                  bg-gradient-to-r
                  ${project.color}
                `}
              ></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;