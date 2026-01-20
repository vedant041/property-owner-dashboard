import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

export default function AboutUs() {
  return (
    <div className="relative min-h-screen text-white">

      {/* BACKGROUND */}
      <div className="absolute inset-0 -z-10">
        <img
          src="/Backgroundimg.png"
          className="w-full h-full object-cover"
          alt="bg"
        />
        {/* Stronger overlay to avoid dull look */}
        <div className="absolute inset-0 bg-[#07182F]/60 backdrop-blur-[2px]" />
      </div>

      <Navbar />

      <main className="max-w-[1440px] mx-auto px-10 py-10 space-y-12">

        {/* BREADCRUMB */}
        <p className="text-sm text-white/70">Home / About Us</p>

        {/* HERO CARD */}
        <section
          className="
            grid grid-cols-[1.4fr_1fr] gap-10
            bg-[#1F3A5F]/20
            backdrop-blur-xl
            border border-white/30
            rounded-[16px]
            p-10
          "
        >
          {/* LEFT */}
          <div className="space-y-5">
            <h1 className="text-4xl font-semibold">About Us</h1>

            <p className="text-white/90">
              Building a transparent techno-driven property ecosystem.
            </p>

            <h3 className="text-[#D7A95D] font-semibold mt-6 text-lg">
              Who We Are
            </h3>

            <p className="text-white/80 leading-relaxed max-w-[620px]">
              We are a technology-enabled real estate platform focused on
              simplifying property investment and ownership. By combining data,
              transparency, and smart tools, we help individuals and institutions
              invest with confidence.
            </p>
          </div>

          {/* RIGHT IMAGE */}
          <div className="flex justify-center items-center">
            <img
              src="/AboutUsimg.png"
              className="w-[420px] drop-shadow-[0_20px_40px_rgba(0,0,0,0.5)]"
              alt="city"
            />
          </div>
        </section>

        {/* MISSION & VISION */}
        <section className="grid grid-cols-2 gap-8">
          {[
            {
              title: "Our Mission",
              text:
                "Our mission is to make property ownership and investment transparent, accessible, and future-ready by leveraging technology, data, and trust. We aim to empower individuals and communities to participate in sustainable real-estate growth, starting from India and expanding globally.",
            },
            {
              title: "Our Vision",
              text:
                "Our vision is to build a technology-driven property ecosystem that connects investors, developers, and communities on a single trusted platform. By combining investors with responsible development, we envision shaping smarter cities, stronger economies, and long-term value creation across India and beyond.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="
                bg-[#1F3A5F]/20
                backdrop-blur-xl
                border border-white/30
                rounded-[16px]
                p-8
              "
            >
              <h3 className="text-[#D7A95D] font-semibold mb-4 text-lg">
                {item.title}
              </h3>
              <p className="text-white/80 leading-relaxed">
                {item.text}
              </p>
            </div>
          ))}
        </section>

        {/* WHAT WE DO */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold">What We Do</h2>

          <p className="text-white/80 max-w-[900px]">
            We are a technology-enabled real estate platform focused on simplifying
            property investment and ownership.
          </p>

          <div className="grid grid-cols-4 gap-6">
            {[
              {
                title: "Property Management",
                desc: "List and manage properties easily through our intuitive platform",
                icon: "/icon1.png",
              },
              {
                title: "Smart Investments",
                desc: "Access fractional investments in high-value properties for better returns",
                icon: "/icon2.png",
              },
              {
                title: "Investor Insights",
                desc: "Transparent reporting and analytics to track portfolio performance",
                icon: "/icon3.png",
              },
              {
                title: "Secure & Trustworthy",
                desc: "Industry-leading security measures to protect investments",
                icon: "/icon4.png",
              },
            ].map((card, i) => (
              <div
                key={i}
                className="
                  bg-[#1F3A5F]/25
                  backdrop-blur-xl
                  border border-white/30
                  rounded-[16px]
                  p-6
                  space-y-4
                "
              >
                <img src={card.icon} className="w-12 h-12" alt="" />
                <h3 className="font-semibold text-[#D7A95D]">
                  {card.title}
                </h3>
                <p className="text-sm text-white/75">
                  {card.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* WHY CHOOSE US */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold">Why Choose Us</h2>

          <p className="text-white/80">
            Trusted properties. Transparent processes. Smarter investments.
          </p>

          <div
            className="
              grid grid-cols-2 gap-6
              bg-[#1F3A5F]/25
              backdrop-blur-xl
              border border-white/30
              rounded-[16px]
              p-6
            "
          >
            <div className="flex items-start gap-4">
              <div className="text-green-400 text-xl">✔</div>
              <div>
                <h4 className="font-semibold">Transparent Process</h4>
                <p className="text-sm text-white/70">
                  Full visibility into investments and returns.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="text-[#FFD166] text-xl">📊</div>
              <div>
                <h4 className="font-semibold">Data-Driven Insights</h4>
                <p className="text-sm text-white/70">
                  Accurate analytics to make informed decisions.
                </p>
              </div>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
