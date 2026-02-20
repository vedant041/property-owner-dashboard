import { useLocation } from "react-router-dom";
import { Pencil, Trash2, MapPin } from "lucide-react";
import InvestmentChart from "../../components/PropertyOwner/charts/InvestmentChart";
export default function PropertyDetails() {

  const location = useLocation();
  const property = location.state;

  if (!property) {
    return (
      <div className="text-white p-6">
        Property not found
      </div>
    );
  }

  return (
    <div className="text-white p-4">

      {/* ================= BREADCRUMB ================= */}
      <p className="text-sm text-white/70 mb-3">
        My Properties &gt; Property Details
      </p>

      {/* ================= MAIN CARD ================= */}
      <div
        className="
          w-full
          h-[187px]
          rounded-[9px]
          border border-[#EEEEEE]/30
          bg-[#29354D]/50
          backdrop-blur-md
          px-4 py-3
          flex
          gap-4
          overflow-hidden
        "
      >

        {/* IMAGE */}
        <div className="w-[198px] h-full rounded-[9px] overflow-hidden shrink-0">
          <img
            src={property.image}
            alt={property.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* ================= RIGHT CONTENT ================= */}
        <div className="flex flex-col justify-between min-h-0 flex-1">

          {/* TOP SECTION */}
          <div className="flex justify-between">

            <div>
              {/* LOCATION */}
              <p className="flex items-center gap-2 text-cyan-400 text-xs">
                <MapPin size={13} />
                {property.location}
              </p>

              {/* TITLE */}
              <h2 className="text-[36px] font-semibold leading-[1.05] mt-1">
                {property.title}
              </h2>

              {/* CATEGORY */}
              <p className="text-[14px] text-white/70 mt-1 leading-none">
                {property.category} | {property.area} sq. ft
              </p>
            </div>

            {/* ACTION ICONS */}
            <div className="flex gap-3 pt-1">
              <button className="text-white/70 hover:text-white">
                <Pencil size={17} />
              </button>

              <button className="text-red-400 hover:text-red-300">
                <Trash2 size={17} />
              </button>
            </div>

          </div>

          {/* ================= SOLD BAR (MOVED RIGHT + UP) ================= */}
          <div className="flex items-center gap-3 ml-[360px] -mt-3">

            <span className="text-[32px] font-semibold leading-none">
              {property.sold || 0}%
            </span>

            <div className="w-[260px] h-[8px] bg-white/20 rounded-full">
              <div
                className="h-full bg-cyan-400 rounded-full"
                style={{ width: `${property.sold || 0}%` }}
              />
            </div>

          </div>

          {/* ================= STATS ================= */}
          <div className="grid grid-cols-6 gap-4 pt-2 border-t border-white/20">

            <Stat title="Property Value" value={`₹ ${property.price}`} />
            <Stat title="Price per share" value={`₹ ${property.pricePerShare}`} />
            <Stat title="Expected return" value={`${property.expectedReturn}%`} />
            <Stat title="Invested" value={`₹ ${property.invested}`} />
            <Stat title="Return" value={`₹ ${property.return || 15000}`} />
            <Stat title="Investors" value={property.investors} />

          </div>

        </div>

      </div>
       <div className="mt-10">
        <InvestmentChart />
      </div>
    </div>
  );
}


/* ================= STAT COMPONENT ================= */

function Stat({ title, value }) {
  return (
    <div>
      <p className="text-xs text-white/60 leading-none">
        {title}
      </p>

      <p className="text-[24px] font-semibold leading-none mt-1">
        {value}
      </p>
    </div>
  );
}
