import { Search, MapPin } from "lucide-react";

/* ================= DATA ================= */

const investmentData = [
  {
    id: 1,
    image: "/2BHKimg1.png",
    location: "Andheri East, Mumbai",
    title: "2 BHK Apartment in Andheri East",
    category: "Apartment",
    size: "1200 sq. ft",
    price: "1.60 Cr",
    share: "2.5%",
    holding: "Since Jan 2025",
    invested: "12,000",
    returnAmount: "15,000",
    status: "Active",
  },
  {
    id: 2,
    image: "/2BHKimg1.png",
    location: "Andheri East, Mumbai",
    title: "2 BHK Apartment in Andheri East",
    category: "Apartment",
    size: "1200 sq. ft",
    price: "1.60 Cr",
    share: "2.5%",
    holding: "Jan - Mar 2025",
    invested: "12,000",
    returnAmount: "15,500",
    status: "Matured",
  },
  {
    id: 3,
    image: "/2BHKimg1.png",
    location: "Andheri East, Mumbai",
    title: "2 BHK Apartment in Andheri East",
    category: "Apartment",
    size: "1200 sq. ft",
    price: "1.60 Cr",
    share: "2.5%",
    holding: "Jan - Mar 2025",
    invested: "12,000",
    returnAmount: "15,500",
    status: "Sold Out",
  },
];

export default function InvestorInvestments() {

  return (
    <div className="w-full flex justify-center py-8">

      <div className="w-[1122px] text-white">

        {/* TOP CARD */}
        <div
          className="
            w-[1122px]
            h-[120px]
            rounded-[9px]
            border border-[#EEEEEE]/30
            bg-[#29354D]/45
            backdrop-blur-md
            px-[20px]
            flex items-center justify-between
          "
        >

          {/* LEFT */}
          <div className="flex items-center gap-4">

            <div className="w-[86px] h-[86px] rounded-full bg-cyan-500/20 flex items-center justify-center">
              <div className="w-7 h-7 rounded-full bg-cyan-400" />
            </div>

            <div>

              {/* ↓ FIXED */}
              <h2 className="text-[32px] font-semibold leading-none">
                Nitya Varma
              </h2>

              {/* ↓ FIXED */}
              <div className="flex gap-4 mt-2 text-[18px] text-white/70">

                <span className="text-cyan-400 cursor-pointer">
                  Profile
                </span>

                <p>
                  Joined on:
                  <span className="text-white ml-1">
                    12 Aug 2023
                  </span>
                </p>

                <p>
                  Total Invested:
                  <span className="text-white ml-1">
                    ₹12,50,000
                  </span>
                </p>

              </div>

            </div>
          </div>

          {/* RIGHT */}
          <div className="text-right">

            {/* ↓ FIXED */}
            <p className="text-[22px] text-white/60">
              Current Portfolio Value
            </p>

            {/* ↓ FIXED */}
            <p className="text-[46px] font-semibold leading-none mt-1">
              ₹14,10,000
            </p>
          </div>
        </div>


        {/* HEADER */}
        <div className="flex justify-between items-center mt-7 mb-4">

          {/* ↓ FIXED */}
          <h3 className="text-[38px] font-semibold">
            Invested Properties
          </h3>

          <div className="flex gap-3">

            <div className="relative">
              <Search size={14}
                className="absolute left-3 top-2.5 text-white/50"
              />
              <input
                placeholder="Search"
                className="
                  pl-9 pr-3 py-2
                  w-[200px]
                  rounded-lg
                  bg-white/10 border border-white/20
                  text-[14px] outline-none
                "
              />
            </div>

            <select className="
              px-4 py-2 w-[130px]
              rounded-lg
              bg-white/10 border border-white/20
              text-[14px]
            ">
              <option>Status</option>
            </select>

          </div>
        </div>

        {/* CARDS */}
        {investmentData.map((item) => (

          <div
            key={item.id}
            className="
              h-[135px]
              rounded-[9px]
              border border-[#EEEEEE]/30
              bg-[#29354D]/50
              backdrop-blur-md
              px-5 mb-3
              flex items-center justify-between
            "
          >

            {/* LEFT */}
            <div className="flex gap-4 items-center w-[44%]">

              <img
                src={item.image}
                alt=""
                className="w-[115px] h-[78px] rounded-md object-cover"
              />

              <div>

                {/* ↓ FIXED */}
                <div className="flex items-center gap-1 text-[10px] text-cyan-400">
                  <MapPin size={10} />
                  {item.location}
                </div>

                {/* ↓ FIXED */}
                <p className="text-[16px] font-semibold leading-tight mt-1">
                  {item.title}
                </p>

                {/* ↓ FIXED */}
                <p className="text-[12px] text-white/60 mt-1">
                  {item.category} | {item.size}
                </p>

                {/* ↓ FIXED */}
                <p className="text-[34px] font-semibold leading-none mt-1">
                  ₹ {item.price}
                </p>
              </div>
            </div>

            {/* STATS */}
            <div className="flex items-center gap-8">

              <Stat label="Share" value={item.share} />
              <Stat label="Holding" value={item.holding} />
              <Stat label="Invested" value={`₹${item.invested}`} />
              <Stat label="Return" value={`₹${item.returnAmount}`} />

              <span
                className="
                  px-3 py-[3px]
                  rounded-md text-[10px]
                  bg-green-500/20 text-green-400
                "
              >
                {item.status}
              </span>

              <button
                className="
                  w-[92px]
                  h-[44px]
                  rounded-[9px]
                  bg-white/10
                  border border-white/20
                  text-[12px]
                  font-medium
                  flex items-center justify-center
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

/* STAT */
function Stat({ label, value }) {
  return (
    <div>
      {/* ↓ FIXED */}
      <p className="text-[11px] text-white/60">{label}</p>

      {/* ↓ FIXED */}
      <p className="text-[26px] font-semibold leading-none mt-1">
        {value}
      </p>
    </div>
  );
}
