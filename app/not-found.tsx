import Link from "next/link";

export default function NotFound() {
  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center bg-[#f5f0ea] text-[#2a2520]">
      <p className="font-mono text-[8px] tracking-[6px] uppercase opacity-25 mb-6">404</p>
      <h1 className="font-display text-3xl md:text-5xl font-normal opacity-70 mb-4">Página no encontrada</h1>
      <Link href="/" className="font-mono text-[10px] tracking-[3px] uppercase opacity-35 hover:opacity-65 transition-opacity border-b border-[#2a2520]/15 pb-0.5">
        Volver al inicio
      </Link>
    </div>
  );
}
