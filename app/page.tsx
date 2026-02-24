"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="min-h-screen bg-[#f0ebe4]">
      {/* Paper grain texture */}
      <div className="fixed inset-0 opacity-[0.03] pointer-events-none z-50" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
      }} />

      {/* ========== NAV ========== */}
      <motion.nav
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="fixed top-0 left-0 right-0 z-40 flex justify-between items-center px-6 md:px-12 py-5 md:py-7 bg-[#f0ebe4]/90 backdrop-blur-xl border-b border-black/5"
      >
        <span className="font-serif text-xl md:text-2xl font-light tracking-[3px] uppercase">
          Daniel Azpe
        </span>
        <div className="hidden md:flex gap-9">
          {["Home", "Trabajo", "Sobre mí", "Contacto"].map((item) => (
            <a key={item} href={`#${item.toLowerCase().replace(" ", "")}`}
              className="text-xs font-normal tracking-[2px] uppercase opacity-40 hover:opacity-100 transition-opacity duration-300">
              {item}
            </a>
          ))}
        </div>
        <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden flex flex-col gap-[5px] w-6" aria-label="Menu">
          <motion.span animate={menuOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }} className="block h-[1.5px] w-full bg-[#1a1a1a]" />
          <motion.span animate={menuOpen ? { opacity: 0 } : { opacity: 1 }} className="block h-[1.5px] w-full bg-[#1a1a1a]" />
          <motion.span animate={menuOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }} className="block h-[1.5px] w-full bg-[#1a1a1a]" />
        </button>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-30 bg-[#f0ebe4]/98 backdrop-blur-lg flex flex-col items-center justify-center gap-8">
            {["Home", "Trabajo", "Sobre mí", "Contacto"].map((item, i) => (
              <motion.a key={item} href={`#${item.toLowerCase().replace(" ", "")}`}
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
                transition={{ delay: i * 0.1 }} onClick={() => setMenuOpen(false)}
                className="font-serif text-3xl font-light tracking-[3px] uppercase">
                {item}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* ========== HERO ========== */}
      <section id="home" className="pt-[76px] md:pt-[90px] px-4 md:px-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
          className="relative w-full h-[60vh] md:h-[78vh] overflow-hidden bg-[#222]"
        >
          <img
            src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1400&q=80"
            alt="Cinematic landscape"
            className="w-full h-full object-cover contrast-[1.05]"
          />
          <div className="absolute bottom-8 left-6 md:bottom-12 md:left-12 text-white" style={{ textShadow: "0 2px 30px rgba(0,0,0,0.4)" }}>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 1 }}
              className="font-serif text-5xl md:text-7xl font-light leading-[1.05]"
            >
              Daniel<br />Azpe
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="mt-4 text-xs md:text-sm font-light tracking-[3px] md:tracking-[4px] uppercase opacity-80"
            >
              Artista <span className="mx-1.5 opacity-40">·</span> Storyteller <span className="mx-1.5 opacity-40">·</span> Builder
            </motion.p>
          </div>
        </motion.div>
      </section>

      {/* Tabs bajo hero */}
      <motion.div
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1, duration: 0.8 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-0 px-6 md:px-12 py-8 md:py-11 border-t border-black/5"
      >
        {[
          { title: "Timeless Studios", sub: "Producción creativa" },
          { title: "Proyectos", sub: "Trabajo seleccionado" },
          { title: "Bodas", sub: "Momentos que importan" },
        ].map((col) => (
          <div key={col.title} className="cursor-pointer hover:opacity-60 transition-opacity duration-300">
            <h4 className="font-serif text-lg md:text-xl font-normal mb-1">{col.title}</h4>
            <p className="text-xs text-[#999] font-light">{col.sub}</p>
          </div>
        ))}
      </motion.div>

      {/* ========== QUIÉN SOY ========== */}
      <section id="sobremí" className="grid grid-cols-1 md:grid-cols-2 gap-0 px-4 md:px-12 mt-16 md:mt-24 min-h-[70vh]">
        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
          variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
          className="flex flex-col justify-center py-12 md:py-20 md:pr-16"
        >
          <motion.span variants={fadeUp} transition={{ duration: 0.6 }}
            className="text-[10px] tracking-[4px] uppercase opacity-40 mb-8">
            Quién soy
          </motion.span>
          <motion.p variants={fadeUp} transition={{ duration: 0.6 }}
            className="font-serif text-xl md:text-[26px] leading-[1.6] text-[#2a2a2a] mb-6">
            Hago documentales que cuentan lo que importa. Creo video que se siente como cine. Construyo herramientas con inteligencia artificial.
          </motion.p>
          <motion.blockquote variants={fadeUp} transition={{ duration: 0.6 }}
            className="font-serif italic text-2xl md:text-[30px] leading-[1.5] border-l-2 border-[#c4b8a8] pl-6 my-8">
            Creo para que algo quede.<br />Para que algo cambie.
          </motion.blockquote>
          <motion.p variants={fadeUp} transition={{ duration: 0.6 }}
            className="text-[12px] tracking-[3px] uppercase opacity-35 mt-4">
            Desde Guadalajara, para el mundo.
          </motion.p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative h-[50vh] md:h-auto overflow-hidden"
        >
          <img
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80"
            alt="Portrait"
            className="w-full h-full object-cover grayscale-[20%]"
          />
        </motion.div>
      </section>

      {/* ========== LO QUE HAGO ========== */}
      <section id="trabajo" className="px-6 md:px-12 py-24 md:py-32">
        <motion.span
          initial={{ opacity: 0 }} whileInView={{ opacity: 0.4 }} viewport={{ once: true }}
          className="block text-[10px] tracking-[4px] uppercase mb-14">
          Lo que hago
        </motion.span>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-12">
          {[
            { icon: "🎬", title: "Cine & Documental", desc: "Tu historia merece verse como película.", tag: "Producción · Dirección · Post" },
            { icon: "🤖", title: "Creatividad + Tecnología", desc: "El futuro de crear ya llegó.", tag: "IA · Automatización · Innovación" },
            { icon: "📦", title: "Productos para Creativos", desc: "Herramientas que hacen tu trabajo más fácil.", tag: "Próximamente" },
          ].map((s, i) => (
            <motion.div key={s.title}
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ delay: i * 0.15, duration: 0.6 }}
              className="p-8 md:p-12 border border-black/8 hover:bg-white/30 hover:border-black/15 transition-all duration-400"
            >
              <div className="text-3xl mb-5">{s.icon}</div>
              <h3 className="font-serif text-2xl font-normal mb-3">{s.title}</h3>
              <p className="text-sm text-[#666] font-light leading-relaxed">{s.desc}</p>
              <span className="block mt-4 text-[10px] tracking-[2px] uppercase opacity-35">{s.tag}</span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ========== PROYECTOS ========== */}
      <section className="px-4 md:px-12 pb-24">
        <motion.span
          initial={{ opacity: 0 }} whileInView={{ opacity: 0.4 }} viewport={{ once: true }}
          className="block text-[10px] tracking-[4px] uppercase mb-14 px-2 md:px-0">
          Proyectos
        </motion.span>

        {/* Featured project */}
        <motion.div
          initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-[1.2fr_1fr] gap-0 mb-6 md:mb-12"
        >
          <div className="h-[40vh] md:h-[500px] bg-[#333] overflow-hidden">
            <img src="https://images.unsplash.com/photo-1485846234645-a62644f84728?w=900&q=80"
              alt="Faraway Land" className="w-full h-full object-cover" />
          </div>
          <div className="flex flex-col justify-end p-8 md:p-12 bg-[#1a1a1a] text-white">
            <h3 className="font-serif text-3xl md:text-[42px] font-light mb-4">Faraway Land</h3>
            <div className="text-xs tracking-[2px] uppercase opacity-50 leading-loose">
              3 premios internacionales<br />
              10 festivales<br />
              5 países
            </div>
          </div>
        </motion.div>

        {/* Placeholder projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[1, 2].map((n) => (
            <motion.div key={n}
              initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
              transition={{ delay: n * 0.1 }}
              className="h-[250px] md:h-[320px] border border-dashed border-black/15 flex flex-col items-center justify-center"
            >
              <span className="text-4xl font-extralight opacity-30 mb-2">+</span>
              <p className="text-xs tracking-[2px] uppercase text-[#aaa]">Próximo proyecto</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ========== CREDIBILIDAD ========== */}
      <section className="px-6 md:px-12 py-20 md:py-24 border-t border-b border-black/6 text-center">
        <motion.span
          initial={{ opacity: 0 }} whileInView={{ opacity: 0.4 }} viewport={{ once: true }}
          className="block text-[10px] tracking-[4px] uppercase mb-12">
          Confianza
        </motion.span>

        <motion.div
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-wrap justify-center gap-6 md:gap-12 mb-12"
        >
          {["IPADE", "Universidad Panamericana", "Tequila San Matías", "De la Rosa", "Blen", "Kibox"].map((c) => (
            <span key={c} className="font-serif text-lg md:text-xl opacity-30 hover:opacity-60 transition-opacity duration-300">
              {c}
            </span>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex justify-center gap-12 md:gap-16"
        >
          {[
            { num: "3", label: "Premios internacionales" },
            { num: "10", label: "Festivales" },
            { num: "5", label: "Países" },
          ].map((s) => (
            <div key={s.label}>
              <span className="font-serif text-4xl md:text-5xl font-light">{s.num}</span>
              <p className="text-[10px] md:text-[11px] tracking-[2px] uppercase opacity-35 mt-1">{s.label}</p>
            </div>
          ))}
        </motion.div>
      </section>

      {/* ========== CONTACTO ========== */}
      <section id="contacto" className="px-6 md:px-12 py-24 md:py-32 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-serif text-4xl md:text-[56px] font-light mb-6">Platiquemos.</h2>
          <p className="text-base md:text-lg text-[#555] font-light leading-relaxed max-w-md">
            ¿Tienes una historia que contar? ¿Un proyecto que necesita verse como merece?
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="flex flex-col gap-6"
        >
          <a href="mailto:hola@danielazpe.com"
            className="font-serif text-xl md:text-2xl border-b border-black/10 pb-2 hover:border-black/40 transition-colors duration-300">
            hola@danielazpe.com
          </a>
          <div className="flex gap-6 mt-2">
            <a href="#" className="text-xs tracking-[2px] uppercase opacity-40 hover:opacity-100 transition-opacity">Instagram</a>
            <a href="#" className="text-xs tracking-[2px] uppercase opacity-40 hover:opacity-100 transition-opacity">LinkedIn</a>
          </div>
        </motion.div>
      </section>

      {/* ========== FOOTER ========== */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-0 px-6 md:px-12 py-8 md:py-11 border-t border-black/5">
        {[
          { title: "Timeless Studios", sub: "Producción creativa" },
          { title: "Proyectos", sub: "Trabajo seleccionado" },
          { title: "Bodas", sub: "Momentos que importan" },
        ].map((col) => (
          <div key={col.title} className="cursor-pointer hover:opacity-60 transition-opacity duration-300">
            <h4 className="font-serif text-lg font-normal mb-1">{col.title}</h4>
            <p className="text-xs text-[#999] font-light">{col.sub}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
