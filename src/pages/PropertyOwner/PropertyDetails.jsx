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

      {/* Breadcrumb */}
      <p className="text-sm text-white/70 mb-3">
        My Properties &gt; Property Details
      </p>

      {/* MAIN CARD */}
      <div
        className="
          w-full
          rounded-xl
          border border-white/20
          bg-[#1B2B45]/80
          backdrop-blur-md
          p-4
          flex
          gap-4
        "
      >

        {/* IMAGE */}
        <div className="w-[220px]  rounded-lg overflow-hidden">
          <img
            src={property.image}
            alt={property.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* INFO SECTION */}
        <div className="flex-1 flex flex-col gap-3">

          {/* TOP */}
          <div className="flex justify-between">

            <div>
              <p className="flex items-center gap-2 text-cyan-400 text-sm">
                <MapPin size={14} />
                {property.location}
              </p>

              <h2 className="text-3xl font-semibold">
                {property.title}
              </h2>

              <p className="text-white/70">
                {property.category} | {property.area} sq. ft
              </p>
            </div>

            {/* ACTION BUTTONS */}
            <div className="flex gap-3">
              <button className="text-white/70 hover:text-white">
                <Pencil size={18} />
              </button>

              <button className="text-red-400 hover:text-red-300">
                <Trash2 size={18} />
              </button>
            </div>
          </div>

          {/* SOLD BAR */}
          <div className="flex items-center gap-3">

            <span className="font-semibold text-xl">
              {property.sold || 0}%
            </span>

            <div className="w-[220px] h-2 bg-white/20 rounded">
              <div
                className="h-full bg-cyan-400 rounded"
                style={{ width: `${property.sold || 0}%` }}
              />
            </div>

          </div>

          {/* STATS */}
          <div className="grid grid-cols-6 gap-4 pt-3 border-t border-white/20">

            <Stat title="Property Value" value={`₹ ${property.price}`} />
            <Stat title="Price per share" value={`₹ ${property.pricePerShare}`} />
            <Stat title="Expected return" value={`${property.expectedReturn}%`} />
            <Stat title="Invested" value={`₹ ${property.invested}`} />
            <Stat title="Return" value={`₹ ${property.return}`} />
            <Stat title="Investors" value={property.investors} />

          </div>

        </div>
      </div>

    </div>
  );
}

/* ================= REUSABLE STAT ================= */

function Stat({ title, value }) {
  return (
    <div>
      <p className="text-white/60 text-sm">{title}</p>
      <p className="text-xl font-semibold">{value}</p>
    </div>
    
  );
}