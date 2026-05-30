import React from "react";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  Code2,
  Bug,
  Database,
  Globe,
  Terminal,
  BrainCircuit,
  Server,
  Layers3,
  Trophy,
} from "lucide-react";

const About = () => {
  const expertise = [
    {
      title: "Frontend Engineering",
      description:
        "Building immersive, high-performance interfaces with React, Next.js and Tailwind CSS.",
      icon: <Code2 size={22} />,
      color: "from-cyan-500 to-blue-500",
    },
    {
      title: "Backend Architecture",
      description:
        "Designing scalable APIs, authentication systems and server-side infrastructure.",
      icon: <Server size={22} />,
      color: "from-emerald-500 to-green-500",
    },
    {
      title: "Security Research",
      description:
        "Exploring web vulnerabilities, offensive techniques and secure application practices.",
      icon: <ShieldCheck size={22} />,
      color: "from-purple-500 to-pink-500",
    },
    {
      title: "Problem Solving",
      description:
        "Applying analytical thinking through CTF challenges and real-world debugging.",
      icon: <BrainCircuit size={22} />,
      color: "from-orange-500 to-red-500",
    },
  ];

  const technologies = [
    "React",
    "Next.js",
    "Node.js",
    "Express",
    "MongoDB",
    "MySQL",
    "Tailwind CSS",
    "JavaScript",
    "Cybersecurity",
    "CTF",
  ];

  const timeline = [
    {
      title: "Full Stack Developer",
      year: "2020 - Present",
      description:
        "Developing modern MERN stack applications with scalable architecture, responsive UI systems and optimized user experiences.",
    },
    {
      title: "Bug Bounty Hunter",
      year: "2019 - Present",
      description:
        "Researching vulnerabilities, application logic flaws and security weaknesses across modern web platforms.",
    },
    {
      title: "CTF Player",
      year: "2022 - Present",
      description:
        "Practicing offensive security techniques including web exploitation, enumeration and reverse engineering.",
    },
  ];

  const stats = [
    {
      number: "15+",
      label: "Projects Built",
    },
    {
      number: "4+",
      label: "Years Experience",
    },
    {
      number: "CTF",
      label: "Competitive Player",
    },
    {
      number: "Bug",
      label: "Security Research",
    },
  ];

  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#070B14] text-white py-32"
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
            <Bug size={16} className="text-cyan-400" />

            <span className="text-sm uppercase tracking-[0.2em] text-gray-300">
              About Me
            </span>
          </div>

          {/* Title */}
          <h2 className="text-5xl md:text-7xl font-black leading-tight">
            Developer,
            <br />

            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
              Security Researcher
            </span>

            <br />
            & Problem Solver
          </h2>

          {/* Description */}
          <p className="text-gray-400 text-lg leading-relaxed max-w-3xl mx-auto mt-8">
            I specialize in building modern full stack applications with a
            strong focus on performance, scalability and security-first
            engineering. My work combines software development with offensive
            security research to create resilient digital experiences.
          </p>
        </motion.div>

        {/* ================= MAIN GRID ================= */}

        <div className="grid lg:grid-cols-12 gap-10">

          {/* ================= LEFT SECTION ================= */}

          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-5 space-y-8"
          >

            {/* Main Bio Card */}
            <div className="relative bg-white/[0.03] border border-white/10 backdrop-blur-2xl rounded-[32px] p-8 overflow-hidden">

              {/* Glow */}
              <div className="absolute top-0 left-0 w-40 h-40 bg-cyan-500/10 blur-[80px] rounded-full"></div>

              <div className="relative z-10">

                <h3 className="text-3xl font-bold mb-6">
                  Behind The Code
                </h3>

                <p className="text-gray-400 leading-relaxed mb-6">
                  I approach development through an adversarial mindset —
                  thinking not only about how systems work, but also how they
                  can fail and be secured.
                </p>

                <p className="text-gray-400 leading-relaxed">
                  Currently focused on advanced web exploitation, scalable
                  application architecture and premium modern UI engineering.
                </p>

                {/* Focus Areas */}
                <div className="mt-8 flex flex-wrap gap-3">
                  {[
                    "Web Security",
                    "CTF",
                    "API Security",
                    "Modern UI",
                    "Full Stack",
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      whileHover={{
                        scale: 1.05,
                        y: -3,
                      }}
                      className="
                        px-4
                        py-2
                        rounded-xl
                        bg-white/[0.04]
                        border
                        border-white/10
                        text-sm
                        text-gray-300
                      "
                    >
                      {item}
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* Timeline */}
            <div className="relative bg-white/[0.03] border border-white/10 backdrop-blur-2xl rounded-[32px] p-8 overflow-hidden">

              <div className="flex items-center gap-3 mb-8">
                <Layers3 className="text-cyan-400" />

                <h3 className="text-2xl font-bold">
                  Journey Timeline
                </h3>
              </div>

              <div className="space-y-8">
                {timeline.map((item, index) => (
                  <motion.div
                    key={index}
                    whileHover={{
                      x: 5,
                    }}
                    className="relative pl-8"
                  >
                    {/* Line */}
                    <div className="absolute left-0 top-1 h-full w-[2px] bg-gradient-to-b from-cyan-400 to-purple-500"></div>

                    {/* Dot */}
                    <div className="absolute left-[-6px] top-2 w-3 h-3 rounded-full bg-cyan-400 shadow-[0_0_20px_#22d3ee]"></div>

                    <span className="text-sm text-cyan-400 font-medium">
                      {item.year}
                    </span>

                    <h4 className="text-xl font-semibold mt-1">
                      {item.title}
                    </h4>

                    <p className="text-gray-400 text-sm leading-relaxed mt-2">
                      {item.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* ================= RIGHT SECTION ================= */}

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-7 space-y-8"
          >

            {/* Core Expertise */}
            <div className="relative bg-white/[0.03] border border-white/10 backdrop-blur-2xl rounded-[32px] p-8 overflow-hidden">

              {/* Glow */}
              <div className="absolute bottom-0 right-0 w-52 h-52 bg-purple-500/10 blur-[100px] rounded-full"></div>

              <div className="relative z-10">

                <div className="flex items-center gap-3 mb-8">
                  <Trophy className="text-cyan-400" />

                  <h3 className="text-3xl font-bold">
                    Core Expertise
                  </h3>
                </div>

                {/* Expertise Grid */}
                <div className="grid md:grid-cols-2 gap-5">
                  {expertise.map((item, index) => (
                    <motion.div
                      key={index}
                      whileHover={{
                        y: -8,
                        scale: 1.02,
                      }}
                      transition={{
                        type: "spring",
                        stiffness: 200,
                      }}
                      className="
                        relative
                        overflow-hidden
                        bg-white/[0.04]
                        border
                        border-white/10
                        rounded-2xl
                        p-6
                        group
                      "
                    >
                      {/* Hover Gradient */}
                      <div
                        className={`
                          absolute
                          inset-0
                          opacity-0
                          group-hover:opacity-10
                          transition-all
                          duration-500
                          bg-gradient-to-r
                          ${item.color}
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
                            ${item.color}
                          `}
                        >
                          {item.icon}
                        </div>

                        <h4 className="text-xl font-semibold mb-3">
                          {item.title}
                        </h4>

                        <p className="text-gray-400 text-sm leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* Technologies */}
            <div className="relative bg-white/[0.03] border border-white/10 backdrop-blur-2xl rounded-[32px] p-8 overflow-hidden">

              <div className="flex items-center gap-3 mb-8">
                <Database className="text-cyan-400" />

                <h3 className="text-3xl font-bold">
                  Technologies
                </h3>
              </div>

              {/* Tech Pills */}
              <div className="flex flex-wrap gap-4">
                {technologies.map((tech, index) => (
                  <motion.div
                    key={index}
                    whileHover={{
                      scale: 1.08,
                      y: -5,
                    }}
                    className="
                      px-5
                      py-3
                      rounded-2xl
                      bg-white/[0.04]
                      border
                      border-white/10
                      hover:border-cyan-400
                      transition-all
                      duration-300
                      text-sm
                      font-medium
                      cursor-pointer
                    "
                  >
                    {tech}
                  </motion.div>
                ))}
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mt-10">
                {stats.map((item, index) => (
                  <motion.div
                    key={index}
                    whileHover={{
                      y: -5,
                    }}
                    className="
                      bg-white/[0.04]
                      border
                      border-white/10
                      rounded-2xl
                      p-5
                      text-center
                    "
                  >
                    <h3 className="text-3xl font-black bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                      {item.number}
                    </h3>

                    <p className="text-gray-400 text-sm mt-2">
                      {item.label}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;