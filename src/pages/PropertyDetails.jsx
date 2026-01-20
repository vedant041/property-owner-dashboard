import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import PropertyGallery from "../components/property/PropertyGallery";
import PropertyInfoCard from "../components/property/PropertyInfoCard";
import PropertyMoreDetails from "../components/property/PropertyMoreDetails";
import AboutProperty from "../components/property/AboutProperty";

export default function PropertyDetails() {
  return (
    <div className="min-h-screen text-white relative">
      
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <img
          src="/Backgroundimg.png"
          className="w-full h-full object-cover"
          alt="background"
        />
        {/* ✅ FIGMA MATCHED OVERLAY */}
        <div className="absolute inset-0 bg-[#0B1F3A]/15 " />
      </div>

      <Navbar />

      <main className="max-w-[1440px] mx-auto px-10 py-10 space-y-8">

        {/* Breadcrumb */}
        <p className="text-sm text-white/60">
          Home &gt; Property Listings &gt; 2 BHK Apartment in Andheri East
        </p>

        {/* TOP SECTION */}
        <div className="grid grid-cols-[1.5fr_1fr] gap-6 items-start">
          <PropertyGallery />
          <PropertyInfoCard />
        </div>

        <PropertyMoreDetails />
        <AboutProperty />

      </main>

      <Footer />
    </div>
  );
}
