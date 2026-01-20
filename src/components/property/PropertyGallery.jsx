import { useState } from "react";

export default function PropertyGallery() {
  const images = [
    "/2BHKimg1.png",
    "/2BHKimg2.png",
    "/2BHKimg3.png",
    "/2BHKimg4.png",
  ];

  const [active, setActive] = useState(0);

  return (
    <div className="flex gap-4 items-start">
      
      {/* MAIN IMAGE */}
      <div
        className="relative overflow-hidden"
        style={{
          width: "666px",
          height: "308px",
          borderRadius: "9px",
        }}
      >
        <img
          src={images[active]}
          className="w-full h-full object-cover"
          alt="Property"
        />

        {/* OPACITY OVERLAY (FIGMA 78%) */}
        <div className="absolute inset-0 bg-white/20 pointer-events-none" />

        {/* LEFT ARROW */}
        <button
          onClick={() =>
            setActive((prev) => (prev === 0 ? images.length - 1 : prev - 1))
          }
          className="
            absolute left-4 top-1/2 -translate-y-1/2
            w-[34px] h-[34px] rounded-[8px]
            bg-white/40 backdrop-blur-sm
            border border-white/40
            shadow-sm
            flex items-center justify-center
            hover:bg-white/50 transition
          "
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#1F2937"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>

        {/* RIGHT ARROW */}
        <button
          onClick={() =>
            setActive((prev) => (prev === images.length - 1 ? 0 : prev + 1))
          }
          className="
            absolute right-4 top-1/2 -translate-y-1/2
            w-[34px] h-[34px] rounded-[8px]
            bg-white/40 backdrop-blur-sm
            border border-white/40
            shadow-sm
            flex items-center justify-center
            hover:bg-white/50 transition
          "
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#1F2937"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </button>
      </div>

      {/* RIGHT THUMBNAILS */}
      <div className="flex flex-col gap-3 h-[308px]">
        {images.map((img, index) => (
          <button
            key={index}
            onClick={() => setActive(index)}
            className={`
              w-[182px]
              h-[94px]
              rounded-[9px]
              overflow-hidden
              border
              transition
              ${
                active === index
                  ? "border-white"
                  : "border-white/20 opacity-70 hover:opacity-100"
              }
            `}
          >
            <img
              src={img}
              className="w-full h-full object-cover"
              alt="Thumbnail"
            />
          </button>
        ))}
      </div>
    </div>
  );
}
