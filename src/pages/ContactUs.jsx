import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import ContactInfoCard from "../components/contact/ContactInfoCard";
import ContactFormCard from "../components/contact/ContactFormCard";

export default function ContactUs() {
  return (
    <div className="min-h-screen text-white relative overflow-hidden">
      
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <img
          src="/Backgroundimg.png"
          className="w-full h-full object-cover"
          alt="bg"
        />
        <div className="absolute inset-0 bg-[rgba(11,31,58,0.6)] " />
      </div>

      <Navbar />

      <main className="max-w-[1440px] mx-auto px-10 py-10">
        
        {/* Breadcrumb */}
        <p className="text-sm text-white/60 mb-2">
          Home &gt; Contact Us
        </p>

        {/* Header */}
        <h1 className="text-3xl font-bold mb-2">Contact Us</h1>
        <p className="text-white/70 mb-8">
          We’re here to help you with investments, partnerships, and support.
        </p>

        {/* CONTENT */}
        <div className="grid grid-cols-[1fr_1fr] gap-8">
          <ContactInfoCard />
          <ContactFormCard />
        </div>
      </main>

      <Footer />
    </div>
  );
}
