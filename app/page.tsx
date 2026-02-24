"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const sections = {
  home: {
    image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=1400&q=80",
    overlay: (
      <div className="absolute bottom-10 right-8 md:bottom-16 md:right-16 text-right text-[#f5f0e8]">
        <p className="font-mono text-[10px] md:text-xs tracking-[5px] uppercase opacity-50 mb-4">
          Artista · Storyteller · Builder
        </p>
        <h2 className="font-serif text-4xl md:text-6xl lg:text-7xl font-light leading-[1.1] mb-4">
          Storytelling<br />that <em className="font-script text-5xl md:text-7xl lg:text-8xl not-italic">feels.</em>
        </h2>
      </div>
    ),
  },
  trabajo: {
    image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=1400&q=80",
    overlay: (
      <div className="absolute inset-0 flex items-center justify-end bg-gradient-to-l from-black/50 via-transparent to-transparent px-8 md:px-16">
        <div className="max-w-md text-right text-[#f5f0e8]">
          <p className="font-mono text-[10px] tracking-[5px] uppercase opacity-40 mb-8">Lo que hago</p>
          <div className="space-y-8">
            <div>
              <h3 className="font-serif text-2xl md:text-3xl font-light">Cine & Documental</h3>
              <p className="font-script text-base md:text-lg opacity-50 mt-1">Tu historia merece verse como película.</p>
            </div>
            <div>
              <h3 className="font-serif text-2xl md:text-3xl font-light">Creatividad + Tecnología</h3>
              <p className="font-script text-base md:text-lg opacity-50 mt-1">El futuro de crear ya llegó.</p>
            </div>
            <div>
              <h3 className="font-serif text-2xl md:text-3xl font-light opacity-50">Productos para Creativos</h3>
              <p className="font-script text-base md:text-lg opacity-30 mt-1">Próximamente...</p>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  "sobre mí": {
    image: "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=1400&q=80",
    overlay: (
      <div className="absolute inset-0 flex items-center bg-gradient-to-r from-black/50 via-transparent to-transparent px-8 md:px-16">
        <div className="max-w-lg text-[#f5f0e8]">
          <p className="font-mono text-[10px] tracking-[5px] uppercase opacity-40 mb-8">Quién soy</p>
          <p className="font-serif text-lg md:text-2xl leading-[1.7] mb-6 opacity-90">
            Hago documentales que cuentan lo que importa. Creo video que se siente como cine. Construyo herramientas con inteligencia artificial.
          </p>
          <blockquote className="font-script text-2xl md:text-3xl leading-[1.4] border-l border-[#f5f0e8]/20 pl-5 mb-6 opacity-80">
            Creo para que algo quede.<br />Para que algo cambie.
          </blockquote>
          <p className="font-mono text-[10px] tracking-[4px] uppercase opacity-30 mt-8">
            Desde Guadalajara, para el mundo.
          </p>
        </div>
      </div>
    ),
  },
  proyectos: {
    image: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=1400&q=80",
    overlay: (
      <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/60 via-transparent to-transparent px-8 md:px-16 pb-10 md:pb-16">
        <div className="text-[#f5f0e8]">
          <p className="font-mono text-[10px] tracking-[5px] uppercase opacity-40 mb-4">Proyectos</p>
          <h3 className="font-serif text-3xl md:text-5xl font-light mb-2">Faraway Land</h3>
          <p className="font-script text-lg md:text-xl opacity-50 mb-4">Un documental que cruzó fronteras.</p>
          <div className="font-mono text-[10px] tracking-[3px] uppercase opacity-40 leading-loose">
            3 premios internacionales · 10 festivales · 5 países
          </div>
          <div className="mt-8 pt-6 border-t border-[#f5f0e8]/10 flex flex-wrap gap-x-6 gap-y-1">
            {["IPADE", "U. Panamericana", "Tequila San Matías", "De la Rosa", "Blen", "Kibox"].map((c) => (
              <span key={c} className="font-serif text-sm opacity-25">{c}</span>
            ))}
          </div>
        </div>
      </div>
    ),
  },
  contacto: {
    image: "https://images.unsplash.com/photo-1499346030926-9a72daac6c63?w=1400&q=80",
    overlay: (
      <div className="absolute inset-0 flex items-center justify-center bg-black/30 px-6">
        <div className="max-w-md text-center text-[#f5f0e8]">
          <h2 className="font-serif text-4xl md:text-6xl font-light mb-4">Platiquemos.</h2>
          <p className="font-script text-lg md:text-2xl opacity-60 leading-relaxed mb-10">
            ¿Tienes una historia que contar?<br />¿Un proyecto que necesita verse como merece?
          </p>
          <a href="mailto:hola@danielazpe.com"
            className="inline-block font-mono text-xs tracking-[3px] uppercase border border-[#f5f0e8]/30 px-8 py-3 hover:bg-[#f5f0e8]/10 transition-colors duration-300">
            hola@danielazpe.com
          </a>
          <div className="flex justify-center gap-8 mt-8">
            <a href="#" className="font-mono text-[10px] tracking-[3px] uppercase opacity-30 hover:opacity-80 transition-opacity">Instagram</a>
            <a href="#" className="font-mono text-[10px] tracking-[3px] uppercase opacity-30 hover:opacity-80 transition-opacity">LinkedIn</a>
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
    <main className="h-screen w-screen overflow-hidden bg-[#d4cdbf] flex flex-col">
      {/* Film grain overlay */}
      <div className="fixed inset-0 opacity-[0.06] pointer-events-none z-50 mix-blend-multiply" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='6' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
      }} />

      {/* NAV */}
      <nav className="flex justify-between items-center px-6 md:px-10 py-4 md:py-5 z-30 flex-shrink-0">
        <button onClick={() => setActive("home")}
          className="font-serif text-lg md:text-xl font-light tracking-[4px] uppercase text-[#3a352d] hover:opacity-60 transition-opacity">
          Daniel Azpe
        </button>
        <div className="hidden md:flex items-center gap-8">
          {navItems.filter(n => n !== "home").map((item) => (
            <button key={item} onClick={() => setActive(item)}
              className={`font-mono text-[10px] tracking-[3px] uppercase transition-opacity duration-300 text-[#3a352d] ${active === item ? "opacity-100" : "opacity-35 hover:opacity-70"}`}>
              {item}
            </button>
          ))}
        </div>
        <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden flex flex-col gap-[5px] w-6" aria-label="Menu">
          <motion.span animate={menuOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }} className="block h-[1px] w-full bg-[#3a352d]" />
          <motion.span animate={menuOpen ? { opacity: 0 } : { opacity: 1 }} className="block h-[1px] w-full bg-[#3a352d]" />
          <motion.span animate={menuOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }} className="block h-[1px] w-full bg-[#3a352d]" />
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-[#d4cdbf]/98 backdrop-blur-lg flex flex-col items-center justify-center gap-8">
            <button onClick={() => setMenuOpen(false)} className="absolute top-5 right-6 text-lg text-[#3a352d]">✕</button>
            {navItems.map((item, i) => (
              <motion.button key={item}
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
                onClick={() => { setActive(item); setMenuOpen(false); }}
                className={`font-serif text-2xl font-light tracking-[3px] uppercase text-[#3a352d] ${active === item ? "opacity-100" : "opacity-35"}`}>
                {item}
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* IMAGE FRAME */}
      <div className="flex-1 px-4 md:px-10 pb-4 md:pb-5 min-h-0">
        <div className="relative w-full h-full overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, scale: 1.02 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
              className="absolute inset-0"
            >
              <img
                src={sections[active].image}
                alt=""
                className="w-full h-full object-cover sepia-[0.35] contrast-[1.1] brightness-[0.85] saturate-[0.7]"
              />
              {/* Extra warm overlay for the film look */}
              <div className="absolute inset-0 bg-[#8b7355]/10 mix-blend-multiply" />
              
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="absolute inset-0"
              >
                {sections[active].overlay}
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* BOTTOM */}
      <div className="flex justify-between items-center px-6 md:px-10 py-3 md:py-4 flex-shrink-0">
        <div className="hidden md:flex gap-8">
          {["Timeless Studios", "Proyectos", "Bodas"].map((t) => (
            <span key={t} className="font-mono text-[9px] tracking-[3px] uppercase text-[#3a352d]/25 cursor-pointer hover:text-[#3a352d]/50 transition-colors">{t}</span>
          ))}
        </div>
        <div className="flex gap-2 ml-auto">
          {navItems.map((item) => (
            <button key={item} onClick={() => setActive(item)}
              className={`w-1.5 h-1.5 rounded-full transition-all duration-500 ${active === item ? "bg-[#3a352d]/70 scale-125" : "bg-[#3a352d]/15"}`}
            />
          ))}
        </div>
      </div>
    </main>
  );
}
