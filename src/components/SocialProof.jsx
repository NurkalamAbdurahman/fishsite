import React, { memo } from "react";

const PROOFS = [
  { id: 1, title: "10k+", body: "Transaksi terpercaya" },
  { id: 2, title: "4.9 / 5", body: "Rating pelanggan" },
  { id: 3, title: "99%", body: "Live arrival rate pengiriman" },
];

function SocialProof() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-24">
      <div className="mx-auto max-w-2xl text-center">
        <h3 className="text-3xl md:text-4xl font-extrabold text-slate-900">
          Dipercaya Ribuan Pelanggan
        </h3>
        <p className="mt-4 text-lg text-slate-600">
          Reputasi kami dibangun dari kualitas ikan, pengemasan aman, dan
          pelayanan profesional.
        </p>
      </div>

      <div className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-8">
        {PROOFS.map(({ id, title, body }) => (
          <div
            key={id}
            className="rounded-2xl bg-white/70 backdrop-blur p-8 text-center
            shadow-sm transition hover:shadow-md"
          >
            <div className="text-4xl md:text-5xl font-extrabold text-blue-600">
              {title}
            </div>
            <p className="mt-3 text-sm md:text-base text-slate-600">
              {body}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default memo(SocialProof);
