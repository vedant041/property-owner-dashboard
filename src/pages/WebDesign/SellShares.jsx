import PropertyHeader from "../../components/property/PropertyHeader";
import PropertyAbout from "../../components/property/PropertyAbout";
import PropertyDetails from "../../components/property/PropertyDetails";
import PropertyImages from "../../components/property/PropertyImages";

import Navbar from "../../components/WebDesign/Navbar";
import Footer from "../../components/WebDesign/Footer";

export default function SellShares() {
  return (
    <div className="relative min-h-screen overflow-hidden">

      {/* BACKGROUND IMAGE */}
      <div className="absolute inset-0 -z-10">
        <img
          src="/Backgroundimg.png"
          alt="bg"
          className="w-full h-full object-cover"
        />

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-[#07182F]/55" />
      </div>

      {/* NAVBAR */}
      <Navbar />

      {/* PAGE CONTENT */}
      <main className="relative z-10 pt pb-20">

        <div className="max-w-[1280px] mx-auto px-6">

          {/* HEADER */}
          <div className="mb-10">
            <PropertyHeader mode="sell" />
          </div>

          {/* MAIN GRID (FIXED) */}
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-6 items-start">

            {/* LEFT COLUMN */}
            <div className="flex flex-col gap-6">
              <PropertyAbout />
              <PropertyImages />
            </div>

            {/* RIGHT COLUMN */}
            <div>
              <PropertyDetails />
            </div>

          </div>

        </div>
      </main>

      {/* FOOTER */}
      <Footer />
    </div>
  );
}
