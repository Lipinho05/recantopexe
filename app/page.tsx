import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-50">
      {/* Hero */}
      <section className="max-w-5xl mx-auto px-4 py-12 md:py-20 grid md:grid-cols-2 gap-10 items-center">
        <div className="space-y-6">
          <p className="text-sm uppercase tracking-[0.25em] text-emerald-300">
            Recanto Pé Xe
          </p>
          <h1 className="text-3xl md:text-5xl font-bold leading-tight">
            Seu lugar para{" "}
            <span className="text-emerald-400">
              pesca, descanso e lazer
            </span>{" "}
            em meio à natureza.
          </h1>
          <p className="text-slate-300 text-sm md:text-base">
            Ambiente familiar, tanques de pesca, área para churrasco e muito verde
            para relaxar e aproveitar cada momento.
          </p>

          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              href="https://wa.me/55SEUNUMERO"
              target="_blank"
              className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-semibold text-sm shadow-lg transition"
            >
              Reservar Data
            </Link>
            <Link
              href="/links"
              className="inline-flex items-center justify-center px-6 py-3 rounded-full border border-slate-500 hover:bg-white/5 text-sm font-medium transition"
            >
              Ver Contatos
            </Link>
          </div>
        </div>

        {/* Imagem / Vídeo */}
        <div className="relative">
          <div className="aspect-video rounded-3xl overflow-hidden border border-slate-800 shadow-xl bg-slate-900">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="Vídeo Recanto Pé Xe"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <div className="absolute -bottom-4 -right-4 bg-emerald-500 text-slate-950 text-xs font-semibold px-4 py-2 rounded-full shadow-lg">
            Vem viver essa experiência!
          </div>
        </div>
      </section>
    </main>
  );
}
