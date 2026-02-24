"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const sections = {
  home: {
    image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=1400&q=80",
    overlay: (
      <div className="absolute bottom-8 left-6 md:bottom-12 md:left-12 text-white" style={{ textShadow: "0 2px 30px rgba(0,0,0,0.4)" }}>
        <p className="text-xs md:text-sm font-light tracking-[3px] md:tracking-[4px] uppercase opacity-80">
          Artista <span className="mx-1.5 opacity-40">·</span> Storyteller <span className="mx-1.5 opacity-40">·</span> Builder
        </p>
      </div>
    ),
  },
  trabajo: {
    image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=1400&q=80",
    overlay: (
      <div className="absolute inset-0 flex items-center justify-center bg-black/30 px-6">
        <div className="max-w-xl text-white text-center">
          <span className="text-[10px] tracking-[4px] uppercase opacity-50 block mb-8">Lo que hago</span>
          <div className="space-y-6">
            <div>
              <h3 className="font-serif text-2xl md:text-3xl font-light">🎬 Cine & Documental</h3>
              <p className="text-sm font-light opacity-60 mt-1">Tu historia merece verse como película.</p>
            </div>
            <div>
              <h3 className="font-serif text-2xl md:text-3xl font-light">🤖 Creatividad + Tecnología</h3>
              <p className="text-sm font-light opacity-60 mt-1">El futuro de crear ya llegó.</p>
            </div>
            <div>
              <h3 className="font-serif text-2xl md:text-3xl font-light">📦 Productos para Creativos</h3>
              <p className="text-sm font-light opacity-60 mt-1 italic">Próximamente</p>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  "sobre mí": {
    image: "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=1400&q=80",
    overlay: (
      <div className="absolute inset-0 flex items-center bg-black/30 px-8 md:px-16">
        <div className="max-w-lg text-white">
          <span className="text-[10px] tracking-[4px] uppercase opacity-50 block mb-8">Quién soy</span>
          <p className="font-serif text-lg md:text-[24px] leading-[1.6] mb-6">
            Hago documentales que cuentan lo que importa. Creo video que se siente como cine. Construyo herramientas con inteligencia artificial.
          </p>
          <blockquote className="font-serif italic text-xl md:text-2xl leading-[1.4] border-l-2 border-white/30 pl-5 mb-6">
            Creo para que algo quede.<br />Para que algo cambie.
          </blockquote>
          <p className="text-[11px] tracking-[3px] uppercase opacity-35">
            Desde Guadalajara, para el mundo.
          </p>
        </div>
      </div>
    ),
  },
  proyectos: {
    image: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=1400&q=80",
    overlay: (
      <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/70 via-black/20 to-transparent px-8 md:px-16 pb-10 md:pb-16">
        <div className="text-white">
          <span className="text-[10px] tracking-[4px] uppercase opacity-50 block mb-6">Proyectos</span>
          <h3 className="font-serif text-3xl md:text-5xl font-light mb-3">Faraway Land</h3>
          <div className="text-xs tracking-[2px] uppercase opacity-50 leading-loose">
            3 premios internacionales · 10 festivales · 5 países
          </div>
          <div className="mt-6 pt-6 border-t border-white/10 flex flex-wrap gap-x-6 gap-y-1">
            {["IPADE", "U. Panamericana", "Tequila San Matías", "De la Rosa", "Blen", "Kibox"].map((c) => (
              <span key={c} className="font-serif text-sm opacity-35">{c}</span>
            ))}
          </div>
        </div>
      </div>
    ),
  },
  contacto: {
    image: "https://images.unsplash.com/photo-1504198453319-5ce911bafcde?w=1400&q=80",
    overlay: (
      <div className="absolute inset-0 flex items-center justify-center bg-black/40 px-6">
        <div className="max-w-md text-white text-center">
          <h2 className="font-serif text-4xl md:text-6xl font-light mb-5">Platiquemos.</h2>
          <p className="text-sm md:text-base font-light opacity-70 leading-relaxed mb-8">
            ¿Tienes una historia que contar?<br />¿Un proyecto que necesita verse como merece?
          </p>
          <a href="mailto:hola@danielazpe.com"
            className="font-serif text-lg md:text-xl border-b border-white/20 pb-1 hover:border-white/60 transition-colors duration-300">
            hola@danielazpe.com
          </a>
          <div className="flex justify-center gap-6 mt-6">
            <a href="#" className="text-xs tracking-[2px] uppercase opacity-40 hover:opacity-100 transition-opacity">Instagram</a>
            <a href="#" className="text-xs tracking-[2px] uppercase opacity-40 hover:opacity-100 transition-opacity">LinkedIn</a>
          </div>
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
    <main className="h-screen w-screen overflow-hidden bg-[#f0ebe4] flex flex-col">
      {/* Grain */}
      <div className="fixed inset-0 opacity-[0.03] pointer-events-none z-50" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
      }} />

      {/* NAV */}
      <nav className="flex justify-between items-center px-6 md:px-12 py-5 md:py-7 border-b border-black/5 z-30 flex-shrink-0">
        <button onClick={() => setActive("home")}
          className="font-serif text-xl md:text-2xl font-light tracking-[3px] uppercase hover:opacity-60 transition-opacity">
          Daniel Azpe
        </button>
        <div className="hidden md:flex gap-8">
          {navItems.map((item) => (
            <button key={item} onClick={() => setActive(item)}
              className={`text-xs tracking-[2px] uppercase transition-opacity duration-300 ${active === item ? "opacity-100" : "opacity-35 hover:opacity-70"}`}>
              {item}
            </button>
          ))}
        </div>
        <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden flex flex-col gap-[5px] w-6" aria-label="Menu">
          <motion.span animate={menuOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }} className="block h-[1.5px] w-full bg-[#1a1a1a]" />
          <motion.span animate={menuOpen ? { opacity: 0 } : { opacity: 1 }} className="block h-[1.5px] w-full bg-[#1a1a1a]" />
          <motion.span animate={menuOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }} className="block h-[1.5px] w-full bg-[#1a1a1a]" />
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-[#f0ebe4]/98 backdrop-blur-lg flex flex-col items-center justify-center gap-8">
            <button onClick={() => setMenuOpen(false)} className="absolute top-6 right-6 text-xl">✕</button>
            {navItems.map((item, i) => (
              <motion.button key={item}
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
                onClick={() => { setActive(item); setMenuOpen(false); }}
                className={`font-serif text-3xl font-light tracking-[3px] uppercase ${active === item ? "opacity-100" : "opacity-40"}`}>
                {item}
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* IMAGE FRAME — the "marco" */}
      <div className="flex-1 px-4 md:px-12 py-4 md:py-5 min-h-0">
        <div className="relative w-full h-full overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.7 }}
              className="absolute inset-0"
            >
              <img
                src={sections[active].image}
                alt=""
                className="w-full h-full object-cover contrast-[1.05]"
              />
              {/* Content overlay */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={active + "-content"}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="absolute inset-0"
                >
                  {sections[active].overlay}
                </motion.div>
              </AnimatePresence>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="flex justify-between items-center px-6 md:px-12 py-4 md:py-5 border-t border-black/5 flex-shrink-0">
        <div className="hidden md:flex gap-10">
          {["Timeless Studios", "Proyectos", "Bodas"].map((t) => (
            <span key={t} className="text-[10px] tracking-[2px] uppercase opacity-30 cursor-pointer hover:opacity-60 transition-opacity">{t}</span>
          ))}
        </div>
        <div className="flex gap-1.5 ml-auto">
          {navItems.map((item) => (
            <button key={item} onClick={() => setActive(item)}
              className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${active === item ? "bg-[#1a1a1a]" : "bg-[#1a1a1a]/15"}`}
            />
          ))}
        </div>
      </div>
    </main>
  );
}
