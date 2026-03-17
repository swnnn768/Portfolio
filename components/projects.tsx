"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ExternalLink, Github, ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "E-Commerce Platform",
    description:
      "Plateforme de commerce electronique complete avec panier, paiement Stripe et gestion des commandes en temps reel.",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=600&fit=crop",
    tags: ["Next.js", "TypeScript", "Stripe", "Prisma"],
    github: "https://github.com",
    live: "https://example.com",
    color: "from-violet-500/20 to-purple-500/20",
  },
  {
    title: "Dashboard Analytics",
    description:
      "Tableau de bord interactif avec visualisations de donnees en temps reel et rapports personnalisables.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
    tags: ["React", "D3.js", "Node.js", "MongoDB"],
    github: "https://github.com",
    live: "https://example.com",
    color: "from-blue-500/20 to-cyan-500/20",
  },
  {
    title: "Application Mobile",
    description:
      "Application mobile cross-platform pour la gestion de taches avec synchronisation cloud et notifications.",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop",
    tags: ["React Native", "Firebase", "Redux", "Expo"],
    github: "https://github.com",
    live: "https://example.com",
    color: "from-pink-500/20 to-rose-500/20",
  },
  {
    title: "Portfolio 3D",
    description:
      "Portfolio immersif avec animations 3D, effets de particules et interactions utilisateur avancees.",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&h=600&fit=crop",
    tags: ["Three.js", "GSAP", "WebGL", "Blender"],
    github: "https://github.com",
    live: "https://example.com",
    color: "from-amber-500/20 to-orange-500/20",
  },
];

function ProjectCard({
  project,
  index,
}: {
  project: (typeof projects)[0];
  index: number;
}) {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 100 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative"
    >
      <div
        className={`relative overflow-hidden rounded-3xl glass glass-hover transition-all duration-500 ${
          isHovered ? "scale-[1.02]" : ""
        }`}
      >
        {/* Gradient overlay */}
        <div
          className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
        />

        {/* Image */}
        <div className="relative h-64 overflow-hidden">
          <motion.img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
            animate={{ scale: isHovered ? 1.1 : 1 }}
            transition={{ duration: 0.5 }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />

          {/* Links overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            className="absolute inset-0 flex items-center justify-center gap-4"
          >
            <motion.a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-4 rounded-full glass text-foreground hover:text-primary transition-colors"
              aria-label="Voir sur GitHub"
            >
              <Github className="w-6 h-6" />
            </motion.a>
            <motion.a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-4 rounded-full glass text-foreground hover:text-primary transition-colors"
              aria-label="Voir le site"
            >
              <ExternalLink className="w-6 h-6" />
            </motion.a>
          </motion.div>
        </div>

        {/* Content */}
        <div className="relative p-6">
          <div className="flex items-start justify-between mb-4">
            <h3 className="text-xl font-bold text-foreground group-hover:text-gradient transition-all">
              {project.title}
            </h3>
            <motion.div
              animate={{ rotate: isHovered ? 45 : 0 }}
              className="text-muted-foreground group-hover:text-primary transition-colors"
            >
              <ArrowUpRight className="w-5 h-5" />
            </motion.div>
          </div>

          <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
            {project.description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-32 px-6" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 text-sm font-medium glass rounded-full text-primary mb-6">
            Portfolio
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-foreground">Mes </span>
            <span className="text-gradient">projets recents</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Decouvrez une selection de mes realisations les plus recentes,
            alliant design moderne et technologies innovantes.
          </p>
        </motion.div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>

        {/* View all button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-12"
        >
          <motion.a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full glass glass-hover font-semibold transition-all"
          >
            <span>Voir tous les projets</span>
            <ArrowUpRight className="w-5 h-5" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
