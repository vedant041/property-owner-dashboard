import { MapPin, MoreVertical } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";


/* ===============================
   PROPERTY CARD
================================ */

export default function PropertyCard({ property }) {
  const navigate = useNavigate();

  if (!property) return null;

  const {
    image,
    type,
    title,
    location,
    category,
    size,
    price,

    pricePerShare,
    expectedReturn,
    invested,
    returnAmount,
    growth,

    sold,
    investors,
  } = property;

  /* ================= STATE ================= */

  const [openMenu, setOpenMenu] = useState(false);
  const menuRef = useRef(null);

  /* ============ CLOSE ON OUTSIDE CLICK ============ */

  useEffect(() => {
    function handleClickOutside(e) {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setOpenMenu(false);
      }
    }

    document.addEventListener("click", handleClickOutside);

    return () =>
      document.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <div
      className="
        min-h-[146px]
        flex
        items-center
        gap-[24px]
        p-[16px]
        rounded-[9px]  
        backdrop-blur-md
        relative
      "
      style={{
        background: "rgba(41,53,77,0.5)",
        borderRight: "1px solid rgba(238,238,238,0.3)",
      }}
    >
      {/* ================= IMAGE ================= */}

      <div className="relative">

        {/* Type Tag */}
        <span
          className="
            absolute
            top-2 left-2
            bg-[#1FD2AF]
            text-white
            text-xs
            px-2
            py-[2px]
            rounded-full
          "
        >
          {type}
        </span>

        <img
          src={image}
          alt={title}
          className="
            w-[186px]
            h-[114px]
            rounded-[9px]
            object-cover
          "
        />
      </div>

      {/* ================= LEFT INFO ================= */}

      <div className="flex flex-col gap-1 w-[230px]">

        <h3 className="text-base font-semibold text-white">
          {title}
        </h3>

        <div className="flex items-center gap-1 text-[#4FD1FF] text-xs">
          <MapPin size={12} />
          {location}
        </div>

        <p className="text-white/60 text-xs">
          {category} | {size}
        </p>

        <p className="text-white font-semibold text-sm mt-1">
          ₹ {price}
        </p>

      </div>

      {/* ================= STATS ================= */}

      <div className="flex-1 grid grid-cols-4 gap-x-8 gap-y-3 text-sm">

        <Stat
          label="Price / Share"
          value={`₹ ${pricePerShare || "0"}`}
        />

        <Stat
          label="Expected Return"
          value={`${expectedReturn || "0"}%`}
        />

        <Stat
          label="Sold"
          value={`${sold || 0}%`}
          progress
        />

        <Stat
          label="Investors"
          value={investors || 0}
        />

        <Stat
          label="Invested"
          value={`₹ ${invested || "0"}`}
        />

        <Stat
          label="Return"
          value={`₹ ${returnAmount || "0"}`}
          growth={growth}
        />

      </div>

      {/* ================= RIGHT ================= */}

      <div
        ref={menuRef}
        className="flex flex-col items-end gap-11 pt-1"
      >

        {/* Three Dots Button */}
        <button
          onClick={(e) => {
            e.stopPropagation(); // 🔴 Important
            setOpenMenu(!openMenu);
          }}
          className="
            w-8 h-8
            flex items-center justify-center
            rounded-full
            bg-white/10
            hover:bg-white/20
            transition
          "
        >
          <MoreVertical size={16} className="text-white/80" />
        </button>

        {/* POPUP MENU */}
        {openMenu && (

          <div
            onClick={(e) => e.stopPropagation()}
            className="
              absolute
              top-14
              right-0
              w-[120px]
              bg-[#425372]
              rounded-md
              shadow-lg
              overflow-hidden
              z-50
              border border-white/10
            "
          >

            <button
              onClick={() => {
                setOpenMenu(false);

                // go to AddProperty page
                navigate("/add-property");

                // OPTIONAL (best practice)
                // pass property data for editing
                // navigate("/add-property", { state: { property } });
              }}
              className="
                w-full
                px-4
                py-2
                text-left
                text-sm
                text-white
                hover:bg-white/10
                transition
              "
            >
              Edit
            </button>

            <div className="h-[1px] bg-white/10" />

            <button
              onClick={() => {
                dispatch(removeProperty(property.id));
                setOpenMenu(false);
              }}
              className="
                w-full
                px-4
                py-2
                text-left
                text-sm
                text-white
                hover:bg-white/10
                transition
              "
            >
              Remove
            </button>


          </div>

        )}

        {/* View Details */}
       <button
          onClick={() =>
            navigate("/property-details", {
              state: property,
            })
          }
          className="
            bg-white/10
            hover:bg-white/20
            text-sm
            px-4
            py-2
            rounded-md
            transition
          "
        >
          View Details →
        </button>


      </div>

    </div>
  );
}


/* ===============================
   STAT COMPONENT
================================ */

function Stat({ label, value, progress, growth }) {

  const percent = parseInt(value) || 0;

  return (
    <div className="flex flex-col gap-[2px]">

      <span className="text-white/60 text-xs">
        {label}
      </span>

      <span className="text-white font-medium text-sm">
        {value}
      </span>

      {/* Progress Bar */}
      {progress && (

        <div className="w-[80px] h-[4px] bg-white/20 rounded mt-1">

          <div
            className="h-full bg-[#4FD1FF] rounded"
            style={{ width: `${percent}%` }}
          />

        </div>

      )}

      {/* Growth */}
      {growth && (

        <span className="text-green-400 text-xs">
          (+{growth}%)
        </span>

      )}

    </div>
  );
}
