export default function PropertyAbout() {
  return (
    <div
      className="
        w-[590px]
        h-[206px]
        rounded-[15px]
        bg-[#1F3A5F]/10
        backdrop-blur-md
        border border-white/30
        p-[24px]
        flex flex-col
        gap-[14px]
        text-white
      "
    >
      {/* TITLE */}
      <h3 className="text-[16px] font-semibold leading-tight">
        About Property
      </h3>

      {/* DESCRIPTION */}
      <p className="text-[14px] leading-relaxed text-white/90">
        This well-maintained 2 BHK apartment in Andheri East offers spacious
        interiors, natural light, and easy access to major roads and daily
        conveniences. Ideal for families or working professionals looking for a
        comfortable urban home.
      </p>
    </div>
  );
}
