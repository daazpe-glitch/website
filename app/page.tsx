"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] as const } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.15 } },
};

function Section({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={stagger}
      className={className}
    >
      {children}
    </motion.section>
  );
}

function ParallaxImage({ src, alt, className = "" }: { src: string; alt: string; className?: string }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);
  return (
    <div ref={ref} className={`overflow-hidden ${className}`}>
      <motion.img
        src={src}
        alt={alt}
        style={{ y }}
        className="w-full h-full object-cover scale-110"
        loading="lazy"
      />
    </div>
  );
}

// --- PROJECTS DATA ---
const projects = [
  {
    title: "Faraway Land",
    desc: "Documental largometraje — La historia de buscar algo más allá",
    img: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
  },
  {
    title: "Cuando el Agua Calla",
    desc: "Documental — Las voces que el río se llevó",
    img: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800&q=80",
  },
  {
    title: "Producción Corporativa",
    desc: "Storytelling visual para marcas que quieren decir algo real",
    img: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=800&q=80",
  },
  {
    title: "Herramientas Creativas",
    desc: "Software y automatización para el flujo creativo del futuro",
    img: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&q=80",
  },
];

const clients = ["IPADE", "UP", "San Matías", "De la Rosa", "Blen", "Kibox"];

export default function Home() {
  return (
    <main className="relative">
      {/* NAV */}
      <nav className="fixed top-0 left-0 right-0 z-50 mix-blend-difference">
        <div className="flex justify-between items-center px-6 md:px-12 py-6">
          <span className="text-white font-serif text-lg tracking-wide">DA</span>
          <div className="hidden md:flex gap-8 text-white/70 text-xs tracking-editorial">
            <a href="#intro" className="hover:text-white transition-colors">Intro</a>
            <a href="#work" className="hover:text-white transition-colors">Trabajo</a>
            <a href="#projects" className="hover:text-white transition-colors">Proyectos</a>
            <a href="#contact" className="hover:text-white transition-colors">Contacto</a>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1533577116850-9cc66cad8a9b?w=1600&q=80"
            alt="Hero"
            className="w-full h-full object-cover opacity-40 grayscale"
          />
          <div className="absolute inset-0 bg-cream/30" />
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="relative text-center z-10"
        >
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="tracking-editorial text-warm-gray mb-6"
          >
            I N T R O D U C I N G
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 1 }}
            className="font-serif text-6xl md:text-8xl lg:text-9xl font-light text-ink tracking-wide"
          >
            Daniel Azpe
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="mt-6 text-warm-gray font-serif text-lg md:text-xl italic"
          >
            Artista · Creador · Storyteller
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
            className="mt-16"
          >
            <div className="w-px h-16 bg-warm-gray/40 mx-auto animate-pulse" />
          </motion.div>
        </motion.div>
      </section>

      {/* INTRO */}
      <Section className="py-24 md:py-40 px-6 md:px-12 lg:px-24" >
        <div id="intro" className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 md:gap-24 items-center">
          <motion.div variants={fadeUp}>
            <p className="tracking-editorial text-warm-gray mb-8">Quién soy</p>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light leading-tight mb-8">
              Dear diary,
            </h2>
            <p className="text-ink-light leading-relaxed text-lg max-w-lg">
              Creo cosas hermosas que trascienden. Desde documentales que cuentan lo que importa,
              hasta herramientas que empujan los límites de la creatividad.
            </p>
            <p className="text-ink-light leading-relaxed text-lg max-w-lg mt-4">
              Vivo entre cámaras, código y conversaciones que cambian perspectivas.
              Guadalajara, México — pero las historias no tienen fronteras.
            </p>
            <p className="font-serif italic text-warm-gray mt-8 text-lg">— Daniel</p>
          </motion.div>
          <motion.div variants={fadeUp}>
            <ParallaxImage
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80"
              alt="Portrait"
              className="aspect-[3/4] rounded-sm grayscale hover:grayscale-0 transition-all duration-700"
            />
          </motion.div>
        </div>
      </Section>

      {/* LO QUE HAGO */}
      <Section className="py-24 md:py-40 px-6 md:px-12 lg:px-24 bg-ink text-cream" >
        <div id="work" className="max-w-7xl mx-auto">
          <motion.p variants={fadeUp} className="tracking-editorial text-warm-gray mb-8">Lo que hago</motion.p>
          <motion.h2 variants={fadeUp} className="font-serif text-4xl md:text-6xl font-light mb-20">
            Cada proyecto es una<br />página en blanco.
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-16 md:gap-24">
            {[
              { icon: "🎬", title: "Producción & Cine", desc: "Hago que las historias se vean como merecen. Dirección, fotografía, post-producción.", img: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=600&q=80" },
              { icon: "🎥", title: "Documental", desc: "Cuento lo que importa. Historias reales que merecen ser escuchadas.", img: "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=600&q=80" },
              { icon: "🤖", title: "Creatividad + Tech", desc: "Uso herramientas del futuro para crear lo que aún no existía.", img: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&q=80" },
              { icon: "📦", title: "Productos", desc: "Herramientas para creativos que quieren ir más rápido y más lejos.", img: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=600&q=80" },
            ].map((item, i) => (
              <motion.div key={i} variants={fadeUp} className="group cursor-pointer">
                <div className="overflow-hidden aspect-[16/10] mb-6 rounded-sm">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                    loading="lazy"
                  />
                </div>
                <p className="text-2xl mb-1">
                  <span className="mr-2">{item.icon}</span>
                  <span className="font-serif">{item.title}</span>
                </p>
                <p className="text-warm-gray text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* PROJECTS */}
      <Section className="py-24 md:py-40 px-6 md:px-12 lg:px-24">
        <div id="projects" className="max-w-7xl mx-auto">
          <motion.p variants={fadeUp} className="tracking-editorial text-warm-gray mb-8">Proyectos</motion.p>
          <motion.h2 variants={fadeUp} className="font-serif text-4xl md:text-6xl font-light mb-20">
            Trabajo seleccionado.
          </motion.h2>
          <div className="space-y-24 md:space-y-40">
            {projects.map((project, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className={`grid md:grid-cols-2 gap-8 md:gap-16 items-center ${i % 2 === 1 ? "md:direction-rtl" : ""}`}
              >
                <div className={i % 2 === 1 ? "md:order-2" : ""}>
                  <ParallaxImage
                    src={project.img}
                    alt={project.title}
                    className="aspect-[4/3] rounded-sm grayscale hover:grayscale-0 transition-all duration-700"
                  />
                </div>
                <div className={i % 2 === 1 ? "md:order-1" : ""}>
                  <span className="tracking-editorial text-warm-gray">0{i + 1}</span>
                  <h3 className="font-serif text-3xl md:text-4xl font-light mt-4 mb-4">{project.title}</h3>
                  <p className="text-ink-light leading-relaxed">{project.desc}</p>
                  <button className="mt-6 tracking-editorial text-ink hover:text-warm-gray transition-colors border-b border-ink hover:border-warm-gray pb-1">
                    Ver más
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* CREDIBILITY */}
      <Section className="py-24 md:py-32 px-6 md:px-12 lg:px-24 border-t border-sand/50">
        <div className="max-w-5xl mx-auto text-center">
          <motion.p variants={fadeUp} className="tracking-editorial text-warm-gray mb-12">
            Han confiado en mi trabajo
          </motion.p>
          <motion.div variants={fadeUp} className="flex flex-wrap justify-center gap-8 md:gap-16">
            {clients.map((client) => (
              <span
                key={client}
                className="font-serif text-2xl md:text-3xl text-warm-gray/60 hover:text-ink transition-colors duration-500"
              >
                {client}
              </span>
            ))}
          </motion.div>
          <motion.div variants={fadeUp} className="mt-16">
            <p className="tracking-editorial text-warm-gray mb-4">Reconocimientos</p>
            <p className="font-serif text-lg text-ink-light italic">
              Faraway Land — Selección oficial en festivales internacionales de cine
            </p>
          </motion.div>
        </div>
      </Section>

      {/* CONTACT */}
      <Section className="py-24 md:py-40 px-6 md:px-12 lg:px-24 bg-ink text-cream">
        <div id="contact" className="max-w-4xl mx-auto text-center">
          <motion.p variants={fadeUp} className="tracking-editorial text-warm-gray mb-8">Contacto</motion.p>
          <motion.h2 variants={fadeUp} className="font-serif text-5xl md:text-7xl font-light mb-8">
            Platiquemos.
          </motion.h2>
          <motion.p variants={fadeUp} className="text-warm-gray text-lg max-w-lg mx-auto mb-12">
            Si tienes un proyecto, una idea, o simplemente quieres decir hola —
            me encanta conocer gente que crea cosas con intención.
          </motion.p>
          <motion.div variants={fadeUp} className="space-y-4">
            <a
              href="mailto:hola@danielazpe.com"
              className="inline-block font-serif text-2xl md:text-3xl text-cream hover:text-sand transition-colors border-b border-cream/30 hover:border-sand pb-1"
            >
              hola@danielazpe.com
            </a>
            <div className="flex justify-center gap-8 mt-8">
              <a href="#" className="tracking-editorial text-warm-gray hover:text-cream transition-colors">Instagram</a>
              <a href="#" className="tracking-editorial text-warm-gray hover:text-cream transition-colors">LinkedIn</a>
              <a href="#" className="tracking-editorial text-warm-gray hover:text-cream transition-colors">YouTube</a>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* FOOTER */}
      <footer className="py-8 px-6 md:px-12 bg-ink text-warm-gray/50 border-t border-warm-gray/10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-xs tracking-editorial">
          <span>© 2026 Daniel Azpe</span>
          <span>Guadalajara, México</span>
        </div>
      </footer>
    </main>
  );
}
