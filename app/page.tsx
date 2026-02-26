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

function Section({ children, className = "", id }: { children: React.ReactNode; className?: string; id?: string }) {
  return (
    <motion.section
      id={id}
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

const clients = ["IPADE", "U. Panamericana", "Tequila San Matías", "De la Rosa", "Blen", "Kibox"];

export default function Home() {
  return (
    <main className="relative">
      {/* NAV */}
      <nav className="fixed top-0 left-0 right-0 z-50 mix-blend-difference">
        <div className="flex justify-between items-center px-6 md:px-12 py-6">
          <a href="#" className="text-white font-serif text-lg tracking-wide hover:text-white/80 transition-colors">Daniel Azpe</a>
          <div className="hidden md:flex gap-8 text-white/70 text-xs tracking-editorial">
            <a href="#trabajo" className="hover:text-white transition-colors">Trabajo</a>
            <a href="#sobre-mi" className="hover:text-white transition-colors">Sobre mí</a>
            <a href="#contacto" className="hover:text-white transition-colors">Contacto</a>
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
          className="relative text-center z-10 px-6"
        >
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="mt-6 text-warm-gray font-serif text-lg md:text-xl italic mb-8"
          >
            Artista · Storyteller · Builder
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 1 }}
            className="font-serif text-4xl md:text-6xl lg:text-7xl font-light text-ink tracking-wide leading-tight max-w-4xl mx-auto"
          >
            Creo para que algo quede.<br />Para que algo cambie.
          </motion.h1>
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

      {/* TRABAJO */}
      <Section id="trabajo" className="py-24 md:py-40 px-6 md:px-12 lg:px-24 bg-ink text-cream">
        <div className="max-w-7xl mx-auto">
          <motion.p variants={fadeUp} className="tracking-editorial text-warm-gray mb-8">Trabajo</motion.p>
          
          {/* PARTE A — Lo que hago */}
          <motion.h2 variants={fadeUp} className="font-serif text-4xl md:text-6xl font-light mb-20">
            Lo que hago
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-12 md:gap-16 mb-32">
            {[
              {
                icon: "🎬",
                title: "Cine & Documental",
                desc: "Historias que merecen ser contadas con la imagen que merecen. Documental, cortometraje, video para marcas.",
                img: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=600&q=80",
              },
              {
                icon: "🤖",
                title: "Creatividad + Tecnología",
                desc: "Uso inteligencia artificial para crear lo que antes no era posible. Pinturas que cobran vida, nuevos formatos, herramientas para creativos.",
                img: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&q=80",
              },
              {
                icon: "📦",
                title: "Productos Digitales",
                desc: "Herramientas y recursos para creativos. Pronto.",
                img: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=600&q=80",
              },
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

          {/* PARTE B — Faraway Land */}
          <motion.div variants={fadeUp} className="mb-32">
            <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
              <div>
                <ParallaxImage
                  src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80"
                  alt="Faraway Land"
                  className="aspect-[4/3] rounded-sm"
                />
              </div>
              <div>
                <span className="tracking-editorial text-warm-gray">Proyecto destacado</span>
                <h3 className="font-serif text-3xl md:text-5xl font-light mt-4 mb-4">Faraway Land</h3>
                <p className="text-warm-gray leading-relaxed text-lg mb-6">
                  Largometraje documental que recorrió 10 festivales en 5 países.
                </p>
                <ul className="space-y-2 text-cream/80">
                  <li className="flex items-start gap-3">
                    <span className="text-warm-gray">·</span>
                    <span>Mejor Largometraje — Festival de Cine de Madrid</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-warm-gray">·</span>
                    <span>Mejor Fotografía — Festival de Cine de Madrid</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-warm-gray">·</span>
                    <span>Mejor Documental — Festival Internacional de Guayaquil</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* PARTE C — Clientes */}
          <motion.div variants={fadeUp} className="text-center">
            <p className="tracking-editorial text-warm-gray mb-12">
              Clientes
            </p>
            <div className="flex flex-wrap justify-center gap-8 md:gap-14">
              {clients.map((client) => (
                <span
                  key={client}
                  className="font-serif text-xl md:text-2xl text-cream/60 hover:text-cream transition-colors duration-500"
                >
                  {client}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </Section>

      {/* SOBRE MÍ */}
      <Section id="sobre-mi" className="py-24 md:py-40 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 md:gap-24 items-center">
          <motion.div variants={fadeUp}>
            <ParallaxImage
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80"
              alt="Portrait"
              className="aspect-[3/4] rounded-sm grayscale hover:grayscale-0 transition-all duration-700"
            />
          </motion.div>
          <motion.div variants={fadeUp}>
            <p className="tracking-editorial text-warm-gray mb-8">Sobre mí</p>
            <p className="font-serif text-3xl md:text-4xl font-light leading-tight text-ink mb-8">
              Soy Daniel.
            </p>
            <div className="space-y-6 text-ink-light leading-relaxed text-lg max-w-lg">
              <p>
                Hago documentales que cuentan lo que importa. Creo video que se siente como cine. Construyo herramientas con inteligencia artificial.
              </p>
              <p>
                Mi documental <em>Faraway Land</em> ganó 3 premios internacionales y recorrió 10 festivales en 5 países. He trabajado con IPADE, Tequila San Matías, De la Rosa y Universidad Panamericana.
              </p>
              <p>
                Creo en que lo más importante es hacer cosas que importen — con el nivel de detalle y belleza que merecen.
              </p>
              <p className="text-warm-gray">
                Guadalajara, MX
              </p>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* CONTACTO */}
      <Section id="contacto" className="py-24 md:py-40 px-6 md:px-12 lg:px-24 bg-ink text-cream">
        <div className="max-w-4xl mx-auto text-center">
          <motion.p variants={fadeUp} className="tracking-editorial text-warm-gray mb-8">Contacto</motion.p>
          <motion.h2 variants={fadeUp} className="font-serif text-5xl md:text-7xl font-light mb-8">
            Platiquemos.
          </motion.h2>
          <motion.p variants={fadeUp} className="text-warm-gray text-lg max-w-lg mx-auto mb-12">
            ¿Tienes una historia que contar? ¿Un proyecto que necesita verse como merece?
          </motion.p>
          <motion.div variants={fadeUp} className="space-y-4">
            <a
              href="mailto:hola@danielazpe.com"
              className="inline-block font-serif text-2xl md:text-3xl text-cream hover:text-sand transition-colors border-b border-cream/30 hover:border-sand pb-1"
            >
              hola@danielazpe.com
            </a>
            <div className="flex justify-center gap-8 mt-8">
              <a href="https://instagram.com/danielazpe" target="_blank" rel="noopener noreferrer" className="tracking-editorial text-warm-gray hover:text-cream transition-colors">Instagram</a>
              <a href="https://linkedin.com/in/danielazpe" target="_blank" rel="noopener noreferrer" className="tracking-editorial text-warm-gray hover:text-cream transition-colors">LinkedIn</a>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* FOOTER */}
      <footer className="py-8 px-6 md:px-12 bg-ink text-warm-gray/50 border-t border-warm-gray/10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-xs tracking-editorial">
          <span>Daniel Azpe © 2026</span>
          <div className="flex gap-6">
            <a href="https://instagram.com/danielazpe" target="_blank" rel="noopener noreferrer" className="hover:text-cream transition-colors">Instagram</a>
            <a href="https://linkedin.com/in/danielazpe" target="_blank" rel="noopener noreferrer" className="hover:text-cream transition-colors">LinkedIn</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
