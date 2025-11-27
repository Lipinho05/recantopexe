"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaPlay } from "react-icons/fa";

export default function Home() {
  const mapHref =
    "https://www.google.com/maps/place/Recanto+do+Pexe/@-18.7914786,-46.418527,21z/data=!4m6!3m5!1s0x94ae6f95ba4b09cf:0x3b5fb25c7be2c5b0!8m2!3d-18.7915515!4d-46.4186552!16s%2Fg%2F11pd0zvpc2";
  const mapEmbed = "https://maps.google.com/maps?output=embed&q=-18.7915515,-46.4186552&z=18";
  const [galleryImages, setGalleryImages] = useState<string[]>([
    "https://ejmyabjcspyujjecdquu.supabase.co/storage/v1/object/public/recantopexe/foto1.jpg",
    "https://ejmyabjcspyujjecdquu.supabase.co/storage/v1/object/public/recantopexe/foto2.jpg",
    "https://ejmyabjcspyujjecdquu.supabase.co/storage/v1/object/public/recantopexe/foto3.jpg",
    "https://ejmyabjcspyujjecdquu.supabase.co/storage/v1/object/public/recantopexe/video1.mp4",
    "https://ejmyabjcspyujjecdquu.supabase.co/storage/v1/object/public/recantopexe/video2.mp4",
  ]);
  const [showAll, setShowAll] = useState(false);
  const [showContacts, setShowContacts] = useState(false);
  const [openMobileMenu, setOpenMobileMenu] = useState(false);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);

  const isVideo = (url: string) => /\.(mp4|webm|ogg)$/i.test(url);

  useEffect(() => {
    const onScroll = () => {
      const hero = document.getElementById("hero");
      const threshold = (hero?.offsetHeight ?? 320) - 80;
      setScrolled(window.scrollY > threshold);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <main className="relative min-h-screen bg-transparent text-[#f7f7f5] overflow-hidden">
      <div className="fixed inset-0 -z-10">
        <Image src="/chacara2.jpg" alt="Vista do recanto" fill priority sizes="100vw" className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0f1a14]/60 via-[#0f1a14]/40 to-[#0f1a14]/80" />
      </div>

      <header
        className={`fixed inset-x-0 top-0 z-20 text-[#FFFFFF] transition-colors duration-300 ${
          scrolled ? "bg-[#1f3328] shadow-[0_6px_20px_rgba(0,0,0,0.25)]" : "bg-transparent backdrop-blur-md"
        }`}
      >
        <div className="w-full flex items-center justify-between gap-4 px-6 py-4">
          <Link href="#hero" className="flex items-center gap-3 font-semibold text-lg -ml-6" aria-label="Ir para o topo">
            <div
              className="relative h-14 w-40 overflow-visible"
              style={{ transform: "translateX(5px)", transformOrigin: "left center" }}
            >
              <Image
                src="/LogoPeixe.png"
                alt="Recanto do Peixe"
                fill
                className="object-contain scale-250"
                sizes="160px"
                priority
              />
            </div>
          </Link>
          <nav className="hidden md:flex flex-1 items-center justify-center gap-8 text-lg font-semibold text-[#FFFFFF]">
            <Link
              href="#hero"
              className="inline-flex w-[120px] items-center justify-center text-center hover:text-[#EA5B1B] hover:font-bold transition-all duration-200 hover:-translate-y-0.5"
            >
              Início
            </Link>
            <Link
              href="#localizacao"
              className="inline-flex w-[120px] items-center justify-center text-center hover:text-[#EA5B1B] hover:font-bold transition-all duration-200 hover:-translate-y-0.5"
            >
              Localização
            </Link>
            <Link
              href="#galeria"
              className="inline-flex w-[120px] items-center justify-center text-center hover:text-[#EA5B1B] hover:font-bold transition-all duration-200 hover:-translate-y-0.5"
            >
              Imagens
            </Link>
            <Link
              href="#contato"
              className="inline-flex w-[120px] items-center justify-center text-center hover:text-[#EA5B1B] hover:font-bold transition-all duration-200 hover:-translate-y-0.5"
            >
              Contato
            </Link>
          </nav>

          <button
            className="md:hidden flex items-center justify-center h-10 w-10 text-[#FFFFFF] hover:text-[#EA5B1B] focus:text-[#EA5B1B] active:text-[#EA5B1B] transition"
            onClick={() => setOpenMobileMenu((v) => !v)}
            aria-label="Abrir menu"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>

        {openMobileMenu && (
          <div className="md:hidden bg-[#1f3328] border-t border-[#5B8C5A] px-6 pb-4 space-y-3 text-[#FFFFFF]">
            {[
              { href: "#hero", label: "Inicio" },
              { href: "#localizacao", label: "Localização" },
              { href: "#galeria", label: "Imagens" },
              { href: "#contato", label: "Contato" },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpenMobileMenu(false)}
                className="flex w-full items-center justify-center py-2 border-b border-white/10 last:border-b-0 hover:text-[#EA5B1B] transition text-center"
              >
                {item.label}
              </Link>
            ))}
          </div>
        )}
      </header>

      <div className="pt-28">
        <section id="hero" className="bg-transparent text-[#f7f7f5] scroll-mt-28">
          <div className="mx-auto max-w-6xl px-6 pb-24 grid md:grid-cols-1 gap-10 items-center">
            <div className="space-y-6">
              <h1 className="text-[40px] md:text-[56px] font-semibold leading-tight text-[#FFFFFF]">
                Informações sobre o espaço, reservas e valores para finais de semana e feriados
              </h1>
              <p className="text-base text-[#d8e2dc] max-w-xl">
                Escolha sua data, veja localização e explore as imagens do recanto.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href="https://wa.me/+553499905425"
                  target="_blank"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-[#EA5B1B] hover:bg-[#cf4f16] text-[#0f1a14] font-semibold text-sm shadow-lg transition"
                >
                  Reservar data
                </Link>
                <button
                  onClick={() => setShowContacts(true)}
                  className="inline-flex items-center justify-center px-6 py-3 rounded-full border border-[#5B8C5A] bg-[#0f1a14] text-[#f7f7f5] hover:bg-[#5B8C5A] hover:text-[#0f1a14] text-sm font-medium transition cursor-pointer"
                >
                  Ver contatos
                </button>
              </div>
            </div>
          </div>
        </section>

        <section id="localizacao" className="bg-[#FFFFFF] text-[#0f1a14] scroll-mt-28">
          <div className="mx-auto max-w-6xl px-6 py-20 flex flex-col gap-8">
            <div className="grid gap-8 lg:grid-cols-[1.2fr_0.9fr] items-start">
              <div className="space-y-4">
                <div className="space-y-2">
                  <p className="text-lg uppercase tracking-[0.35em] text-[#EA5B1B]">Localização</p>
                  <h2 className="text-[40px] md:text-[56px] font-semibold text-[#0f1a14]">Onde ficamos</h2>
                  <p className="text-sm text-[#1f3328] max-w-xl">Abra no Google Maps para rotas e referencias de chegada.</p>
                </div>
                <div className="space-y-4 text-sm text-[#1f3328] leading-relaxed">
                  <p>Veja o ponto no mapa e use o botao "Ver no Mapa" para abrir rotas.</p>
                  <p>Salve ou compartilhe a localização direto no Google Maps.</p>
                </div>
                <Link
                  href={mapHref}
                  target="_blank"
                  className="inline-flex w-full sm:w-fit justify-center text-center px-5 py-3 rounded-full bg-[#6BB7DB] text-[#0f1a14] font-semibold text-sm hover:bg-[#5a9abb] transition"
                >
                  Ver no Mapa
                </Link>
              </div>
              <div className="w-full max-w-md lg:max-w-[420px] overflow-hidden rounded-2xl border border-[#dbe7de] shadow-[0_12px_30px_rgba(0,0,0,0.08)] bg-white justify-self-start lg:justify-self-end">
                <div className="relative aspect-[4/3]">
                  <iframe
                    src={mapEmbed}
                    title="Mapa - Recanto do Pexe"
                    loading="lazy"
                    allowFullScreen
                    className="absolute inset-0 h-full w-full border-0"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="galeria" className="bg-[#0f1a14] text-[#f7f7f5] scroll-mt-28">
          <div className="mx-auto max-w-6xl px-6 py-20 flex flex-col gap-6">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
              <div className="space-y-1">
                <p className="text-lg uppercase tracking-[0.35em] text-[#EA5B1B]">Imagens e Vídeos</p>
                <h2 className="text-[40px] md:text-[56px] font-semibold text-[#FFFFFF]">Galeria rápida</h2>
              </div>
              <Link
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  setShowAll(true);
                }}
                className="w-full sm:w-auto text-center text-sm text-[#f7f7f5] px-4 py-2 rounded-full border border-[#5B8C5A] bg-[#0f1a14] hover:bg-[#5B8C5A] hover:text-[#0f1a14] transition"
              >
                Ver mais
              </Link>
            </div>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
              {galleryImages.slice(0, 3).map((img, idx) => (
                <button
                  key={`${idx}-${img}`}
                  type="button"
                  onClick={() => setPreviewUrl(img)}
                  className="group relative h-48 w-full overflow-hidden rounded-2xl bg-[#0f1a14] outline-none transition-transform duration-300 transform-gpu hover:-translate-y-2 cursor-pointer"
                >
                  {isVideo(img) ? (
                    <>
                      <video src={img} className="h-full w-full object-cover" muted playsInline preload="metadata" />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <FaPlay className="text-white/90 text-3xl drop-shadow" />
                      </div>
                    </>
                  ) : (
                    <Image
                      src={img}
                      alt={`Galeria ${idx + 1}`}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover"
                    />
                  )}
                  <div className="absolute inset-0" />
                </button>
              ))}
            </div>
          </div>
        </section>

        <section id="contato" className="bg-[#FFFFFF] text-[#0f1a14] scroll-mt-28">
          <div className="mx-auto max-w-6xl px-6 py-20 flex flex-col md:flex-row items-center md:items-start gap-8 justify-between">
            <div>
              <p className="text-lg uppercase tracking-[0.35em] text-[#EA5B1B]">Contato</p>
              <h3 className="text-[40px] md:text-[56px] font-semibold text-[#0f1a14]">Pronto para reservar?</h3>
              <p className="text-sm text-[#1f3328] max-w-lg">Entre em contato para datas disponiveis, valores e detalhes do espaço.</p>
            </div>
            <div className="flex gap-3">
              <Link
                href="https://wa.me/+553499905425"
                target="_blank"
                className="px-5 py-3 rounded-full bg-[#EA5B1B] text-[#0f1a14] font-semibold text-sm hover:bg-[#cf4f16] transition"
              >
                WhatsApp
              </Link>
              <Link
                href="/links"
                className="px-5 py-3 rounded-full border border-[#5B8C5A] text-[#0f1a14] font-semibold text-sm hover:bg-[#5B8C5A] hover:text-[#0f1a14] transition"
              >
                Ver todos os links
              </Link>
            </div>
          </div>
        </section>
      </div>

      {previewUrl && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center px-4">
          <button
            onClick={() => setPreviewUrl(null)}
            className="absolute top-4 right-6 text-[#f7f7f5] hover:text-[#EA5B1B] text-3xl cursor-pointer"
            aria-label="Fechar visualizacao"
          >
            X
          </button>
          <div className="relative w-full max-w-6xl h-[85vh]">
            {isVideo(previewUrl) ? (
              <video src={previewUrl} className="h-full w-full object-contain" controls autoPlay playsInline />
            ) : (
              <Image src={previewUrl} alt="Imagem ampliada" fill sizes="100vw" className="object-contain" />
            )}
          </div>
        </div>
      )}

      {showAll && (
        <div className="fixed inset-0 z-40 flex items-center justify-center bg-black/70 backdrop-blur-sm px-4">
          <div className="relative w-full max-w-6xl rounded-2xl bg-[#0f1a14] border border-[#5B8C5A] p-6 shadow-[0_20px_80px_rgba(0,0,0,0.6)]">
            <button
              onClick={() => setShowAll(false)}
              className="absolute top-4 right-4 text-[#f7f7f5] hover:text-[#EA5B1B] text-xl cursor-pointer"
              aria-label="Fechar galeria completa"
            >
              X
            </button>
            <h3 className="text-2xl font-semibold text-[#FFFFFF] mb-4">Todas as imagens e videos</h3>
            <div
              className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 max-h-[70vh] overflow-y-auto pr-2 bg-[#0f1a14]"
              style={{ scrollbarColor: "#5B8C5A #0f1a14", scrollbarWidth: "thin" }}
            >
              {galleryImages.map((img, idx) => (
                <button
                  key={`${idx}-${img}`}
                  type="button"
                  onClick={() => setPreviewUrl(img)}
                  className="relative h-40 w-full overflow-hidden rounded-xl bg-[#0f1a14] outline-none cursor-pointer"
                >
                  {isVideo(img) ? (
                    <>
                      <video src={img} className="h-full w-full object-cover" muted playsInline preload="metadata" />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <FaPlay className="text-white/90 text-2xl drop-shadow" />
                      </div>
                    </>
                  ) : (
                    <Image
                      src={img}
                      alt={`Galeria completa ${idx + 1}`}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover"
                    />
                  )}
                  <div className="absolute inset-0" />
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {showContacts && (
        <div className="fixed inset-0 z-40 flex items-center justify-center bg-black/70 backdrop-blur-sm px-4">
          <div className="relative w-full max-w-md rounded-2xl bg-[#0f1a14] border border-[#5B8C5A] p-6 shadow-[0_20px_80px_rgba(0,0,0,0.6)] text-[#f7f7f5]">
            <button
              onClick={() => setShowContacts(false)}
              className="absolute top-4 right-4 text-[#f7f7f5] hover:text-[#EA5B1B] text-xl cursor-pointer"
              aria-label="Fechar contatos"
            >
              X
            </button>
            <h3 className="text-2xl font-semibold mb-4">Contatos</h3>
            <div className="flex flex-col gap-3">
              <Link
                href="https://wa.me/+5534999783452"
                target="_blank"
                className="inline-flex items-center justify-center px-4 py-3 rounded-xl border border-[#5B8C5A] bg-[#0f1a14] hover:bg-[#5B8C5A] hover:text-[#0f1a14] transition text-sm font-medium"
              >
                WhatsApp 1
              </Link>
              <Link
                href="https://wa.me/+553499905425"
                target="_blank"
                className="inline-flex items-center justify-center px-4 py-3 rounded-xl border border-[#5B8C5A] bg-[#0f1a14] hover:bg-[#5B8C5A] hover:text-[#0f1a14] transition text-sm font-medium"
              >
                WhatsApp 2
              </Link>
            </div>
          </div>
        </div>
      )}
      <style jsx global>{`
        html {
          scroll-behavior: smooth;
        }
      `}</style>
    </main>
  );
}
