import { useState } from "react";
import Navbar from "../components/layout/Navbar";
import PropertyLayoutCard from "../components/cards/PropertyLayoutCard";
import InvestorCard from "../components/cards/InvestorCard";
import MembershipCard from "../components/cards/MembershipCard";
import MissionVisionCard from "../components/cards/MissionVisionCard";
import Footer from "../components/layout/Footer";

export default function Home() {
  const [openAuth, setOpenAuth] = useState(false);

  return (
    <div className="min-h-screen text-white relative overflow-hidden">

      {/* Background Image + LIGHT Overlay (Figma style) */}
      <div className="absolute inset-0 -z-10">
        <img
          src="/Backgroundimg.png"
          alt="background"
          className="w-full h-full object-cover"
        />

        {/* LIGHT gradient overlay */}
        <div
          className="
            absolute inset-0
            bg-gradient-to-b
            from-[rgba(11,31,58,0.35)]
            via-[rgba(11,31,58,0.25)]
            to-[rgba(11,31,58,0.45)]
          "
        />
      </div>

      <Navbar />

      {/* MAIN CONTENT */}
      <main className="max-w-[1440px] mx-auto px-10 py-10">
        {/* 🔴 IMPORTANT FIX IS HERE */}
        <div className="grid grid-cols-[533px_420px_360px] gap-6 items-stretch">

          {/* LEFT COLUMN */}
          <PropertyLayoutCard />

          {/* CENTER COLUMN */}
          <InvestorCard />

          {/* RIGHT COLUMN */}
          <div className="flex flex-col gap-6 h-full">
            <MembershipCard />
            <MissionVisionCard />
          </div>

        </div>
      </main>

      <Footer />

      {openAuth && (
        <AuthModal onClose={() => setOpenAuth(false)} />
      )}
    </div>
  );
}
