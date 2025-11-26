import Image from "next/image";
import Link from "next/link";
import { FaInstagram, FaWhatsapp, FaGlobe } from "react-icons/fa";

export default function LinksPage() {
  return (
    <main className="h-screen overflow-hidden bg-[#0f0b08] text-[#f1e9de] flex items-center justify-center">
      <div className="relative w-full max-w-xl h-[900px] rounded-2xl bg-[#0f1a14] shadow-[0_24px_80px_rgba(0,0,0,0.35)] p-14 pt-20 pb-20 overflow-hidden">
        <div className="absolute inset-x-0 top-0 h-72">
          <Image
            src="/chacara1.jpg"
            alt="Vista do Recanto do Pexe"
            fill
            priority
            sizes="(max-width: 768px) 100vw, 700px"
            className="object-cover"
            style={{ filter: "grayscale(100%)" }}
          />
          <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-[#0f1a14] via-[#0f1a14]/85 to-transparent" />
        </div>

        <div className="relative flex flex-col items-center gap-2 pt-44 sm:pt-48 mb-6 px-2 text-center">
          <div className="h-28 w-28 sm:h-32 sm:w-32 rounded-full overflow-hidden -mt-20 sm:-mt-24 mb-3">
            <Image
              src="/chacara1.jpg"
              alt="Perfil Recanto do Pexe"
              width={200}
              height={200}
              className="object-cover w-full h-full"
            />
          </div>
          <h1 className="text-2xl sm:text-3xl font-semibold text-[#f3e9dd]">Recanto do Pexe</h1>
          <p className="text-sm sm:text-base text-[#d4c8b8]">
            Reservas e valores para fins de semana e feriados
          </p>
        </div>

        <div className="flex justify-center gap-4 mb-6">
          <Link
            href="https://www.instagram.com/chacararecantodopexe?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
            target="_blank"
            aria-label="Instagram"
            className="text-3xl text-[#f3e9dd] transition hover:-translate-y-0.5 hover:text-[#E4405F]"
          >
            <FaInstagram />
          </Link>
          <Link
            href="https://wa.me/+553499905425"
            target="_blank"
            aria-label="WhatsApp"
            className="text-3xl text-[#f3e9dd] transition hover:-translate-y-0.5 hover:text-[#25D366]"
          >
            <FaWhatsapp />
          </Link>
          <Link
            href="/"
            aria-label="Nosso Site"
            className="text-3xl text-[#f3e9dd] transition hover:-translate-y-0.5 hover:text-[#6BB7DB]"
          >
            <FaGlobe />
          </Link>
        </div>

        <div className="flex flex-col items-center gap-5">
          <Link
            href="https://wa.me/+553499905425"
            target="_blank"
            className="w-full max-w-xl relative flex items-center justify-center py-4 px-6 rounded-xl border border-[#5B8C5A] bg-[#0f0b08] text-[#f1e9de] text-lg font-medium transition hover:bg-[#5B8C5A] hover:text-[#0f0b08] hover:-translate-y-0.5"
          >
            <FaWhatsapp className="absolute left-6 text-2xl" />
            Fale Conosco
          </Link>

          <Link
            href="https://www.instagram.com/chacararecantodopexe?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
            target="_blank"
            className="w-full max-w-xl relative flex items-center justify-center py-4 px-6 rounded-xl border border-[#5B8C5A] bg-[#0f0b08] text-[#f1e9de] text-lg font-medium transition hover:bg-[#5B8C5A] hover:text-[#0f0b08] hover:-translate-y-0.5"
          >
            <FaInstagram className="absolute left-6 text-2xl" />
            Instagram
          </Link>

          <Link
            href="/"
            className="w-full max-w-xl relative flex items-center justify-center py-4 px-6 rounded-xl border border-[#5B8C5A] bg-[#0f0b08] text-[#f1e9de] text-lg font-medium transition hover:bg-[#5B8C5A] hover:text-[#0f0b08] hover:-translate-y-0.5"
          >
            <FaGlobe className="absolute left-6 text-2xl" />
            Nosso Site
          </Link>
        </div>

        
      </div>
    </main>
  );
}
