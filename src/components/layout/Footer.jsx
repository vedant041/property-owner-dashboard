import { Icon } from "@iconify/react";

export default function Footer() {
  return (
    <footer
      className="
        w-full
        h-[72px]
        flex
        items-center
        justify-center
        relative
        backdrop-blur-md
      "
      style={{
        background: "rgba(41,53,77,0.12)",
      }}
    >
      {/* TOP GRADIENT BORDER */}
      <div
        className="absolute top-0 left-0 w-full h-[2px]"
        style={{
          background:
            "linear-gradient(to right, #111629, #ffffff, #111629)",
        }}
      />

      {/* INNER CONTAINER */}
      <div className="w-[1440px] px-8 flex items-center justify-between">
        
        {/* LEFT – LOGO */}
        <div className="flex items-center">
          <div className="bg-[#E0E0E080] text-[#FAE699] px-6 py-2 w-100px p-45px text-sm">
            Logo
          </div>
        </div>

        {/* CENTER – COPYRIGHT */}
        <p className="text-sm text-white/80">
          © 2026 Accelgrowthtechnology. All rights reserved.
        </p>

        {/* RIGHT – SOCIAL ICONS */}
        <div className="flex items-center gap-3">
          {[
            { icon: "mdi:close", color: "text-white" },
            { icon: "mdi:instagram", color: "text-pink-400" },
            { icon: "mdi:facebook", color: "text-blue-400" },
          ].map((item, index) => (
            <button
              key={index}
              className="
                w-9
                h-9
                rounded-full
                bg-white/10
                backdrop-blur-md
                flex
                items-center
                justify-center
                hover:bg-white/20
                transition
              "
            >
              <Icon icon={item.icon} className={item.color} width={18} />
            </button>
          ))}
        </div>

      </div>
    </footer>
  );
}
