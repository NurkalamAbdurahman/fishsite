import React, { memo } from "react";
import { Heart, ShieldCheck, Truck } from "lucide-react";

const REASONS = [
  {
    id: 1,
    title: "Ikan Sehat & Berkualitas",
    body:
      "Dipilih dari stok terbaik dan melalui pemeriksaan kesehatan secara menyeluruh.",
    Icon: Heart,
  },
  {
    id: 2,
    title: "Karantina Ketat",
    body:
      "Setiap ikan menjalani proses karantina untuk memastikan bebas penyakit.",
    Icon: ShieldCheck,
  },
  {
    id: 3,
    title: "Garansi Live Arrival",
    body:
      "Kami menjamin ikan sampai dengan aman dan dalam kondisi hidup.",
    Icon: Truck,
  },
];

function WhyChooseUs() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-24">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">
          Mengapa Memilih FishSite?
        </h2>
        <p className="mt-4 text-lg text-slate-600">
          Kami fokus pada kualitas, keamanan, dan kepuasan pelanggan dalam setiap
          pengiriman ikan.
        </p>
      </div>

      <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {REASONS.map(({ id, title, body, Icon }) => (
          <article
            key={id}
            className="rounded-2xl bg-white p-8 text-center shadow-sm transition hover:shadow-md"
          >
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-blue-50 text-blue-600">
              <Icon size={28} aria-hidden />
            </div>

            <h3 className="mt-6 text-lg font-bold text-slate-900">
              {title}
            </h3>

            <p className="mt-3 text-sm md:text-base text-slate-600">
              {body}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default memo(WhyChooseUs);
