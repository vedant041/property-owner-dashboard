export default function ProgressBar({ value }) {
  return (
    <div className="w-full bg-white/20 h-2 rounded-full overflow-hidden">
      <div
        className="h-full bg-green-400 rounded-full transition-all duration-500"
        style={{ width: `${value}%` }}
      />
    </div>
  );
}
