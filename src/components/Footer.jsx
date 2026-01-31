import React from 'react'

export default function Footer() {
  return (
    <footer className="py-8 bg-gray-100">
      <div className="container mx-auto px-6 max-w-6xl text-center text-sm text-gray-600">
        © {new Date().getFullYear()} FishSite. Semua hak dilindungi.
      </div>
    </footer>
  )
}
