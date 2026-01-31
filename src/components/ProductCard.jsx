import React, { useMemo, useState, memo } from "react";

function ProductCard({ product }) {
  if (!product) return null;

  const {
    name = "Produk",
    description = "",
    price = 0,
    category = "",
    featured = false,
    images: imagesProp,
    image,
  } = product;

  const images = useMemo(() => {
    if (Array.isArray(imagesProp) && imagesProp.length > 0) return imagesProp;
    if (image) return [image];
    return [];
  }, [imagesProp, image]);

  const [activeIndex, setActiveIndex] = useState(0);

  const mainImage = images[activeIndex];

  return (
    <div className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300">
      <div className="relative h-52 bg-slate-100 overflow-hidden">
        {mainImage ? (
          <img
            src={mainImage}
            alt={name}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-sm text-slate-400">
            No Image
          </div>
        )}

        {featured && (
          <span className="absolute top-4 left-4 rounded-full px-3 py-1 text-xs font-bold text-white shadow bg-gradient-to-r from-blue-600 to-cyan-500">
            Unggulan
          </span>
        )}

        {images.length > 1 && (
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
            {images.map((src, i) => (
              <button
                key={src}
                type="button"
                onClick={() => setActiveIndex(i)}
                aria-label={`Gambar ${i + 1}`}
                className={`w-9 h-9 rounded-full overflow-hidden border-2 transition
                  ${
                    i === activeIndex
                      ? "border-white ring-2 ring-cyan-400"
                      : "border-transparent"
                  }`}
              >
                <img
                  src={src}
                  alt={`${name} ${i + 1}`}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        )}
      </div>

      <div className="p-5">
        <h4 className="text-lg font-bold text-slate-900 leading-tight">
          {name}
        </h4>

        {description && (
          <p className="mt-2 text-sm text-slate-600 line-clamp-2">
            {description}
          </p>
        )}

        <div className="mt-5 flex items-center justify-between">
          <span className="text-xl font-extrabold text-blue-600">
            Rp{Number(price).toLocaleString("id-ID")}
          </span>

          {category && (
            <span className="text-xs font-semibold uppercase tracking-wide text-slate-500">
              {category}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

export default memo(ProductCard);
