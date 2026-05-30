import React from "react";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import { TypeAnimation } from "react-type-animation";

import {
  Github,
  Linkedin,
  Mail,
  ArrowRight,
  Shield,
} from "lucide-react";

import hero1 from "../assets/hero1.png";

const floatingAnimation = {
  animate: {
    y: [0, -15, 0],
  },
  transition: {
    duration: 5,
    repeat: Infinity,
    ease: "easeInOut",
  },
};

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-[#050816] text-white min-h-screen flex items-center">
      
      {/* ================= BACKGROUND EFFECTS ================= */}

      {/* Glow Orb 1 */}
      <motion.div
        animate={{
          x: [0, 40, 0],
          y: [0, -30, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-[-120px] left-[-120px] w-[420px] h-[420px] bg-cyan-500/20 blur-[120px] rounded-full"
      />

      {/* Glow Orb 2 */}
      <motion.div
        animate={{
          x: [0, -40, 0],
          y: [0, 30, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-[-120px] right-[-120px] w-[420px] h-[420px] bg-purple-500/20 blur-[120px] rounded-full"
      />

      {/* Grid Background */}
      <div className="absolute inset-0 opacity-[0.06]">
        <div className="h-full w-full bg-[linear-gradient(to_right,#ffffff15_1px,transparent_1px),linear-gradient(to_bottom,#ffffff15_1px,transparent_1px)] bg-[size:45px_45px]"></div>
      </div>

      {/* Noise Texture */}
      <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>

      {/* ================= MAIN CONTENT ================= */}

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* ================= LEFT SIDE ================= */}

          <div className="relative">

            {/* Extra Glow */}
            <div className="absolute left-0 top-0 w-72 h-72 bg-cyan-500/10 blur-[120px] rounded-full"></div>

            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-white/5 border border-white/10 backdrop-blur-xl rounded-full px-5 py-2 mb-6 relative z-10"
            >
              <Shield size={16} className="text-cyan-400" />
              <span className="text-sm text-gray-300 tracking-wide">
                Cybersecurity Enthusiast
              </span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-5xl md:text-7xl font-black leading-tight mb-6 relative z-10"
            >
              Securing The Web,
              <br />
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
                One App
              </span>
              <br />
              At A Time.
            </motion.h1>

            {/* Typing Animation */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="relative z-10 mb-8"
            >
              <TypeAnimation
                sequence={[
                  "Full Stack Developer",
                  2000,
                  "Bug Bounty Hunter",
                  2000,
                  "CTF Player",
                  2000,
                  "Security Researcher",
                  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                className="text-2xl md:text-3xl font-semibold text-cyan-400"
              />

              <p className="text-lg text-gray-300 mt-5 leading-relaxed max-w-2xl">
                I'm Shihab Khan — passionate about building modern,
                scalable and security-focused web applications with
                premium user experiences and high-performance architecture.
              </p>
            </motion.div>

            {/* Tech Stack Pills */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="flex flex-wrap gap-4 mb-10 relative z-10"
            >
              {[
                "React",
                "Next.js",
                "Node.js",
                "Cybersecurity",
                "CTF",
                "Tailwind CSS",
              ].map((tech, index) => (
                <motion.div
                  key={index}
                  whileHover={{
                    scale: 1.08,
                    y: -5,
                  }}
                  className="
                    bg-white/5
                    border
                    border-white/10
                    backdrop-blur-xl
                    px-5
                    py-3
                    rounded-2xl
                    text-sm
                    font-medium
                    hover:border-cyan-400
                    transition-all
                    duration-300
                    cursor-pointer
                  "
                >
                  {tech}
                </motion.div>
              ))}
            </motion.div>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="flex flex-wrap gap-4 mb-10 relative z-10"
            >
              {/* Explore Projects */}
              <motion.a
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0px 0px 30px rgba(6,182,212,0.5)",
                }}
                whileTap={{ scale: 0.95 }}
                href="#projects"
                className="
                  group
                  bg-gradient-to-r
                  from-cyan-500
                  to-blue-500
                  px-7
                  py-4
                  rounded-2xl
                  font-semibold
                  flex
                  items-center
                  gap-3
                "
              >
                Explore Projects

                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </motion.a>

              {/* CV Button */}
              <motion.a
                whileHover={{
                  scale: 1.05,
                  borderColor: "#06B6D4",
                }}
                whileTap={{ scale: 0.95 }}
                href="/Shihab_Khan_CV.pdf"
                download
                className="
                  border
                  border-white/10
                  bg-white/5
                  backdrop-blur-xl
                  px-7
                  py-4
                  rounded-2xl
                  font-semibold
                  hover:bg-white/10
                  transition-all
                "
              >
                Download CV
              </motion.a>
            </motion.div>

            {/* Social Icons */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
              className="flex items-center gap-5 relative z-10"
            >
              {[
                {
                  icon: <Github />,
                  link: "https://github.com/shihab252",
                },
                {
                  icon: <Linkedin />,
                  link: "https://linkedin.com",
                },
                {
                  icon: <Mail />,
                  link: "mailto:khanshihab252@gmail.com",
                },
              ].map((item, index) => (
                <motion.a
                  key={index}
                  whileHover={{
                    scale: 1.15,
                    y: -5,
                  }}
                  whileTap={{ scale: 0.9 }}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    bg-white/5
                    border
                    border-white/10
                    hover:border-cyan-400
                    backdrop-blur-xl
                    p-4
                    rounded-2xl
                    transition-all
                    duration-300
                  "
                >
                  {item.icon}
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* ================= RIGHT SIDE ================= */}

          <motion.div
            initial={{ opacity: 0, scale: 0.7, rotate: -5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1 }}
            className="relative flex justify-center items-center"
          >
            {/* Main Glow */}
            <motion.div
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.4, 0.6, 0.4],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
              }}
              className="
                absolute
                w-[420px]
                h-[420px]
                bg-gradient-to-r
                from-cyan-500
                via-blue-500
                to-purple-500
                rounded-full
                blur-[120px]
              "
            />

            {/* Rotating Ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{
                duration: 25,
                repeat: Infinity,
                ease: "linear",
              }}
              className="
                absolute
                w-[430px]
                h-[430px]
                rounded-full
                border
                border-cyan-400/20
              "
            />

            {/* Tilt Container */}
            <Tilt
              tiltMaxAngleX={10}
              tiltMaxAngleY={10}
              perspective={1200}
              transitionSpeed={1500}
              scale={1.02}
              gyroscope={true}
            >
              {/* Glass Card */}
              <motion.div
                whileHover={{
                  scale: 1.02,
                  rotate: 1,
                }}
                className="
                  relative
                  bg-white/5
                  border
                  border-white/10
                  backdrop-blur-2xl
                  rounded-[40px]
                  p-5
                  overflow-hidden
                  shadow-[0_0_80px_rgba(0,255,255,0.12)]
                "
              >
                {/* Shine Animation */}
                <motion.div
                  animate={{
                    x: ["-120%", "220%"],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="
                    absolute
                    inset-0
                    bg-gradient-to-r
                    from-transparent
                    via-white/10
                    to-transparent
                    skew-x-12
                    z-20
                  "
                />

                {/* Profile Image */}
                <img
                  src={hero1}
                  alt="Shihab Khan"
                  className="
                    w-[320px]
                    md:w-[400px]
                    h-[420px]
                    object-cover
                    object-top
                    rounded-[32px]
                    relative
                    z-10
                  "
                />

                {/* Floating Card 1 */}
                <motion.div
                  {...floatingAnimation}
                  className="
                    absolute
                    top-6
                    -left-10
                    bg-[#0f172a]/90
                    border
                    border-white/10
                    backdrop-blur-xl
                    rounded-2xl
                    px-5
                    py-4
                    shadow-2xl
                    z-30
                  "
                >
                  <p className="text-sm text-gray-400">
                    Top Skills
                  </p>

                  <h3 className="text-lg font-bold text-cyan-400">
                    React • Node • Security
                  </h3>
                </motion.div>

                {/* Floating Card 2 */}
                <motion.div
                  animate={{
                    y: [0, 14, 0],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="
                    absolute
                    bottom-10
                    -right-10
                    bg-[#0f172a]/90
                    border
                    border-white/10
                    backdrop-blur-xl
                    rounded-2xl
                    px-5
                    py-4
                    shadow-2xl
                    z-30
                  "
                >
                  <p className="text-sm text-gray-400">
                    CTF & Bug Bounty
                  </p>

                  <h3 className="text-lg font-bold text-purple-400">
                    Web Exploitation
                  </h3>
                </motion.div>

                {/* Floating Bubble */}
                <motion.div
                  animate={{
                    y: [0, -10, 0],
                    rotate: [0, 5, 0],
                  }}
                  transition={{
                    duration: 7,
                    repeat: Infinity,
                  }}
                  className="
                    absolute
                    top-1/2
                    -right-5
                    bg-gradient-to-r
                    from-cyan-400
                    to-blue-500
                    text-black
                    font-bold
                    px-5
                    py-3
                    rounded-2xl
                    shadow-2xl
                    z-30
                  "
                >
                  React ⚛️
                </motion.div>
              </motion.div>
            </Tilt>
          </motion.div>
        </div>
      </div>

      {/* ================= SCROLL INDICATOR ================= */}

      <motion.div
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
        }}
        className="
          absolute
          bottom-8
          left-1/2
          -translate-x-1/2
        "
      >
        <div className="w-7 h-12 border-2 border-white/20 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-cyan-400 rounded-full mt-2"></div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;