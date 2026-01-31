import React from "react";

const whatsappLink =
  "https://wa.me/6288806371058?text=Halo%20saya%20tertarik%20dengan%20ikan%20di%20FishSite";

function CTA() {
  return (
    <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-600 to-cyan-500 text-white">
      
      <div className="absolute -top-20 -right-20 w-64 h-64 bg-white/20 rounded-full blur-3xl" />
      <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-white/10 rounded-full blur-3xl" />

      <div className="relative max-w-5xl mx-auto px-6 py-16 text-center">
        <h3 className="text-3xl md:text-4xl font-extrabold tracking-tight">
          Siap Memesan Ikan Premium Anda?
        </h3>

        <p className="mt-4 text-base md:text-lg text-white/90">Konsultasikan kebutuhan ikan hias Anda dan dapatkan pengiriman aman, cepat, dan terjamin kualitasnya.</p>

        <a href={whatsappLink} target="_blank" rel="noopener noreferrer" aria-label="Hubungi FishSite via WhatsApp" className="inline-flex items-center justify-center mt-8 px-8 py-4 rounded-full bg-white text-blue-600 font-bold hover:scale-105 active:scale-95 transition shadow-xl">Hubungi via WhatsApp</a>
      </div>
    </div>
  );
}

export default React.memo(CTA);
