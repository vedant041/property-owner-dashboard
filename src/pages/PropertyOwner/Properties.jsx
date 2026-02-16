import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import PropertyCard from "../../components/PropertyOwner/cards/PropertyCard";
import { propertyList } from "../../data/propertyList";

import AddPropertyModal from "../../components/PropertyOwner/modals/AddPropertyModal";

export default function Properties() {

  /* ================= REDUX DATA ================= */
  const properties = useSelector(
    (state) => state.property.properties
  );

  const navigate = useNavigate();

  const [showModal, setShowModal] = useState(false);
  const [filter, setFilter] = useState("All");

  /* ================= AFTER MODAL SUBMIT ================= */
  // ⭐ FIXED (clean & correct)
  function handleAdd(data) {
    setShowModal(false);

    // open form for ALL property types
    navigate("/add-property", {
      state: data,
    });
  }

  /* ================= MERGE STATIC + REDUX ================= */
  const allProperties = [...propertyList, ...properties];

  /* ================= FILTER LOGIC ================= */
  const filteredProperties =
    filter === "All"
      ? allProperties
      : allProperties.filter((item) => item.type === filter);

  return (
    <div className="flex flex-col gap-6">

      {/* HEADER */}
      <div className="flex items-center justify-between">

        <div>
          <h1 className="text-xl font-semibold text-white">
            Property List
          </h1>

          <p className="text-white/60 text-sm">
            List of available properties
          </p>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex items-center gap-3">

          {/* FILTER DROPDOWN */}
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="
              bg-white/10
              backdrop-blur-md
              border border-white/20
              rounded-md
              px-4
              py-2
              text-sm
              outline-none
              cursor-pointer
              focus:ring-2
              focus:ring-cyan-400
              text-white
            "
          >
            <option value="" disabled hidden>
              Property Type
            </option>

            <option value="All" className="bg-[#1B2B45] text-white">
              All
            </option>

            <option value="Residential" className="bg-[#1B2B45] text-white">
              Residential
            </option>

            <option value="Commercial" className="bg-[#1B2B45] text-white">
              Commercial
            </option>

            <option value="Industrial" className="bg-[#1B2B45] text-white">
              Industrial
            </option>
          </select>

          {/* ADD PROPERTY BUTTON */}
          <button
            onClick={() => setShowModal(true)}
            className="
              bg-[#1FD2AF]
              hover:bg-[#18bfa0]
              text-white
              px-4
              py-2
              rounded-md
              font-medium
            "
          >
            Add Property
          </button>

        </div>
      </div>

      {/* PROPERTY LIST */}
      <div className="flex flex-col gap-4">

        {filteredProperties.length > 0 ? (
          filteredProperties.map((item, index) => (
            <PropertyCard
              key={item.id || index}
              property={item}
            />
          ))
        ) : (
          <p className="text-white/60 text-center">
            No properties found
          </p>
        )}

      </div>

      {/* ADD PROPERTY MODAL */}
      {showModal && (
        <AddPropertyModal
          onClose={() => setShowModal(false)}
          onSubmit={handleAdd}
        />
      )}

    </div>
  );
}
