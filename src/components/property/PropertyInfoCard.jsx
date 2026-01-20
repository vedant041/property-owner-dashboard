import { Icon } from "@iconify/react";

export default function PropertyInfoCard() {
  return (
    <div
      className="
        h-[308px]
        w-[424px]
        rounded-[15px]
        border
        border-white/30
        text-white
        flex
        flex-col
        gap-[10px]
      "
      style={{
        background: "rgba(31,58,95,0.10)", // #1F3A5F @ 10%
        padding: "18px 24px",
      }}
    >
      {/* TITLE */}
      <h2 className="text-lg font-semibold leading-tight">
        2 BHK Apartment in Andheri East
      </h2>

      {/* LOCATION */}
      <div className="flex items-center gap-2 text-sm text-white/70">
        <Icon icon="mdi:map-marker" width={16} />
        <span>Andheri East, Mumbai</span>
      </div>

      {/* PRICE */}
      <div className="text-2xl font-bold mt-2">
        ₹ 1.60 Cr
      </div>

      {/* FEATURES */}
      <div className="flex flex-wrap gap-2 mt-2">
        {[
          { icon: "mdi:bed-outline", label: "2 Beds" },
          { icon: "mdi:bathtub-outline", label: "2 Baths" },
          { icon: "mdi:balcony", label: "1 Balcony" },
          { icon: "mdi:sofa-outline", label: "Furnished" },
        ].map((item, i) => (
          <div
            key={i}
            className="
              flex
              items-center
              gap-2
              px-3
              py-1.5
              rounded-full
              bg-white/10
              text-sm
            "
          >
            <Icon icon={item.icon} width={16} />
            {item.label}
          </div>
        ))}
      </div>

      {/* ACTION BUTTONS */}
      <div className="flex gap-4 mt-auto">
        {/* INVEST NOW */}
        <button
          className="
            w-[144px]
            h-[40px]
            rounded-[8px]
            bg-[#FACC15]
            text-black
            font-medium
            flex
            items-center
            justify-center
            gap-2
          "
        >
          <Icon icon="mdi:arrow-right" width={20} className="text-black" />
          Invest Now
        </button>

        {/* ENQUIRE */}
        <button
          className="
            w-[144px]
            h-[40px]
            rounded-[8px]
            bg-[#C4D6F4]
            text-black
            font-medium
            flex
            items-center
            justify-center
            gap-2
          "
        >
          <Icon icon="mdi:email-outline" width={18} />
          Enquire
        </button>
      </div>
    </div>
  );
}
