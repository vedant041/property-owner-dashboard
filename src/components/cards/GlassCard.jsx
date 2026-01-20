export default function GlassCard({ children, className = "" }) {
  return (
    <div
      className={`
        rounded-2xl
        bg-white/10
        backdrop-blur-xl
        border border-white/30
        shadow-[0_0_40px_rgba(255,255,255,0.08)]
        p-6
        flex
        flex-col
        ${className}
      `}
    >
      {children}
    </div>
  );
}
