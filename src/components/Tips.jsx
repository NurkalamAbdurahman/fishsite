import React, { memo } from "react";

const TIPS = [
  {
    id: 1,
    title: "Pilih Ikan yang Sehat",
    body:
      "Perhatikan kelincahan, warna cerah, dan respon ikan sebelum membeli.",
  },
  {
    id: 2,
    title: "Perhatikan Suhu Air",
    body:
      "Sesuaikan suhu air aquarium dengan kebutuhan spesifik tiap jenis ikan.",
  },
  {
    id: 3,
    title: "Gunakan Pakan Berkualitas",
    body:
      "Pakan seimbang membantu pertumbuhan optimal dan menjaga daya tahan ikan.",
  },
];

function Tips() {
  return (
    <section id="tips" className="max-w-7xl mx-auto px-6 py-24">
      <div className="mx-auto max-w-2xl text-center">
        <h3 className="text-3xl md:text-4xl font-extrabold text-slate-900">
          Tips Perawatan Aquarium
        </h3>
        <p className="mt-4 text-lg text-slate-600">
          Panduan singkat agar ikan tetap sehat dan aquarium selalu terlihat
          optimal.
        </p>
      </div>

      <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {TIPS.map(({ id, title, body }) => (
          <article
            key={id}
            className="rounded-2xl bg-white p-6 shadow-sm transition hover:shadow-md"
          >
            <h4 className="text-lg font-bold text-slate-900">
              {title}
            </h4>
            <p className="mt-3 text-sm md:text-base text-slate-600">
              {body}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default memo(Tips);
