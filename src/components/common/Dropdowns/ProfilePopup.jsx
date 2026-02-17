
export default function ProfilePopup({ onLogout }) {
  return (
    <div
      className="
        absolute right-0 mt-2
        z-[9999]
        w-[220px]
        bg-[#43557A]
        rounded-md
        border border-white/20
        shadow-lg
        overflow-hidden
        z-50
      "
    >

      {/* USER */}
      <div className="p-4 border-b border-white/20">
        <p className="font-medium">James Bon</p>
        <p className="text-xs text-white/70">
          user234@gmail.com
        </p>
      </div>

      {/* ACTIONS */}
      <div className="p-2 space-y-1">

        <button 
        className="w-full text-left px-3 py-2 hover:bg-white/10 rounded">
          Manage Profile
        </button>

        <button
          onClick={onLogout}
          className="w-full text-left px-3 py-2 text-red-400 hover:bg-white/10 rounded"
        >
          Log out
        </button>

      </div>

    </div>
  );
}
