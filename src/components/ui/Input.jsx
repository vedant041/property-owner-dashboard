export default function Input({ label, type = "text", placeholder }) {
  return (
    <div className="flex flex-col gap-1">
      <label className="text-xs text-white/70">{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        className="
          h-10 px-3 rounded-md
          bg-white/10
          border border-white/20
          text-sm text-white
          outline-none
          focus:border-white/40
        "
      />
    </div>
  );
}
