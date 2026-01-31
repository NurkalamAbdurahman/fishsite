import React, { useState, useEffect, useCallback } from "react";
import { Fish } from "lucide-react";

const NAV_LINKS = [
  { name: "Produk", href: "#products" },
  { name: "Tips", href: "#tips" },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Scroll detection
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => (document.body.style.overflow = "");
  }, [isOpen]);

  const toggle = useCallback(() => setIsOpen(v => !v), []);
  const close = useCallback(() => setIsOpen(false), []);

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          onClick={close}
          className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm md:hidden"
        />
      )}

      {/* Navbar */}
      <nav
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300
        ${scrolled
          ? "bg-white/80 backdrop-blur-xl shadow-md"
          : "bg-gradient-to-b from-white/70 to-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto h-16 px-6 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center shadow-md">
              <Fish size={20} className="text-white" />
            </div>
            <span className="text-xl font-extrabold tracking-tight text-slate-800">
              Fish<span className="text-blue-600">Site</span>
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-10">
            {NAV_LINKS.map(link => (
              <a
                key={link.name}
                href={link.href}
                className="relative text-sm font-semibold text-slate-600 hover:text-blue-600 transition
                after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0
                after:bg-blue-600 hover:after:w-full after:transition-all"
              >
                {link.name}
              </a>
            ))}

            <a
              href="https://wa.me/6288806371058?text=Halo%20saya%20tertarik%20dengan%20ikan%20di%20FishSite"
              className="px-6 py-2.5 rounded-full text-sm font-bold text-white
              bg-gradient-to-r from-blue-600 to-cyan-500
              shadow-lg hover:scale-105 active:scale-95 transition"
            >
              Mulai Sekarang
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={toggle}
            aria-label="Toggle menu"
            aria-expanded={isOpen}
            className="md:hidden p-2 rounded-lg hover:bg-blue-50 transition"
          >
            <svg
              className="w-6 h-6 text-slate-700"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed top-16 inset-x-0 z-50
        bg-white/95 backdrop-blur-xl transition-all duration-300
        ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
      >
        <div className="px-6 py-8 space-y-6">
          {NAV_LINKS.map(link => (
            <a
              key={link.name}
              href={link.href}
              onClick={close}
              className="block text-lg font-semibold text-slate-700 hover:text-blue-600 transition"
            >
              {link.name}
            </a>
          ))}

          <a
            href="https://wa.me/6288806371058?text=Halo%20saya%20tertarik%20dengan%20ikan%20di%20FishSite"
            className="block w-full py-3 rounded-xl text-center font-bold text-white
            bg-gradient-to-r from-blue-600 to-cyan-500 shadow-lg"
          >
            Mulai Sekarang
          </a>
        </div>
      </div>
    </>
  );
}

export default React.memo(Navbar);
