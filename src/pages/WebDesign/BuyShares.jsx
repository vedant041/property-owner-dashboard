import PropertyHeader from "../../components/property/PropertyHeader";
import PropertyAbout from "../../components/property/PropertyAbout";
import PropertyDetails from "../../components/property/PropertyDetails";
import PropertyImages from "../../components/property/PropertyImages";

import Navbar from "../../components/WebDesign/Navbar";
import Footer from "../../components/WebDesign/Footer";

export default function BuyShares() {
  return (
    <div className="relative min-h-screen overflow-hidden text-white">

      {/* ================= BACKGROUND ================= */}
      <div className="absolute inset-0 -z-10">
        <img
          src="/Backgroundimg.png"
          alt="bg"
          className="w-full h-full object-cover"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-[#07182F]/80" />
      </div>

      {/* ================= NAVBAR ================= */}
      <Navbar />

      {/* ================= MAIN CONTENT ================= */}
      <main className="relative z-10 pt-32 pb-20">

        {/* Centered Container */}
        <div className="max-w-[1280px] mx-auto px-6">

          {/* HEADER */}
          {/* HEADER */}
        <div className="mb-10">
          <PropertyHeader mode="buy" />
        </div>

        {/* MAIN GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-6 items-start">

          <div className="flex flex-col gap-6">
            <PropertyAbout />
            <PropertyImages />
          </div>

          <div>
            <PropertyDetails />
          </div>

        </div>

        </div>
      </main>

      {/* ================= FOOTER ================= */}
      <Footer />
    </div>
  );
}
