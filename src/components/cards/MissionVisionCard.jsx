export default function MissionVisionCard() {
  return (
    <div
      className="
        w-[360px]
        h-[489px]
        rounded-[15px]
        border
        border-white/30
        backdrop-blur-sm
        flex
        flex-col
        overflow-hidden
      "
      style={{
        background: "rgba(31,58,95,0.10)", // #1F3A5F @10%
      }}
    >
      {/* HEADER */}
      <div className="p-4 border-b border-white/20">
        <h2 className="text-lg font-semibold text-white">
          Our Mission & Vision
        </h2>
        <p className="text-sm text-white/70 mt-1">
          Shaping a transparent, tech-enabled future for property investment
        </p>
      </div>

      {/* IMAGE */}
      <div className="h-[160px] w-full">
        <img
          src="/earthimg.png"
          alt="Mission Vision"
          className="w-full h-full object-cover"
        />
      </div>

      {/* CONTENT */}
      <div className="flex flex-col gap-4 p-4 text-sm text-white/85">

        {/* MISSION */}
        <div>
          <h3 className="text-[#FFD24A] font-semibold mb-1">
            Mission
          </h3>
          <p className="leading-snug text-white/85">
            Our mission is to make property ownership and investment
            transparent, accessible, and future-ready by leveraging
            technology, data, and trust.
          </p>
        </div>

        {/* VISION */}
        <div>
          <h3 className="text-[#FFD24A] font-semibold mb-1">
            Vision
          </h3>
          <p className="leading-relaxed">
            Our vision is to build a technology-driven property ecosystem
            that connects investors, developers, and communities on a
            single trusted platform.
          </p>
        </div>

      </div>
    </div>
  );
}
