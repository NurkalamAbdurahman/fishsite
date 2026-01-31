import React from "react";

function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-cyan-50 py-24">
      <div className="absolute top-[-120px] right-[-120px] w-96 h-96 bg-cyan-200/40 rounded-full blur-3xl" />
      <div className="absolute bottom-[-120px] left-[-120px] w-96 h-96 bg-blue-200/40 rounded-full blur-3xl" />

n      <div className="relative max-w-7xl mx-auto px-6 py-24 md:py-32 text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900">
          Ikan Sehat & Premium <br className="hidden md:block" /> untuk Aquarium Anda
        </h1>

        <p className="mt-6 max-w-2xl mx-auto text-lg md:text-xl text-slate-600">FishSite menyediakan ikan pilihan dengan karantina ketat, kualitas terjamin, dan garansi live arrival untuk setiap pengiriman.</p>

        <div className="mt-10 flex justify-center">
          <a href="#products" aria-label="Lihat koleksi ikan" className="inline-flex items-center justify-center px-8 py-4 rounded-full font-bold text-white bg-gradient-to-r from-blue-600 to-cyan-500 hover:scale-105 active:scale-95 transition shadow-xl">Lihat Koleksi Ikan</a>
        </div>
      </div>
    </section>
  );
}

export default React.memo(Hero);
