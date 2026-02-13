import { Search, MapPin } from "lucide-react";

export default function InvestorInvestments() {
  return (
    <div className="w-full flex justify-center py-8">
      <div className="w-[1122px] text-white">

        {/* ================= TOP CARD ================= */}
        <div
          className="
            w-full
            rounded-[9px]
            border border-[#EEEEEE]/30
            bg-[#29354D]/50
            backdrop-blur-md
            px-6 py-5
            flex justify-between items-center
          "
        >
          {/* LEFT */}
          <div className="flex gap-5 items-center">
            <div className="w-[72px] h-[72px] rounded-full bg-cyan-500/20 flex items-center justify-center">
              <div className="w-8 h-8 rounded-full bg-cyan-400" />
            </div>

            <div>
              <h2 className="text-xl font-semibold">
                Nitya Varma
              </h2>
              <p className="text-sm text-white/60 mt-1">
                Joined on: <span className="text-white">12 Aug 2023</span>
              </p>
            </div>
          </div>

          {/* RIGHT */}
          <div className="text-right">
            <p className="text-sm text-white/60">
              Current Portfolio Value
            </p>
            <p className="text-2xl font-semibold mt-1">
              ₹14,10,000
            </p>
          </div>
        </div>

        {/* ================= HEADER ================= */}
        <div className="flex justify-between items-center mt-8 mb-5">
          <h3 className="text-lg font-semibold">
            Invested Properties
          </h3>

          <div className="flex gap-4">
            {/* SEARCH */}
            <div className="relative">
              <Search
                size={16}
                className="absolute left-3 top-2.5 text-white/50"
              />
              <input
                placeholder="Search"
                className="
                  pl-9 pr-4 py-2
                  rounded-lg
                  bg-white/10
                  border border-white/20
                  text-sm
                  outline-none
                  w-[220px]
                "
              />
            </div>

            {/* STATUS */}
            <select
              className="
                px-4 py-2
                rounded-lg
                bg-white/10
                border border-white/20
                text-sm
                outline-none
                w-[140px]
              "
            >
              <option>Status</option>
              <option>Active</option>
              <option>Matured</option>
              <option>Sold Out</option>
            </select>
          </div>
        </div>

        {/* ================= PROPERTY CARD ================= */}
        {[1, 2, 3].map((item) => (
          <div
            key={item}
            className="
              w-full
              rounded-[9px]
              border border-[#EEEEEE]/30
              bg-[#29354D]/50
              backdrop-blur-md
              p-5
              mb-5
              flex justify-between items-center
            "
          >
            {/* LEFT SIDE */}
            <div className="flex gap-5 items-center w-[50%]">

              {/* IMAGE */}
              <img
                src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2"
                alt=""
                className="w-[120px] h-[80px] rounded-lg object-cover"
              />

              {/* INFO */}
              <div>
                <div className="flex items-center gap-2 text-xs text-cyan-400 mb-1">
                  <MapPin size={12} />
                  Andheri East, Mumbai
                </div>

                <p className="font-semibold">
                  2 BHK Apartment in Andheri East
                </p>

                <p className="text-sm text-white/60 mt-1">
                  Apartment | 1200 sq. ft
                </p>

                <p className="font-semibold mt-2">
                  ₹ 1.60 Cr
                </p>
              </div>
            </div>

            {/* RIGHT SIDE */}
            <div className="flex items-center gap-12">

              <div>
                <p className="text-xs text-white/60">Share</p>
                <p className="font-semibold mt-1">2.5%</p>
              </div>

              <div>
                <p className="text-xs text-white/60">Holding</p>
                <p className="font-semibold mt-1">
                  Since Jan 2025
                </p>
              </div>

              <div>
                <p className="text-xs text-white/60">Return</p>
                <p className="font-semibold mt-1">
                  ₹15,000
                </p>
              </div>

              {/* STATUS */}
              <span
                className="
                  px-4 py-1
                  rounded-full
                  text-xs
                  bg-green-500/20
                  text-green-400
                "
              >
                Active
              </span>

              {/* BUTTON */}
              <button
                className="
                  px-4 py-2
                  rounded-lg
                  bg-white/10
                  border border-white/20
                  text-sm
                  hover:bg-white/20
                "
              >
                View Property →
              </button>

            </div>
          </div>
        ))}

      </div>
    </div>
  );
}
