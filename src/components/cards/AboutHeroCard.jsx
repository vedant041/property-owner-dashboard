export default function AboutHeroCard() {
  return (
    <div className="rounded-[15px] border border-white/20 bg-[rgba(31,58,95,0.15)] backdrop-blur-md p-8 grid grid-cols-[1.2fr_1fr] gap-8">

      <div>
        <p className="text-sm text-white/70 mb-2">Home / About Us</p>

        <h1 className="text-3xl font-bold mb-3">About Us</h1>
        <p className="text-white/80 mb-6">
          Building a transparent techno-driven property ecosystem.
        </p>

        <h3 className="text-lg font-semibold mb-2 text-[#FFD24A]">
          Who We Are
        </h3>
        <p className="text-white/80 leading-relaxed">
          We are a technology-enabled real estate platform focused on simplifying
          property investment and ownership. By combining data, transparency,
          and smart tools, we help individuals and institutions invest with confidence.
        </p>
      </div>

      <div className="flex items-center justify-center">
        <img
          src="/AboutUsimg.png"   
          alt="Buildings"
          className="w-full max-w-[420px]"
        />
      </div>

    </div>
  );
}
