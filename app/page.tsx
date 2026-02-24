"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const sections = {
  home: {
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1400&q=80",
    content: (
      <div className="text-center">
        <h1 className="font-serif text-5xl md:text-8xl font-light leading-[1.05] mb-6">
          Daniel<br />Azpe
        </h1>
        <p className="text-xs md:text-sm font-light tracking-[4px] uppercase opacity-70">
          Artista <span className="mx-2 opacity-40">·</span> Storyteller <span className="mx-2 opacity-40">·</span> Builder
        </p>
      </div>
    ),
  },
  trabajo: {
    image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=1400&q=80",
    content: (
      <div className="max-w-2xl">
        <span className="text-[10px] tracking-[4px] uppercase opacity-40 block mb-10">Lo que hago</span>
        <div className="space-y-10">
          <div>
            <h3 className="font-serif text-3xl md:text-4xl font-light mb-2">🎬 Cine & Documental</h3>
            <p className="text-sm md:text-base font-light opacity-70">Tu historia merece verse como película.</p>
          </div>
          <div>
            <h3 className="font-serif text-3xl md:text-4xl font-light mb-2">🤖 Creatividad + Tecnología</h3>
            <p className="text-sm md:text-base font-light opacity-70">El futuro de crear ya llegó.</p>
          </div>
          <div>
            <h3 className="font-serif text-3xl md:text-4xl font-light mb-2">📦 Productos para Creativos</h3>
            <p className="text-sm md:text-base font-light opacity-70 italic">Próximamente</p>
          </div>
        </div>
      </div>
    ),
  },
  "sobre mí": {
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80",
    content: (
      <div className="max-w-lg">
        <span className="text-[10px] tracking-[4px] uppercase opacity-40 block mb-10">Quién soy</span>
        <p className="font-serif text-xl md:text-[26px] leading-[1.6] mb-8">
          Hago documentales que cuentan lo que importa. Creo video que se siente como cine. Construyo herramientas con inteligencia artificial.
        </p>
        <blockquote className="font-serif italic text-2xl md:text-3xl leading-[1.4] border-l-2 border-white/30 pl-6 mb-8">
          Creo para que algo quede.<br />Para que algo cambie.
        </blockquote>
        <p className="text-[11px] tracking-[3px] uppercase opacity-35">
          Desde Guadalajara, para el mundo.
        </p>
      </div>
    ),
  },
  proyectos: {
    image: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=1400&q=80",
    content: (
      <div className="max-w-xl">
        <span className="text-[10px] tracking-[4px] uppercase opacity-40 block mb-10">Proyectos</span>
        <div className="mb-12">
          <h3 className="font-serif text-4xl md:text-5xl font-light mb-4">Faraway Land</h3>
          <div className="text-xs tracking-[2px] uppercase opacity-50 leading-loose">
            3 premios internacionales · 10 festivales · 5 países
          </div>
        </div>
        <div className="border-t border-white/15 pt-8">
          <span className="text-[10px] tracking-[4px] uppercase opacity-40 block mb-6">Clientes</span>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            {["IPADE", "U. Panamericana", "Tequila San Matías", "De la Rosa", "Blen", "Kibox"].map((c) => (
              <span key={c} className="font-serif text-lg opacity-40">{c}</span>
            ))}
          </div>
        </div>
      </div>
    ),
  },
  contacto: {
    image: "https://images.unsplash.com/photo-1504198453319-5ce911bafcde?w=1400&q=80",
    content: (
      <div className="max-w-md text-center">
        <h2 className="font-serif text-5xl md:text-7xl font-light mb-6">Platiquemos.</h2>
        <p className="text-base md:text-lg font-light opacity-70 leading-relaxed mb-10">
          ¿Tienes una historia que contar?<br />¿Un proyecto que necesita verse como merece?
        </p>
        <a href="mailto:hola@danielazpe.com"
          className="font-serif text-xl md:text-2xl border-b border-white/20 pb-1 hover:border-white/60 transition-colors duration-300">
          hola@danielazpe.com
        </a>
        <div className="flex justify-center gap-6 mt-8">
          <a href="#" className="text-xs tracking-[2px] uppercase opacity-40 hover:opacity-100 transition-opacity">Instagram</a>
          <a href="#" className="text-xs tracking-[2px] uppercase opacity-40 hover:opacity-100 transition-opacity">LinkedIn</a>
        </div>
      </div>
    ),
  },
};

type SectionKey = keyof typeof sections;

export default function Home() {
  const [active, setActive] = useState<SectionKey>("home");
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems: SectionKey[] = ["home", "trabajo", "sobre mí", "proyectos", "contacto"];

  return (
    <main className="h-screen w-screen overflow-hidden relative bg-black text-white">
      {/* Background image with crossfade */}
      <AnimatePresence mode="wait">
        <motion.div
          key={active}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0"
        >
          <img
            src={sections[active].image}
            alt=""
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
        </motion.div>
      </AnimatePresence>

      {/* Grain */}
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none z-20" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
      }} />

      {/* NAV */}
      <nav className="absolute top-0 left-0 right-0 z-30 flex justify-between items-center px-6 md:px-12 py-6 md:py-8">
        <button onClick={() => setActive("home")}
          className="font-serif text-xl md:text-2xl font-light tracking-[3px] uppercase hover:opacity-70 transition-opacity">
          Daniel Azpe
        </button>
        <div className="hidden md:flex gap-8">
          {navItems.map((item) => (
            <button key={item} onClick={() => setActive(item)}
              className={`text-xs tracking-[2px] uppercase transition-opacity duration-300 ${active === item ? "opacity-100" : "opacity-40 hover:opacity-70"}`}>
              {item}
            </button>
          ))}
        </div>
        <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden flex flex-col gap-[5px] w-6" aria-label="Menu">
          <motion.span animate={menuOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }} className="block h-[1.5px] w-full bg-white" />
          <motion.span animate={menuOpen ? { opacity: 0 } : { opacity: 1 }} className="block h-[1.5px] w-full bg-white" />
          <motion.span animate={menuOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }} className="block h-[1.5px] w-full bg-white" />
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-black/95 backdrop-blur-lg flex flex-col items-center justify-center gap-8">
            <button onClick={() => setMenuOpen(false)} className="absolute top-6 right-6 text-white text-2xl">✕</button>
            {navItems.map((item, i) => (
              <motion.button key={item}
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
                onClick={() => { setActive(item); setMenuOpen(false); }}
                className={`font-serif text-3xl font-light tracking-[3px] uppercase ${active === item ? "opacity-100" : "opacity-50"}`}>
                {item}
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* CENTER CONTENT */}
      <div className="absolute inset-0 z-10 flex items-center justify-center px-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {sections[active].content}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Bottom bar */}
      <div className="absolute bottom-0 left-0 right-0 z-30 flex justify-between items-end px-6 md:px-12 py-6 md:py-8">
        <div className="hidden md:flex gap-12">
          {["Timeless Studios", "Proyectos", "Bodas"].map((t) => (
            <span key={t} className="text-[10px] tracking-[2px] uppercase opacity-30">{t}</span>
          ))}
        </div>
        <div className="flex gap-1 ml-auto">
          {navItems.map((item) => (
            <button key={item} onClick={() => setActive(item)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${active === item ? "bg-white" : "bg-white/20"}`}
            />
          ))}
        </div>
      </div>
    </main>
  );
}
