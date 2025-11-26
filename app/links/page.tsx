import Image from "next/image";
import Link from "next/link";

export default function LinksPage() {
  return (
    <main className="min-h-screen bg-[#1a1a1a] flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-md bg-[#0f0f0f] rounded-3xl border border-white/10 p-8 shadow-2xl">

        {/* Imagem de capa */}
        <div className="flex flex-col items-center mb-6">
          <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-orange-500 shadow-lg">
            <Image
              src="/chacara.jpg"
              alt="Recanto Pé Xe"
              width={300}
              height={300}
              className="object-cover w-full h-full"
            />
          </div>

          <h1 className="mt-4 text-2xl font-semibold text-white">
            Recanto do Pexe
          </h1>
          <p className="text-sm text-slate-300">
            Entre em contato
          </p>
        </div>

        {/* Ícones sociais */}
        <div className="flex justify-center gap-6 mb-8">
          <Link
            href="https://instagram.com/"
            target="_blank"
            className="text-2xl hover:scale-110 transition"
            aria-label="Instagram"
          >
            📸
          </Link>

          <Link
            href="https://wa.me/55SEUNUMERO"
            target="_blank"
            className="text-2xl hover:scale-110 transition"
            aria-label="WhatsApp"
          >
            💬
          </Link>

          <Link
            href="/"
            className="text-2xl hover:scale-110 transition"
            aria-label="Nosso Site"
          >
            🌐
          </Link>
        </div>

        {/* Botões principais */}
        <div className="flex flex-col gap-4">
          <Link
            href="https://wa.me/55SEUNUMERO"
            target="_blank"
            className="w-full text-center py-3 border border-orange-500 rounded-xl text-orange-400 font-medium hover:bg-orange-500 hover:text-black transition"
          >
            Fale Conosco
          </Link>

          <Link
            href="https://instagram.com/"
            target="_blank"
            className="w-full text-center py-3 border border-orange-500 rounded-xl text-orange-400 font-medium hover:bg-orange-500 hover:text-black transition"
          >
            Instagram
          </Link>

          <Link
            href="/"
            className="w-full text-center py-3 border border-orange-500 rounded-xl text-orange-400 font-medium hover:bg-orange-500 hover:text-black transition"
          >
            Nosso Site
          </Link>
        </div>

        {/* Rodapé */}
        <p className="mt-8 text-center text-[11px] text-slate-500">
          © {new Date().getFullYear()} Recanto do Pexe
        </p>
      </div>
    </main>
  );
}
