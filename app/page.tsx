"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f8f7f5]">
      {/* Subtle grain texture */}
      <div className="fixed inset-0 opacity-[0.03] pointer-events-none z-50" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
      }} />

      {/* NAV */}
      <motion.nav
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="fixed top-0 left-0 right-0 z-40 flex justify-between items-center px-12 py-7 bg-[#f8f7f5]/90 backdrop-blur-xl border-b border-black/5"
      >
        <span className="font-serif text-2xl font-light tracking-[3px] uppercase">
          Daniel Azpe
        </span>
        <div className="flex gap-9">
          {["Home", "Trabajo", "Sobre mí", "Contacto"].map((item) => (
            <a
              key={item}
              href="#"
              className="text-xs font-normal tracking-[2px] uppercase text-ink/50 hover:text-ink transition-opacity duration-300"
            >
              {item}
            </a>
          ))}
        </div>
      </motion.nav>

      {/* HERO */}
      <section className="pt-[90px] px-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
          className="relative w-full h-[75vh] overflow-hidden bg-[#222]"
        >
          <img
            src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1400&q=80"
            alt="Cinematic landscape"
            className="w-full h-full object-cover contrast-[1.05]"
          />
          <div className="absolute bottom-14 left-14 text-white">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="text-sm font-light tracking-[4px] uppercase opacity-80"
            >
              Artista <span className="mx-2 opacity-40">·</span> Creador <span className="mx-2 opacity-40">·</span> Storyteller
            </motion.p>
          </div>
        </motion.div>
      </section>

      {/* FOOTER TABS */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="grid grid-cols-3 px-12 py-11 border-t border-black/5"
      >
        {[
          { title: "Timeless Studios", sub: "Producción creativa" },
          { title: "Proyectos", sub: "Trabajo seleccionado" },
          { title: "Bodas", sub: "Momentos que importan" },
        ].map((col) => (
          <div key={col.title} className="cursor-pointer hover:opacity-70 transition-opacity duration-300">
            <h4 className="font-serif text-xl font-normal mb-1">{col.title}</h4>
            <p className="text-xs text-[#999] font-light">{col.sub}</p>
          </div>
        ))}
      </motion.div>
    </main>
  );
}
