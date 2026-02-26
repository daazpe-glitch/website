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
          Documentalista · Filmmaker
        </p>
        <h2 className="font-serif text-4xl md:text-6xl lg:text-7xl font-light leading-[1.1] mb-4">
          Historias que<br />se <em className="font-script text-5xl md:text-7xl lg:text-8xl not-italic">quedan.</em>
        </h2>
      </div>
    ),
  },
  trabajo: {
    image: "/images/golden-grain.jpg",
    overlay: (
      <div className="absolute inset-0 flex items-center justify-end bg-gradient-to-l from-black/50 via-transparent to-transparent px-8 md:px-16">
        <div className="max-w-md text-right text-[#f5f0e8]">
          <p className="font-mono text-[10px] tracking-[5px] uppercase opacity-40 mb-10">Lo que hago</p>
          <div className="space-y-10">
            <div>
              <h3 className="font-serif text-2xl md:text-3xl font-light">Documental de impacto</h3>
              <p className="font-script text-base md:text-lg opacity-50 mt-2">Historias que necesitan ser contadas.</p>
            </div>
            <a href="https://timeless.mx" target="_blank" rel="noopener noreferrer" className="block group">
              <h3 className="font-serif text-2xl md:text-3xl font-light">Video para marcas</h3>
              <p className="font-script text-base md:text-lg opacity-50 mt-2">Video cinematográfico para empresas.</p>
              <p className="font-mono text-[10px] tracking-[3px] uppercase opacity-30 group-hover:opacity-60 mt-3 transition-all duration-300 inline-flex items-center gap-1.5">vía Timeless Studios <span className="group-hover:translate-x-1 transition-transform duration-300">&rarr;</span></p>
            </a>
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
    image: "/images/motion-blur.jpg",
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
const navItems: SectionKey[] = ["home", "trabajo", "sobre mí", "proyectos", "contacto"];

export default function Home() {
  const [active, setActive] = useState<SectionKey>("home");
  const [prevActive, setPrevActive] = useState<SectionKey>("home");
  const [direction, setDirection] = useState(0); // -1 left, 1 right
  const [menuOpen, setMenuOpen] = useState(false);
  const [bgTheme, setBgTheme] = useState<"cafe" | "blanco" | "crema">("crema");


  const bgColors = {
    cafe: { bg: "#d4cdbf", text: "#3a352d" },
    blanco: { bg: "#ffffff", text: "#1a1a1a" },
    crema: { bg: "#f5f0ea", text: "#2a2520" },
  };
  const [entered, setEntered] = useState(false);

  const goTo = useCallback((target: SectionKey) => {
    const fromIdx = navItems.indexOf(active);
    const toIdx = navItems.indexOf(target);
    setDirection(toIdx > fromIdx ? 1 : -1);
    setPrevActive(active);
    setActive(target);
  }, [active]);

  const goNext = useCallback(() => {
    const idx = navItems.indexOf(active);
    goTo(navItems[(idx + 1) % navItems.length]);
  }, [active, goTo]);

  const goPrev = useCallback(() => {
    const idx = navItems.indexOf(active);
    goTo(navItems[(idx - 1 + navItems.length) % navItems.length]);
  }, [active, goTo]);

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
    <main className="h-screen w-screen overflow-hidden flex flex-col select-none transition-colors duration-500" style={{ backgroundColor: bgColors[bgTheme].bg, "--nav-color": bgColors[bgTheme].text } as React.CSSProperties}>


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
        <button onClick={() => goTo("home")}
          className="font-serif text-lg md:text-xl font-light tracking-[4px] uppercase text-[var(--nav-color)] hover:opacity-60 transition-opacity cursor-pointer">
          Daniel Azpe
        </button>
        <div className="hidden md:flex items-center gap-8">
          {navItems.filter(n => n !== "home").map((item) => (
            <button key={item} onClick={() => goTo(item)}
              className={`font-mono text-[10px] tracking-[3px] uppercase transition-all duration-300 text-[var(--nav-color)] cursor-pointer ${active === item ? "opacity-100" : "opacity-35 hover:opacity-70"}`}>
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
            className="fixed inset-0 z-40 backdrop-blur-lg flex flex-col items-center justify-center gap-8" style={{ backgroundColor: bgColors[bgTheme].bg + "f8" }}>
            <button onClick={() => setMenuOpen(false)} className="absolute top-5 right-6 text-lg text-[var(--nav-color)] cursor-pointer">✕</button>
            {navItems.map((item, i) => (
              <motion.button key={item}
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
                onClick={() => { goTo(item); setMenuOpen(false); }}
                className={`font-serif text-2xl font-light tracking-[3px] uppercase text-[var(--nav-color)] cursor-pointer ${active === item ? "opacity-100" : "opacity-35"}`}>
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
          <AnimatePresence initial={false}>
            <motion.div
              key={active}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
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
                transition={{ duration: 0.4, delay: 0.15 }}
                className="absolute inset-0"
              >
                {sections[active].overlay}
              </motion.div>
            </motion.div>
          </AnimatePresence>

          {/* Click anywhere to advance */}
          <button onClick={goNext}
            className="absolute inset-0 z-10 cursor-pointer" aria-label="Next section" />

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
        <div className="hidden md:flex gap-8 items-center">
          <a href="https://timeless.mx" target="_blank" rel="noopener noreferrer"
            className="font-mono text-[9px] tracking-[3px] uppercase text-[var(--nav-color)]/25 hover:text-[var(--nav-color)]/60 transition-colors cursor-pointer">
            Timeless Studios
          </a>
        </div>

        {/* Section indicators — labeled lines */}
        <div className="flex gap-8 ml-auto items-end">
          <div className="w-full h-px bg-[#3a352d]/8 absolute left-0 right-0" style={{ display: "none" }} />
          {navItems.map((item, i) => (
            <button key={item} onClick={() => goTo(item)}
              className="flex flex-col items-center gap-2 group cursor-pointer min-w-[60px] md:min-w-[72px]">
              <motion.span
                layout
                className={`h-[3px] rounded-full transition-colors duration-500 ${active === item ? "bg-[#3a352d]/75" : "bg-[#3a352d]/20 group-hover:bg-[#3a352d]/40"}`}
                style={{ width: active === item ? 48 : 20 }}
                animate={{ width: active === item ? 48 : 20 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              />
              <span className={`font-mono text-[9px] tracking-[3px] uppercase transition-all duration-500 ${active === item ? "text-[var(--nav-color)]/65 translate-y-0" : "text-[var(--nav-color)]/20 group-hover:text-[var(--nav-color)]/40"}`}>
                {item}
              </span>
            </button>
          ))}
        </div>
      </motion.div>
    </main>
  );
}
