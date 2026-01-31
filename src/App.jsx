import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import WhyChooseUs from "./components/WhyChooseUs";
import ProductList from "./components/ProductList";
import CTA from "./components/CTA";
import SocialProof from "./components/SocialProof";
import Tips from "./components/Tips";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col antialiased bg-slate-50 text-slate-900">
      <Navbar />

      <main className="flex-grow">
        <Hero />

        <WhyChooseUs />

        <ProductList />

        <CTA />

        <SocialProof />

        <Tips />
      </main>

      <Footer />
    </div>
  );
}
