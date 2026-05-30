import React from "react";
import { motion } from "framer-motion";
import Lottie from "lottie-react";

import {
  Mail,
  Github,
  Linkedin,
  Send,
  Shield,
  Terminal,
  Globe,
} from "lucide-react";

import contact from "../assets/Contact.json";

const Contact = () => {
  const socials = [
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

  return (
    <section
      id="contact"
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
          }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 backdrop-blur-xl px-5 py-2 rounded-full mb-6">
            <Send size={16} className="text-cyan-400" />

            <span className="text-sm uppercase tracking-[0.2em] text-gray-300">
              Contact
            </span>
          </div>

          {/* Title */}
          <h2 className="text-5xl md:text-7xl font-black leading-tight">
            Let's Build
            <br />

            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
              Something Great
            </span>
          </h2>

          {/* Description */}
          <p className="text-gray-400 text-lg leading-relaxed max-w-3xl mx-auto mt-8">
            Open to collaborations, development opportunities, cybersecurity
            discussions and innovative digital projects.
          </p>
        </motion.div>

        {/* ================= MAIN GRID ================= */}

        <div className="grid lg:grid-cols-12 gap-10 items-center">

          {/* ================= LEFT SIDE ================= */}

          <motion.div
            initial={{
              opacity: 0,
              x: -50,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.8,
            }}
            viewport={{ once: true }}
            className="lg:col-span-5 space-y-8"
          >

            {/* Main Info Card */}
            <div
              className="
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
              {/* Glow */}
              <div className="absolute top-0 left-0 w-40 h-40 bg-cyan-500/10 blur-[80px] rounded-full"></div>

              <div className="relative z-10">

                {/* Icon */}
                <div className="w-max p-4 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-500 mb-6 shadow-xl">
                  <Terminal size={28} />
                </div>

                {/* Title */}
                <h3 className="text-3xl font-bold mb-5">
                  Connection Terminal
                </h3>

                {/* Description */}
                <p className="text-gray-400 leading-relaxed mb-8">
                  Whether it's full stack engineering, modern UI systems,
                  offensive security research or scalable backend architecture —
                  I'm always excited to collaborate on meaningful projects.
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-3">
                  {[
                    "Web Security",
                    "MERN Stack",
                    "CTF",
                    "API Development",
                    "Modern UI",
                  ].map((tag, index) => (
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
                      {tag}
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* Social Cards */}
            <div className="grid sm:grid-cols-3 gap-5">

              {socials.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{
                    y: -8,
                    scale: 1.03,
                  }}
                  className="
                    relative
                    overflow-hidden
                    rounded-2xl
                    border
                    border-white/10
                    bg-white/[0.03]
                    backdrop-blur-2xl
                    p-5
                    text-center
                    group
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
                        mx-auto
                        p-4
                        rounded-2xl
                        bg-gradient-to-r
                        ${social.color}
                        mb-4
                      `}
                    >
                      {social.icon}
                    </div>

                    {/* Name */}
                    <h4 className="font-semibold">
                      {social.name}
                    </h4>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* ================= RIGHT SIDE ================= */}

          <motion.div
            initial={{
              opacity: 0,
              x: 50,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.8,
            }}
            viewport={{ once: true }}
            className="lg:col-span-7"
          >

            {/* Form Card */}
            <div
              className="
                relative
                overflow-hidden
                rounded-[32px]
                border
                border-white/10
                bg-white/[0.03]
                backdrop-blur-2xl
                p-8 md:p-10
              "
            >
              {/* Glow */}
              <div className="absolute bottom-0 right-0 w-52 h-52 bg-purple-500/10 blur-[100px] rounded-full"></div>

              {/* Top Row */}
              <div className="flex flex-col lg:flex-row gap-10 items-center mb-10">

                {/* Lottie */}
                <div className="w-full max-w-[260px]">
                  <Lottie
                    animationData={contact}
                    className="w-full opacity-90"
                  />
                </div>

                {/* Text */}
                <div>

                  <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full mb-5">
                    <Shield size={15} className="text-cyan-400" />

                    <span className="text-xs uppercase tracking-[0.2em] text-gray-300">
                      Secure Channel
                    </span>
                  </div>

                  <h3 className="text-4xl font-black leading-tight mb-4">
                    Start A
                    <br />

                    <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                      Conversation
                    </span>
                  </h3>

                  <p className="text-gray-400 leading-relaxed">
                    Have a project idea, collaboration opportunity or technical
                    discussion in mind? Send a message and let's connect.
                  </p>
                </div>
              </div>

              {/* ================= FORM ================= */}

              <form className="space-y-6 relative z-10">

                {/* Input Grid */}
                <div className="grid md:grid-cols-2 gap-6">

                  {/* Name */}
                  <div className="space-y-3">
                    <label className="text-sm text-gray-400">
                      Your Name
                    </label>

                    <input
                      type="text"
                      placeholder="John Doe"
                      className="
                        w-full
                        bg-white/[0.04]
                        border
                        border-white/10
                        rounded-2xl
                        px-5
                        py-4
                        text-white
                        placeholder-gray-500
                        focus:outline-none
                        focus:border-cyan-400
                        transition-all
                      "
                    />
                  </div>

                  {/* Email */}
                  <div className="space-y-3">
                    <label className="text-sm text-gray-400">
                      Email Address
                    </label>

                    <input
                      type="email"
                      placeholder="johndoe@example.com"
                      className="
                        w-full
                        bg-white/[0.04]
                        border
                        border-white/10
                        rounded-2xl
                        px-5
                        py-4
                        text-white
                        placeholder-gray-500
                        focus:outline-none
                        focus:border-cyan-400
                        transition-all
                      "
                    />
                  </div>
                </div>

                {/* Message */}
                <div className="space-y-3">
                  <label className="text-sm text-gray-400">
                    Your Message
                  </label>

                  <textarea
                    rows="6"
                    placeholder="Let's build something exceptional..."
                    className="
                      w-full
                      resize-none
                      bg-white/[0.04]
                      border
                      border-white/10
                      rounded-2xl
                      px-5
                      py-4
                      text-white
                      placeholder-gray-500
                      focus:outline-none
                      focus:border-cyan-400
                      transition-all
                    "
                  />
                </div>

                {/* Buttons */}
                <div className="flex flex-wrap gap-5 pt-4">

                  {/* Send Button */}
                  <motion.button
                    whileHover={{
                      scale: 1.05,
                    }}
                    whileTap={{
                      scale: 0.95,
                    }}
                    type="submit"
                    className="
                      flex
                      items-center
                      gap-3
                      px-8
                      py-4
                      rounded-2xl
                      bg-gradient-to-r
                      from-cyan-500
                      to-blue-500
                      font-semibold
                      shadow-xl
                    "
                  >
                    <Send size={18} />

                    <span>Send Message</span>
                  </motion.button>

                  {/* Email Button */}
                  <motion.a
                    whileHover={{
                      scale: 1.05,
                    }}
                    whileTap={{
                      scale: 0.95,
                    }}
                    href="mailto:khanshihab252@gmail.com"
                    className="
                      flex
                      items-center
                      gap-3
                      px-8
                      py-4
                      rounded-2xl
                      border
                      border-white/10
                      bg-white/[0.04]
                      hover:border-cyan-400
                      transition-all
                    "
                  >
                    <Mail size={18} />

                    <span>Direct Email</span>
                  </motion.a>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;