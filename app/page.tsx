"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

/* ─── Section data ─── */
const sections = {
  home: {
    image: "/images/light-bokeh.jpg",
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
    image: "https://images.unsplash.com/photo-1524712245354-2c4e5e7121c0?w=1400&q=80",
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
    image: "/images/shadow-blinds.jpg",
    overlay: (
      <div className="absolute inset-0 flex items-center justify-center px-8">
        <div className="max-w-lg text-center text-[#f5f0e8]">
          <blockquote className="font-script text-3xl md:text-4xl lg:text-5xl leading-[1.35] opacity-90">
            Creo para que algo quede.<br />Para que algo cambie.
          </blockquote>
          <div className="mt-10 flex items-center justify-center gap-3 opacity-40">
            <div className="w-8 h-px bg-[#f5f0e8]" />
            <p className="font-mono text-[10px] tracking-[4px] uppercase">
              Guadalajara, MX
            </p>
            <div className="w-8 h-px bg-[#f5f0e8]" />
          </div>
        </div>
      </div>
    ),
  },
  proyectos: {
    image: "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=1400&q=80",
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
    image: "https://images.unsplash.com/photo-1507400492013-162706c8c05e?w=1400&q=80",
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
const navItems: SectionKey[] = ["home", "trabajo", "sobre mí", "proyectos", "contacto"];

export default function Home() {
  const [active, setActive] = useState<SectionKey>("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [entered, setEntered] = useState(false);

  const goNext = useCallback(() => {
    const idx = navItems.indexOf(active);
    setActive(navItems[(idx + 1) % navItems.length]);
  }, [active]);

  const goPrev = useCallback(() => {
    const idx = navItems.indexOf(active);
    setActive(navItems[(idx - 1 + navItems.length) % navItems.length]);
  }, [active]);

  /* Preload images */
  useEffect(() => {
    Object.values(sections).forEach(({ image }) => {
      const img = new Image();
      img.src = image;
    });
  }, []);

  /* Intro */
  useEffect(() => {
    const t = setTimeout(() => setEntered(true), 100);
    return () => clearTimeout(t);
  }, []);

  /* Keyboard */
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === "ArrowDown") { e.preventDefault(); goNext(); }
      else if (e.key === "ArrowLeft" || e.key === "ArrowUp") { e.preventDefault(); goPrev(); }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [goNext, goPrev]);

  /* Touch swipe */
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

  const currentIdx = navItems.indexOf(active);
  const isFirst = currentIdx === 0;
  const isLast = currentIdx === navItems.length - 1;

  return (
    <main className="h-screen w-screen overflow-hidden bg-[#d4cdbf] flex flex-col select-none">
      {/* Film grain */}
      <div className="fixed inset-0 opacity-[0.06] pointer-events-none z-50 mix-blend-multiply" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='6' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
      }} />

      {/* ─── NAV ─── */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: entered ? 1 : 0, y: entered ? 0 : -20 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="flex justify-between items-center px-6 md:px-10 py-4 md:py-5 z-30 flex-shrink-0"
      >
        <button onClick={() => setActive("home")}
          className="font-serif text-lg md:text-xl font-light tracking-[4px] uppercase text-[#3a352d] hover:opacity-60 transition-opacity cursor-pointer">
          Daniel Azpe
        </button>
        <div className="hidden md:flex items-center gap-8">
          {navItems.filter(n => n !== "home").map((item) => (
            <button key={item} onClick={() => setActive(item)}
              className={`font-mono text-[10px] tracking-[3px] uppercase transition-all duration-300 text-[#3a352d] cursor-pointer ${active === item ? "opacity-100" : "opacity-35 hover:opacity-70"}`}>
              {item}
            </button>
          ))}
        </div>
        <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden flex flex-col gap-[5px] w-6 cursor-pointer" aria-label="Menu">
          <motion.span animate={menuOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }} className="block h-[1px] w-full bg-[#3a352d]" />
          <motion.span animate={menuOpen ? { opacity: 0 } : { opacity: 1 }} className="block h-[1px] w-full bg-[#3a352d]" />
          <motion.span animate={menuOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }} className="block h-[1px] w-full bg-[#3a352d]" />
        </button>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-[#d4cdbf]/98 backdrop-blur-lg flex flex-col items-center justify-center gap-8">
            <button onClick={() => setMenuOpen(false)} className="absolute top-5 right-6 text-lg text-[#3a352d] cursor-pointer">✕</button>
            {navItems.map((item, i) => (
              <motion.button key={item}
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
                onClick={() => { setActive(item); setMenuOpen(false); }}
                className={`font-serif text-2xl font-light tracking-[3px] uppercase text-[#3a352d] cursor-pointer ${active === item ? "opacity-100" : "opacity-35"}`}>
                {item}
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* ─── IMAGE FRAME ─── */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: entered ? 1 : 0, scale: entered ? 1 : 0.95 }}
        transition={{ duration: 1.2, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
        className="flex-1 px-4 md:px-10 pb-4 md:pb-5 min-h-0 relative"
      >
        <div className="relative w-full h-full overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, scale: 1.03 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
              className="absolute inset-0"
            >
              <img
                src={sections[active].image}
                alt=""
                className="w-full h-full object-cover sepia-[0.3] contrast-[1.1] brightness-[0.85] saturate-[0.7]"
              />
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

          {/* ─── SIDE NAV ZONES ─── */}
          {!isFirst && (
            <button onClick={goPrev}
              className="absolute left-0 top-0 bottom-0 w-20 md:w-32 z-20 group cursor-w-resize flex items-center justify-start pl-4 md:pl-6">
              <span className="font-serif text-2xl md:text-3xl text-white/0 group-hover:text-white/50 transition-all duration-500 -translate-x-2 group-hover:translate-x-0">
                ‹
              </span>
            </button>
          )}
          {!isLast && (
            <button onClick={goNext}
              className="absolute right-0 top-0 bottom-0 w-20 md:w-32 z-20 group cursor-e-resize flex items-center justify-end pr-4 md:pr-6">
              <span className="font-serif text-2xl md:text-3xl text-white/0 group-hover:text-white/50 transition-all duration-500 translate-x-2 group-hover:translate-x-0">
                ›
              </span>
            </button>
          )}
        </div>
      </motion.div>

      {/* ─── BOTTOM BAR ─── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: entered ? 1 : 0, y: entered ? 0 : 20 }}
        transition={{ duration: 1, delay: 0.7 }}
        className="flex justify-between items-center px-6 md:px-10 py-3 md:py-4 flex-shrink-0"
      >
        <div className="hidden md:flex gap-8">
          <a href="https://timeless.mx" target="_blank" rel="noopener noreferrer"
            className="font-mono text-[9px] tracking-[3px] uppercase text-[#3a352d]/25 hover:text-[#3a352d]/60 transition-colors cursor-pointer">
            Timeless Studios
          </a>
          {["Proyectos", "Bodas"].map((t) => (
            <span key={t} className="font-mono text-[9px] tracking-[3px] uppercase text-[#3a352d]/25 cursor-pointer hover:text-[#3a352d]/50 transition-colors">{t}</span>
          ))}
        </div>

        {/* Section indicators with labels */}
        <div className="flex gap-4 ml-auto items-center">
          {navItems.map((item, i) => (
            <button key={item} onClick={() => setActive(item)}
              className="flex items-center gap-1.5 group cursor-pointer">
              <span className={`w-2 h-2 rounded-full transition-all duration-500 ${active === item ? "bg-[#3a352d]/70 scale-125" : "bg-[#3a352d]/15 group-hover:bg-[#3a352d]/30"}`} />
              <span className={`hidden md:inline font-mono text-[8px] tracking-[2px] uppercase transition-all duration-300 ${active === item ? "text-[#3a352d]/60" : "text-[#3a352d]/0 group-hover:text-[#3a352d]/35"}`}>
                {item}
              </span>
            </button>
          ))}
        </div>
      </motion.div>
    </main>
  );
}
