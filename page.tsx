"use client";

import { useEffect } from "react";

import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaVuejs,
  FaNodeJs,
  FaPhp,
  FaPython,
  FaGit,
} from "react-icons/fa";

import {
  SiTailwindcss,
  SiSymfony,
  SiMysql,
  SiGithub,
  SiComposer,
} from "react-icons/si";

export default function Home() {
  useEffect(() => {
    const titles = document.querySelectorAll(".depth-title");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("depth-active");
          } else {
            entry.target.classList.remove("depth-active");
          }
        });
      },
      { threshold: 0.5 }
    );

    titles.forEach((title) => observer.observe(title));
    return () => observer.disconnect();
  }, []);

  return (
    <main className="relative bg-black text-white min-h-screen overflow-x-hidden scroll-smooth">
      {/* NAVBAR */}
      <nav className="fixed top-0 w-full flex justify-center gap-12 py-6 bg-black/40 backdrop-blur-lg z-50 tracking-widest text-sm">
        <a href="#home" className="hover:text-gray-400 transition">HOME</a>
        <a href="#about" className="hover:text-gray-400 transition">À PROPOS</a>
        <a href="#skills" className="hover:text-gray-400 transition">COMPÉTENCES</a>
        <a href="#projects" className="hover:text-gray-400 transition">PROJETS</a>
        <a href="#contact" className="hover:text-gray-400 transition">ME CONTACTER</a>
      </nav>

      {/* HOME */}
      <section id="home" className="h-screen flex flex-col justify-center items-center text-center px-6">
        <h1 className="intro-title text-4xl md:text-6xl font-extrabold tracking-[10px]">
          <span className="glitch" data-text="AKROUR SAWWAN">
            AKROUR SAWWAN
          </span>
        </h1>

        <div className="w-32 h-0.5 bg-white my-8 opacity-50"></div>

        <p className="text-gray-400 tracking-[6px] text-sm md:text-base">
          Etudiant en developpment WEB • Frontend | Backend
        </p>
      </section>

      {/* À PROPOS */}
      <section id="about" className="py-40 px-6 max-w-4xl mx-auto text-center">
        <h2 className="depth-title text-3xl mb-10 tracking-widest">À PROPOS DE MOI</h2>
        <p className="text-gray-300 leading-relaxed">
          Étudiant en développement web, chaque projet est pour moi une opportunité
          d’apprendre, d’améliorer ma méthode de travail et de développer des
          solutions toujours plus abouties.
          <br /><br />
          Mon objectif est d’évoluer continuellement afin de devenir un développeur
          complet, capable de transformer des idées en solutions concrètes et
          efficaces.
        </p>
      </section>

      {/* COMPÉTENCES */}
      <section id="skills" className="py-32 px-8 bg-black/60">
        <h2 className="depth-title text-3xl text-center mb-16 tracking-widest">MES COMPÉTENCES</h2>

        <div className="grid md:grid-cols-3 gap-10 max-w-5xl mx-auto text-center">
          <div className="border border-gray-700 p-8 hover:bg-white hover:text-black transition duration-500">
            <h3 className="mb-6 font-semibold text-lg">Front-End</h3>
            <ul className="space-y-4">
              <li className="flex items-center justify-center gap-3"><FaHtml5 /> HTML5</li>
              <li className="flex items-center justify-center gap-3"><FaCss3Alt /> CSS3</li>
              <li className="flex items-center justify-center gap-3"><FaJs /> JavaScript</li>
              <li className="flex items-center justify-center gap-3"><FaReact /> React</li>
              <li className="flex items-center justify-center gap-3"><FaVuejs /> Vue.js</li>
              <li className="flex items-center justify-center gap-3"><SiTailwindcss /> TailwindCSS</li>
            </ul>
          </div>

          <div className="border border-gray-700 p-8 hover:bg-white hover:text-black transition duration-500">
            <h3 className="mb-6 font-semibold text-lg">Back-End</h3>
            <ul className="space-y-4">
              <li className="flex items-center justify-center gap-3"><FaNodeJs /> Node.js</li>
              <li className="flex items-center justify-center gap-3"><FaPhp /> PHP</li>
              <li className="flex items-center justify-center gap-3"><SiSymfony /> Symfony</li>
              <li className="flex items-center justify-center gap-3"><SiMysql /> MySQL</li>
              <li className="flex items-center justify-center gap-3"><FaPython /> Python</li>
            </ul>
          </div>

          <div className="border border-gray-700 p-8 hover:bg-white hover:text-black transition duration-500">
            <h3 className="mb-6 font-semibold text-lg">Outils</h3>
            <ul className="space-y-4">
              <li className="flex items-center justify-center gap-3"><FaGit /> Git</li>
              <li className="flex items-center justify-center gap-3"><SiGithub /> GitHub</li>
              <li className="flex items-center justify-center gap-3"><SiComposer /> Composer</li>
              <li className="flex items-center justify-center gap-3"><SiSymfony /> Symfony CLI</li>
              <li className="flex items-center justify-center gap-3"><FaNodeJs /> Node.js</li>
            </ul>
          </div>
        </div>
      </section>

      {/* PROJETS */}
      <section id="projects" className="py-32 px-8 max-w-6xl mx-auto">
        <h2 className="depth-title text-3xl text-center mb-16 tracking-widest">MES PROJETS</h2>

        <div className="grid md:grid-cols-2 gap-10">
          <div className="border border-gray-700 p-8 hover:scale-105 transition duration-500 hover:bg-white hover:text-black">
            <h3 className="text-xl mb-4 font-semibold">BAP – Refonte du site LEXILALA</h3>
            <p>Modernisation du design et amélioration de l’ergonomie.</p>
          </div>

          <div className="border border-gray-700 p-8 hover:scale-105 transition duration-500 hover:bg-white hover:text-black">
            <h3 className="text-xl mb-4 font-semibold">BAP – Refonte du site CURIOSITIZ</h3>
            <p>Amélioration de l’expérience utilisateur.</p>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-32 px-8 text-center bg-black/60">
        <h2 className="depth-title text-3xl mb-10 tracking-widest">ME CONTACTER</h2>

        <div className="flex flex-col md:flex-row justify-center items-center gap-6">
          <a
            href="mailto:sawwan7555@gmail.com"
            className="border border-white px-8 py-3 hover:bg-white hover:text-black transition duration-500 tracking-widest text-sm"
          >
            EMAIL
          </a>

          <a
            href="https://github.com/swnnn768"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-white px-8 py-3 hover:bg-white hover:text-black transition duration-500 tracking-widest text-sm"
          >
            GITHUB
          </a>

          <a
            href="https://www.linkedin.com/in/sawwan-akrour-03142832b/"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-white px-8 py-3 hover:bg-white hover:text-black transition duration-500 tracking-widest text-sm"
          >
            LINKEDIN
          </a>
        </div>
      </section>

      {/* STYLES (sans jsx pour éviter l'erreur TypeScript) */}
      <style>{`
        @keyframes depthFloat {
          0% { transform: scale(1); text-shadow: 0 0 10px rgba(255,255,255,0.2); }
          50% { transform: scale(1.12); text-shadow: 0 0 35px rgba(255,255,255,0.45); }
          100% { transform: scale(1); text-shadow: 0 0 10px rgba(255,255,255,0.2); }
        }

        .depth-title { opacity: 0.3; transition: opacity 0.6s ease; }
        .depth-active { opacity: 1; animation: depthFloat 4.5s ease-in-out infinite; will-change: transform; }

        .intro-title { width: 100%; display: flex; justify-content: center; align-items: center; overflow: hidden; }

        .glitch { position: relative; display: inline-block; text-shadow: 0 0 14px rgba(255,255,255,0.25); }

        .glitch::before, .glitch::after {
          content: attr(data-text);
          position: absolute;
          left: 0; top: 0;
          width: 100%;
          opacity: 0.85;
          pointer-events: none;
        }

        .glitch::before {
          transform: translate(-1px, 0);
          text-shadow: -2px 0 rgba(255, 0, 80, 0.8);
          animation: glitchSlice1 2.2s infinite linear alternate-reverse;
        }

        .glitch::after {
          transform: translate(1px, 0);
          text-shadow: 2px 0 rgba(0, 180, 255, 0.8);
          animation: glitchSlice2 1.8s infinite linear alternate-reverse;
        }

        @keyframes glitchSlice1 {
          0% { clip-path: inset(0 0 75% 0); transform: translate(-2px, -1px); }
          20% { clip-path: inset(40% 0 35% 0); transform: translate(-3px, 0); }
          40% { clip-path: inset(10% 0 70% 0); transform: translate(-1px, 2px); }
          60% { clip-path: inset(20% 0 60% 0); transform: translate(-2px, -2px); }
          80% { clip-path: inset(35% 0 40% 0); transform: translate(-3px, 0); }
          100% { clip-path: inset(0 0 75% 0); transform: translate(-2px, 1px); }
        }

        @keyframes glitchSlice2 {
          0% { clip-path: inset(80% 0 0 0); transform: translate(2px, 1px); }
          20% { clip-path: inset(25% 0 50% 0); transform: translate(3px, -1px); }
          40% { clip-path: inset(60% 0 15% 0); transform: translate(2px, -2px); }
          60% { clip-path: inset(75% 0 5% 0); transform: translate(3px, 0); }
          80% { clip-path: inset(15% 0 60% 0); transform: translate(2px, 2px); }
          100% { clip-path: inset(80% 0 0 0); transform: translate(2px, -1px); }
        }
      `}</style>
    </main>
  );
}
