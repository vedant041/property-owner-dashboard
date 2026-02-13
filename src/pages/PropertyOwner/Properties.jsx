import { useState } from "react";
import { useNavigate } from "react-router-dom";

import PropertyCard from "../../components/PropertyOwner/cards/PropertyCard";
import { propertyList } from "../../data/propertyList";

import AddPropertyModal from "../../components/PropertyOwner/modals/AddPropertyModal";

export default function Properties() {
  const navigate = useNavigate();

  const [showModal, setShowModal] = useState(false);
  const [filter, setFilter] = useState("All"); // ✅ Added filter state

  /* AFTER MODAL SUBMIT */
  function handleAdd(data) {
    setShowModal(false);

    // Only open full form if Residential + Active
    if (data.type === "Residential" && data.status === "Active") {
      navigate("/add-property");
    }
  }

  // ✅ Filter Logic
  const filteredProperties =
    filter === "All"
      ? propertyList
      : propertyList.filter((item) => item.type === filter);

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

        {/* RIGHT */}
        <div className="flex items-center gap-3">

          {/* DROPDOWN */}
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

            <option value="" disabled hidden> Property Type </option>
            {/* SHOW ALL */}
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


          {/* ADD BUTTON */}
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


      {/* LIST */}
      <div className="flex flex-col gap-4">

        {filteredProperties.length > 0 ? (
          filteredProperties.map((item) => (
            <PropertyCard
              key={item.id}
              property={item}
            />
          ))
        ) : (
          <p className="text-white/60 text-center">
            No properties found
          </p>
        )}

      </div>


      {/* MODAL */}
      {showModal && (
        <AddPropertyModal
          onClose={() => setShowModal(false)}
          onSubmit={handleAdd}
        />
      )}

    </div>
  );
}
