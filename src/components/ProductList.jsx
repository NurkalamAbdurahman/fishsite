import React, { useEffect, useMemo, useState } from "react";
import ProductCard from "./ProductCard";
import { getProducts } from "../services/productService";

function ProductList() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    async function fetchProducts() {
      try {
        const data = await getProducts({ signal: controller.signal });
        setProducts(Array.isArray(data) ? data : []);
      } catch (err) {
        if (err.name !== "AbortError") {
          setError(true);
        }
      } finally {
        setLoading(false);
      }
    }

    fetchProducts();

    return () => controller.abort();
  }, []);

  const sortedProducts = useMemo(() => {
    return [...products].sort(
      (a, b) => Number(b?.featured) - Number(a?.featured)
    );
  }, [products]);

  return (
    <section id="products" className="max-w-7xl mx-auto px-6 py-24">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">
          Koleksi Ikan Pilihan
        </h2>
        <p className="mt-4 text-lg text-slate-600">
          Pilih ikan terbaik dengan kualitas terjamin untuk mempercantik
          aquarium Anda.
        </p>
      </div>

      <div className="mt-14">
        {loading && <SkeletonGrid />}

        {!loading && error && (
          <p className="text-center text-red-500 font-medium">
            Gagal memuat produk. Silakan coba lagi.
          </p>
        )}

        {!loading && !error && sortedProducts.length === 0 && (
          <p className="text-center text-slate-500">
            Produk belum tersedia.
          </p>
        )}

        {!loading && !error && sortedProducts.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {sortedProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

function SkeletonGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {Array.from({ length: 6 }).map((_, i) => (
        <div
          key={i}
          className="h-80 rounded-2xl bg-slate-200 animate-pulse"
        />
      ))}
    </div>
  );
}

export default ProductList;
