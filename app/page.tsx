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
    overlay: null
  },
  "créditos": {
    image: "/images/creditos.jpg",
    overlay: null,
  },
  contacto: {
    image: "",
    overlay: null,
  },
};

type SectionKey = keyof typeof sections;
const navItems: SectionKey[] = ["home", "trabajo", "créditos", "contacto"];

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

  /* ─── Créditos overlay variants ─── */
  const creditOverlay = (
    <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-b from-black/15 via-transparent to-black/25 px-6 md:px-20 lg:px-28">
      <div className="flex flex-col md:flex-row items-start w-full max-w-4xl gap-6 md:gap-0">
      {/* Left — Clients */}
      <div className="md:flex-1 md:flex md:justify-end md:pr-16 text-left md:text-right text-[#f5f0e8]">
        <div className="max-w-[260px]">
          <p className="font-display text-base md:text-lg tracking-[0.1em] uppercase opacity-50 mb-8">Colaboraciones</p>
          <div className="space-y-2.5">
            <a href="https://www.youtube.com/watch?v=4fGR4L4Ut00" target="_blank" rel="noopener noreferrer" className="block font-display text-sm md:text-[15px] opacity-55 hover:opacity-85 transition-all duration-300 underline decoration-[#f5f0e8]/15 underline-offset-4 hover:decoration-[#f5f0e8]/40">Apple ↗</a>
            <p className="font-display text-sm md:text-[15px] opacity-45">IPADE</p>
            <p className="font-display text-sm md:text-[15px] opacity-45">Tequila San Matías</p>
            <p className="font-display text-sm md:text-[15px] opacity-45">The Macallan Group</p>
            <p className="font-display text-sm md:text-[15px] opacity-45">Universidad Panamericana</p>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="hidden md:flex flex-col items-center opacity-12 mx-3 self-stretch justify-center">
        <div className="w-px h-44 bg-gradient-to-b from-transparent via-[#f5f0e8] to-transparent" />
      </div>

      {/* Right — Awards */}
      <div className="md:flex-1 md:flex md:justify-start md:pl-16 text-left text-[#f5f0e8]">
        <div className="max-w-[340px]">
          <p className="font-display text-base md:text-lg tracking-[0.1em] uppercase opacity-50 mb-8">Reconocimientos</p>
          <div className="space-y-4">
            {[
              { award: "Mejor Largometraje Nacional", fest: "Festival de Cine de Madrid" },
              { award: "Mejor Fotografía", fest: "Festival de Cine de Madrid" },
              { award: "Mejor Documental", fest: "Festival Int. de Guayaquil" },
            ].map(({ award, fest }) => (
              <div key={award}>
                <p className="font-display text-[15px] md:text-base opacity-75">{award}</p>
                <p className="font-mono text-[7px] tracking-[2px] uppercase opacity-25 mt-0.5">{fest}</p>
              </div>
            ))}
          </div>
          <p className="font-display text-xs italic opacity-25 mt-8">Faraway Land — Documental, 2018 · 10 festivales · 5 países</p>
        </div>
      </div>
    </div>
  );

    /* ─── Contacto overlay variants ─── */
  const contactOverlay = (
    <div className="absolute inset-0 flex items-center justify-center px-6 md:px-20">
      <div className="max-w-2xl w-full">
        <div className="w-full h-px bg-[#2a2520]/8 mb-8 md:mb-10" />
        <div className="flex flex-col md:flex-row gap-8 md:gap-16 text-[#2a2520]">
          <div className="flex-1 text-left">
            <p className="font-mono text-[7px] tracking-[6px] uppercase opacity-20 mb-4 md:mb-6">Sobre</p>
            <p className="font-display text-sm md:text-base leading-[2] opacity-50 mb-2 md:mb-3">
              Soy Daniel. Hago documentales, video y experimento con IA.
            </p>
            <p className="font-display text-sm italic opacity-30">
              Nací en Hmo. Vivo en Guadalajara.
            </p>
          </div>
          {/* Divider */}
          <div className="hidden md:block w-px bg-[#2a2520]/8 self-stretch" />
          <div className="md:hidden w-16 h-px bg-[#2a2520]/6" />
          <div className="flex-1 text-left flex flex-col justify-center">
            <p className="font-mono text-[7px] tracking-[6px] uppercase opacity-20 mb-4 md:mb-6">Contacto</p>
            <a href="mailto:daniel@timeless.mx" className="block font-display text-base md:text-xl opacity-55 hover:opacity-85 transition-opacity duration-300 mb-5 md:mb-6 underline decoration-[#2a2520]/10 underline-offset-4 hover:decoration-[#2a2520]/30">
              daniel@timeless.mx
            </a>
            <div className="flex gap-5">
              <a href="https://www.instagram.com/daniel.azpe/" target="_blank" rel="noopener noreferrer" className="font-mono text-[10px] tracking-[3px] uppercase opacity-35 hover:opacity-65 transition-all duration-300 border-b border-[#2a2520]/10 hover:border-[#2a2520]/25 pb-0.5">Instagram</a>
              <a href="https://www.linkedin.com/in/danielazpe" target="_blank" rel="noopener noreferrer" className="font-mono text-[10px] tracking-[3px] uppercase opacity-35 hover:opacity-65 transition-all duration-300 border-b border-[#2a2520]/10 hover:border-[#2a2520]/25 pb-0.5">LinkedIn</a>
            </div>
          </div>
        </div>
        <div className="w-full h-px bg-[#2a2520]/8 mt-8 md:mt-10" />
      </div>
    </div>
  );

    /* ─── Trabajo overlay ─── */
  const trabajoOverlay = (
      <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-b from-black/20 via-transparent to-black/30 px-6 md:px-24 lg:px-32">
        {/* Left service — links to proyectos */}
        <div className="flex-1 flex justify-center md:justify-end pr-0 md:pr-16">
          <button onClick={(e) => { e.stopPropagation(); goTo("créditos"); }} className="group cursor-pointer max-w-[300px] text-center md:text-right text-[#f5f0e8] transition-all duration-500 hover:scale-[1.02]">
            <p className="font-mono text-[7px] tracking-[6px] uppercase opacity-20 mb-4">01</p>
            <h3 className="font-display text-2xl md:text-[34px] font-normal tracking-[0.02em] opacity-85 group-hover:opacity-100 leading-[1.2] transition-opacity duration-500">Documental<br />de Impacto</h3>
            <p className="font-display text-sm md:text-base italic opacity-30 group-hover:opacity-50 mt-3 transition-opacity duration-500">Historias que necesitan ser contadas.</p>
            <div className="mt-5 flex items-center justify-end gap-2.5 opacity-0 group-hover:opacity-35 transition-all duration-500">
              <span className="font-mono text-[7px] tracking-[4px] uppercase">Ver proyectos</span>
              <span className="w-0 h-px bg-[#f5f0e8] group-hover:w-8 transition-all duration-500" />
            </div>
          </button>
        </div>

        {/* Center divider */}
        <div className="hidden md:flex flex-col items-center opacity-12 mx-2 self-center">
          <div className="w-px h-32 bg-gradient-to-b from-transparent via-[#f5f0e8] to-transparent" />
        </div>

        {/* Right service — links to timeless */}
        <div className="flex-1 flex justify-center md:justify-start pl-0 md:pl-16">
          <a href="https://timeless.mx" target="_blank" rel="noopener noreferrer" className="group cursor-pointer max-w-[300px] text-center md:text-left text-[#f5f0e8] transition-all duration-500 hover:scale-[1.02]">
            <p className="font-mono text-[7px] tracking-[6px] uppercase opacity-20 mb-4">02</p>
            <h3 className="font-display text-2xl md:text-[34px] font-normal tracking-[0.02em] opacity-85 group-hover:opacity-100 leading-[1.2] transition-opacity duration-500">Video<br />para Marcas</h3>
            <p className="font-display text-sm md:text-base italic opacity-30 group-hover:opacity-50 mt-3 transition-opacity duration-500">Video cinematográfico para empresas.</p>
            <div className="mt-5 flex items-center gap-2.5 opacity-0 group-hover:opacity-35 transition-all duration-500">
              <span className="font-mono text-[7px] tracking-[4px] uppercase">Timeless Studios</span>
              <span className="w-0 h-px bg-[#f5f0e8] group-hover:w-8 transition-all duration-500" />
            </div>
          </a>
        </div>
      </div>
  );

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
              {sections[active].image ? (
                <img
                  src={sections[active].image}
                  alt=""
                  className="w-full h-full object-cover sepia-[0.3] contrast-[1.1] brightness-[0.85] saturate-[0.7]"
                />
              ) : (
                <div className="w-full h-full bg-[#f5f0ea]" />
              )}
              {sections[active].image && <div className="absolute inset-0 bg-[#8b7355]/10 mix-blend-multiply" />}

              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.15 }}
                className="absolute inset-0 z-[15] pointer-events-none [&_a]:pointer-events-auto [&_button]:pointer-events-auto"
              >
                {active === "trabajo" ? trabajoOverlay : active === "créditos" ? creditOverlay : active === "contacto" ? contactOverlay : sections[active].overlay}
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
