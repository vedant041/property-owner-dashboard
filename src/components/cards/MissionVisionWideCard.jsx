export default function MissionVisionWideCard({ title, text }) {
  return (
    <div
      className="
        rounded-[15px]
        border
        backdrop-blur-xl
        text-white
        flex
        flex-col
        gap-6
      "
      style={{
        width: "644px",
        minHeight: "263px", // ✅ FIX: hug content, not clip
        padding: "24px",
        background: "rgba(31, 58, 95, 0.1)",
        borderColor: "rgba(238, 238, 238, 0.3)",
      }}
    >
      <h3 className="text-lg font-semibold mb-2 text-[#FFD24A]">
        {title}
      </h3>
      <p className="text-white/80 leading-relaxed">
        {text}
      </p>
    </div>
  );
}
