import React from "react";
import { motion } from "framer-motion";

import {
  Shield,
  Code2,
  Terminal,
  Bug,
  Globe,
  Database,
} from "lucide-react";

const Expertise = () => {
  const cards = [
    {
      title: "Web Security",
      icon: <Shield size={28} />,
      desc: "Exploring vulnerabilities, secure coding practices and offensive security methodologies for modern web applications.",
      color: "from-cyan-500 to-blue-500",
    },

    {
      title: "Full Stack Development",
      icon: <Code2 size={28} />,
      desc: "Building scalable MERN stack applications with modern architecture, optimized performance and responsive interfaces.",
      color: "from-purple-500 to-pink-500",
    },

    {
      title: "CTF Challenges",
      icon: <Terminal size={28} />,
      desc: "Practicing enumeration, exploitation and analytical problem solving through cybersecurity competitions.",
      color: "from-orange-500 to-red-500",
    },

    {
      title: "Bug Bounty Research",
      icon: <Bug size={28} />,
      desc: "Investigating real-world application flaws and researching security weaknesses responsibly.",
      color: "from-emerald-500 to-green-500",
    },

    {
      title: "Modern UI/UX",
      icon: <Globe size={28} />,
      desc: "Designing immersive user experiences with premium animations, smooth interactions and clean interfaces.",
      color: "from-pink-500 to-rose-500",
    },

    {
      title: "Backend Systems",
      icon: <Database size={28} />,
      desc: "Developing APIs, authentication systems and scalable backend infrastructures for modern platforms.",
      color: "from-sky-500 to-cyan-500",
    },
  ];

  return (
    <section
      id="expertise"
      className="relative overflow-hidden bg-[#050816] text-white py-32"
    >
      {/* ================= BACKGROUND EFFECTS ================= */}

      {/* Glow Effects */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-cyan-500/10 blur-[140px] rounded-full"></div>

      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-purple-500/10 blur-[140px] rounded-full"></div>

      {/* Grid */}
      <div className="absolute inset-0 opacity-[0.04]">
        <div className="h-full w-full bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:45px_45px]"></div>
      </div>

      {/* ================= CONTENT ================= */}

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* ================= HEADER ================= */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 backdrop-blur-xl px-5 py-2 rounded-full mb-6">
            <Shield size={16} className="text-cyan-400" />

            <span className="text-sm uppercase tracking-[0.2em] text-gray-300">
              Expertise
            </span>
          </div>

          {/* Title */}
          <h2 className="text-5xl md:text-7xl font-black leading-tight">
            What I
            <br />

            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
              Work On
            </span>
          </h2>

          {/* Description */}
          <p className="text-gray-400 text-lg leading-relaxed max-w-3xl mx-auto mt-8">
            Combining modern software engineering with cybersecurity knowledge
            to build scalable, secure and high-performance digital experiences.
          </p>
        </motion.div>

        {/* ================= CARDS GRID ================= */}

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">

          {cards.map((card, index) => (
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
                delay: index * 0.1,
              }}
              viewport={{ once: true }}
              whileHover={{
                y: -10,
                scale: 1.02,
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
                p-8
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
                  ${card.color}
                `}
              ></div>

              {/* Animated Border Glow */}
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
                  ${card.color}
                `}
              ></div>

              {/* Card Content */}
              <div className="relative z-10">

                {/* Icon */}
                <div
                  className={`
                    w-max
                    p-4
                    rounded-2xl
                    mb-6
                    bg-gradient-to-r
                    ${card.color}
                    shadow-xl
                  `}
                >
                  {card.icon}
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold mb-4">
                  {card.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 leading-relaxed">
                  {card.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Expertise;