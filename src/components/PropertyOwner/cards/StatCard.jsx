export default function StatCard({
  title,
  value,
  Icon,
  iconBg,
  iconColor,
}) {
  return (
    <div
      className="
        flex items-center
        gap-6
        px-6
        rounded-[9px]
        backdrop-blur-xl
      "
      style={{
        width: "300px",
        height: "107px",
        background: "rgba(41,53,77,0.65)",
        border: "1px solid rgba(255,255,255,0.15)",
        boxShadow: "0px 4px 12px rgba(0,0,0,0.25)",
      }}
    >
      {/* ICON CIRCLE */}
      <div
        className="
          w-[50px]
          h-[50px]
          rounded-full
          flex items-center justify-center
        "
        style={{
          background: iconBg,
        }}
      >
        <Icon size={22} color={iconColor} />
      </div>

      {/* TEXT CONTENT */}
      <div className="flex flex-col justify-center">
        <p className="text-[14px] text-white/70 leading-none">
          {title}
        </p>

        <p className="text-[24px] font-semibold text-white mt-1">
          {value}
        </p>
      </div>
    </div>
  );
}
