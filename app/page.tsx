"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

const sections = {
  home: {
    image: "/images/light-bokeh.jpg",
    overlay: (
      <div className="absolute inset-0 flex items-center justify-center px-8">
        <div className="max-w-3xl text-center text-[#f5f0e8]">
          <p className="font-mono text-[10px] md:text-xs tracking-[5px] uppercase opacity-50 mb-6">
            Artista · Storyteller · Builder
          </p>
          <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl font-light leading-[1.25]">
            Creo para que algo quede.
          </h2>
          <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl font-light leading-[1.25] mt-2">
            Para que algo cambie.
          </h2>
        </div>
      </div>
    ),
  },
  trabajo: {
    image: "/images/golden-grain.jpg",
    overlay: (
      <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/70 via-black/30 to-transparent px-8 md:px-16 pb-8 md:pb-12 overflow-y-auto">
        <div className="text-[#f5f0e8] max-w-4xl">
          <p className="font-mono text-[10px] tracking-[5px] uppercase opacity-40 mb-6">Lo que hago</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="border-l border-white/20 pl-4">
              <h3 className="font-serif text-xl md:text-2xl font-light mb-1">Cine & Documental</h3>
              <p className="font-script text-sm opacity-50">Tu historia merece verse como película.</p>
            </div>
            <div className="border-l border-white/20 pl-4">
              <h3 className="font-serif text-xl md:text-2xl font-light mb-1">Creatividad + Tecnología</h3>
              <p className="font-script text-sm opacity-50">El futuro de crear ya llegó.</p>
            </div>
            <div className="border-l border-white/20 pl-4">
              <h3 className="font-serif text-xl md:text-2xl font-light mb-1">Productos Digitales</h3>
              <p className="font-script text-sm opacity-50">Herramientas que cambian cómo creamos.</p>
            </div>
          </div>
          <div className="border-t border-white/15 pt-6 mb-6">
            <h3 className="font-serif text-2xl md:text-3xl font-light mb-2">Faraway Land</h3>
            <p className="font-script text-base opacity-50 mb-3">Un documental que cruzó fronteras.</p>
            <div className="font-mono text-[9px] tracking-[2px] uppercase opacity-40 flex flex-wrap gap-x-4 gap-y-1">
              <span>3 premios internacionales</span>
              <span className="opacity-30">·</span>
              <span>10 festivales</span>
              <span className="opacity-30">·</span>
              <span>5 países</span>
            </div>
          </div>
          <div className="border-t border-white/15 pt-4">
            <p className="font-mono text-[9px] tracking-[3px] uppercase opacity-30 mb-3">Clientes</p>
            <div className="flex flex-wrap gap-x-6 gap-y-2">
              {["IPADE", "Universidad Panamericana", "Tequila San Matías", "De la Rosa", "Blen", "Kibox"].map((c) => (
                <span key={c} className="font-serif text-sm opacity-40">{c}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    ),
  },
  "sobre mí": {
    image: "/images/shadow-blinds.jpg",
    overlay: (
      <div className="absolute inset-0 flex items-center bg-gradient-to-r from-black/50 via-black/20 to-transparent px-8 md:px-16">
        <div className="max-w-xl text-[#f5f0e8]">
          <p className="font-mono text-[10px] tracking-[5px] uppercase opacity-40 mb-6">Sobre mí</p>
          <p className="font-serif text-lg md:text-xl leading-[1.7] mb-5 opacity-90">
            Soy Daniel. Hago documentales que cuentan lo que importa. 
            Creo video que se siente como cine. Construyo herramientas 
            con inteligencia artificial.
          </p>
          <p className="font-serif text-lg md:text-xl leading-[1.7] mb-5 opacity-90">
            Con <em className="font-script not-italic">Faraway Land</em> gané 3 premios internacionales 
            y mostré en 10 festivales de 5 países. He trabajado con marcas 
            como IPADE, Universidad Panamericana, Tequila San Matías y más.
          </p>
          <p className="font-serif text-lg md:text-xl leading-[1.7] mb-6 opacity-90">
            Mi filosofía es simple: hacer cosas que importen. 
            Que queden. Que cambien algo en quien las ve.
          </p>
          <div className="flex items-center gap-3 opacity-40 mt-8">
            <div className="w-8 h-px bg-[#f5f0e8]" />
            <p className="font-mono text-[10px] tracking-[4px] uppercase">Guadalajara, MX</p>
            <div className="w-8 h-px bg-[#f5f0e8]" />
          </div>
        </div>
      </div>
    ),
  },
  contacto: {
    image: "/images/blue-motion.jpg",
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
            <a href="https://www.instagram.com/daniel.azpe/" target="_blank" rel="noopener noreferrer"
              className="font-mono text-[10px] tracking-[3px] uppercase opacity-30 hover:opacity-80 transition-opacity">Instagram</a>
            <a href="https://www.linkedin.com/in/danielazpe" target="_blank" rel="noopener noreferrer"
              className="font-mono text-[10px] tracking-[3px] uppercase opacity-30 hover:opacity-80 transition-opacity">LinkedIn</a>
          </div>
        </div>
      </div>
    ),
  },
};

type SectionKey = keyof typeof sections;
const navItems: SectionKey[] = ["trabajo", "sobre mí", "contacto"];

export default function Home() {
  const [active, setActive] = useState<SectionKey>("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [entered, setEntered] = useState(false);

  const goTo = useCallback((target: SectionKey) => { setActive(target); }, []);

  const goNext = useCallback(() => {
    const allItems: SectionKey[] = ["home", ...navItems];
    const idx = allItems.indexOf(active);
    setActive(allItems[(idx + 1) % allItems.length]);
  }, [active]);

  const goPrev = useCallback(() => {
    const allItems: SectionKey[] = ["home", ...navItems];
    const idx = allItems.indexOf(active);
    setActive(allItems[(idx - 1 + allItems.length) % allItems.length]);
  }, [active]);

  useEffect(() => {
    Object.values(sections).forEach(({ image }) => { const img = new Image(); img.src = image; });
  }, []);

  useEffect(() => { const t = setTimeout(() => setEntered(true), 100); return () => clearTimeout(t); }, []);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === "ArrowDown") { e.preventDefault(); goNext(); }
      else if (e.key === "ArrowLeft" || e.key === "ArrowUp") { e.preventDefault(); goPrev(); }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [goNext, goPrev]);

  useEffect(() => {
    let startX = 0, startY = 0;
    const onStart = (e: TouchEvent) => { startX = e.touches[0].clientX; startY = e.touches[0].clientY; };
    const onEnd = (e: TouchEvent) => {
      const dx = e.changedTouches[0].clientX - startX;
      const dy = e.changedTouches[0].clientY - startY;
      if (Math.abs(dx) < 50 || Math.abs(dx) < Math.abs(dy)) return;
      if (dx < 0) goNext(); else goPrev();
    };
    window.addEventListener("touchstart", onStart, { passive: true });
    window.addEventListener("touchend", onEnd, { passive: true });
    return () => { window.removeEventListener("touchstart", onStart); window.removeEventListener("touchend", onEnd); };
  }, [goNext, goPrev]);

  const allItems: SectionKey[] = ["home", ...navItems];
  const currentIdx = allItems.indexOf(active);
  const isFirst = currentIdx === 0;
  const isLast = currentIdx === allItems.length - 1;

  return (
    <main className="h-screen w-screen overflow-hidden bg-[#f5f0ea] flex flex-col select-none">
      <div className="fixed inset-0 opacity-[0.06] pointer-events-none z-50 mix-blend-multiply" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='6' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
      }} />

      <motion.nav initial={{ opacity: 0, y: -20 }} animate={{ opacity: entered ? 1 : 0, y: entered ? 0 : -20 }} transition={{ duration: 1, delay: 0.5 }}
        className="flex justify-between items-center px-6 md:px-10 py-4 md:py-5 z-30 flex-shrink-0">
        <button onClick={() => goTo("home")} className="font-serif text-lg md:text-xl font-light tracking-[4px] uppercase text-[#3a352d] hover:opacity-60 transition-opacity cursor-pointer">Daniel Azpe</button>
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <button key={item} onClick={() => goTo(item)} className={`font-mono text-[10px] tracking-[3px] uppercase transition-all duration-300 text-[#3a352d] cursor-pointer ${active === item ? "opacity-100" : "opacity-35 hover:opacity-70"}`}>{item}</button>
          ))}
        </div>
        <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden flex flex-col gap-[5px] w-6 cursor-pointer" aria-label="Menu">
          <motion.span animate={menuOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }} className="block h-[1px] w-full bg-[#3a352d]" />
          <motion.span animate={menuOpen ? { opacity: 0 } : { opacity: 1 }} className="block h-[1px] w-full bg-[#3a352d]" />
          <motion.span animate={menuOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }} className="block h-[1px] w-full bg-[#3a352d]" />
        </button>
      </motion.nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-40 bg-[#f5f0ea]/98 backdrop-blur-lg flex flex-col items-center justify-center gap-8">
            <button onClick={() => setMenuOpen(false)} className="absolute top-5 right-6 text-lg text-[#3a352d] cursor-pointer">✕</button>
            <button onClick={() => { goTo("home"); setMenuOpen(false); }} className={`font-serif text-2xl font-light tracking-[3px] uppercase text-[#3a352d] cursor-pointer ${active === "home" ? "opacity-100" : "opacity-35"}`}>Inicio</button>
            {navItems.map((item, i) => (
              <motion.button key={item} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.08 }}
                onClick={() => { goTo(item); setMenuOpen(false); }} className={`font-serif text-2xl font-light tracking-[3px] uppercase text-[#3a352d] cursor-pointer ${active === item ? "opacity-100" : "opacity-35"}`}>{item}</motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: entered ? 1 : 0, scale: entered ? 1 : 0.95 }} transition={{ duration: 1.2, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
        className="flex-1 px-4 md:px-10 pb-4 md:pb-5 min-h-0 relative">
        <div className="relative w-full h-full overflow-hidden">
          <AnimatePresence initial={false}>
            <motion.div key={active} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }} className="absolute inset-0">
              <img src={sections[active].image} alt="" className="w-full h-full object-cover sepia-[0.3] contrast-[1.1] brightness-[0.85] saturate-[0.7]" />
              <div className="absolute inset-0 bg-[#8b7355]/10 mix-blend-multiply" />
              <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.15 }} className="absolute inset-0">{sections[active].overlay}</motion.div>
            </motion.div>
          </AnimatePresence>

          {!isFirst && (
            <button onClick={goPrev} className="absolute left-0 top-0 bottom-0 w-20 md:w-32 z-20 group cursor-w-resize flex items-center justify-start pl-4 md:pl-6">
              <span className="font-serif text-2xl md:text-3xl text-white/0 group-hover:text-white/50 transition-all duration-500 -translate-x-2 group-hover:translate-x-0">‹</span>
            </button>
          )}
          {!isLast && (
            <button onClick={goNext} className="absolute right-0 top-0 bottom-0 w-20 md:w-32 z-20 group cursor-e-resize flex items-center justify-end pr-4 md:pr-6">
              <span className="font-serif text-2xl md:text-3xl text-white/0 group-hover:text-white/50 transition-all duration-500 translate-x-2 group-hover:translate-x-0">›</span>
            </button>
          )}
        </div>
      </motion.div>

      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: entered ? 1 : 0, y: entered ? 0 : 20 }} transition={{ duration: 1, delay: 0.7 }}
        className="flex justify-between items-center px-6 md:px-10 py-3 md:py-4 flex-shrink-0">
        <p className="font-mono text-[9px] tracking-[2px] uppercase text-[#3a352d]/30">Daniel Azpe © 2026</p>
        <div className="flex gap-6">
          <a href="https://www.instagram.com/daniel.azpe/" target="_blank" rel="noopener noreferrer" className="font-mono text-[10px] tracking-[3px] uppercase text-[#3a352d]/35 hover:text-[#3a352d]/70 transition-colors cursor-pointer">Instagram</a>
          <a href="https://www.linkedin.com/in/danielazpe" target="_blank" rel="noopener noreferrer" className="font-mono text-[10px] tracking-[3px] uppercase text-[#3a352d]/35 hover:text-[#3a352d]/70 transition-colors cursor-pointer">LinkedIn</a>
        </div>
      </motion.div>
    </main>
  );
}
