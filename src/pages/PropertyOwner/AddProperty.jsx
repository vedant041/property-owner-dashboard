import { useState } from "react";
import { useDispatch } from "react-redux";
import { addProperty } from "../../redux/propertySlice"; 
import { useNavigate } from "react-router-dom";
import { MapPin } from "lucide-react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";


export default function AddProperty({ onClose }) {
  const getTitleByType = (type) => {
  if (type === "Residential") return "2 BHK Apartment";
  if (type === "Commercial") return "Retail Shop";
  if (type === "Industrial") return "Warehouse";
  return "Property";
};

  const location = useLocation();
  const popupData = location.state || {};

  const properties = useSelector(
  (state) => state.property.properties
);

console.log("ALL PROPERTIES:", properties);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [showToast, setShowToast] = useState(false);

  /* ================= STATE ================= */

  const [form, setForm] = useState({

    title: getTitleByType(popupData.type || ""),

    type: popupData.type || "",
    status: popupData.status || "Active",


    price: "",
    location: "",
    landmark: "",
    construction: "",

    area: "",
    water: "",
    electricity: "",
    age: "",
    ageUnit: "Year",

    parking: "",
    facing: "",
    floor: "",

    bedrooms: "",
    bathrooms: "",
    balcony: "",
    lift: "",
    furnishing: "Semi",

    totalValue: "",
    pricePerShare: "",
    expectedReturn: "",
    minInvestment: "",
    minType: "Monthly",

    about: "",

    // Industrial Fields
    builtUp: "",
    openArea: "",
    industrialType: "",
    ceilingHeight: "",
    entryGateWidth: "",
    truckAccess: "",
    loadingDock: "",
    fireSafety: "",
    zoningType: "",
    pollutionClearance: "",
    powerLoad: "",

  });


  /* ================= HANDLERS ================= */

  function handleChange(e) {
  const { name, value } = e.target;

  setForm((prev) => ({
    ...prev,
    [name]: value,

    // ⭐ AUTO TITLE LOGIC
    title:
      name === "type"
        ? value === "Residential"
          ? "2 BHK Apartment"
          : value === "Commercial"
          ? "Retail Shop"
          : value === "Industrial"
          ? "Warehouse"
          : prev.title
        : prev.title,
  }));
}



   function handleSubmit(e) {
  e.preventDefault();

  dispatch(
  addProperty({
    id: Date.now(),

    // BASIC
    title: form.title || "Property",
    type: form.type,
    category:
      form.type === "Residential"
        ? "Apartment"
        : form.type === "Commercial"
        ? "Office"
        : "Industrial",

    location: form.location,

    // IMAGE
    image: "/2BHKimg1.png",

    // PRICE
    price: form.price || "0",
    pricePerShare: form.pricePerShare || "0",

    // RETURNS
    expectedReturn: form.expectedReturn || "0",

    // ⭐ FIXED VALUES (CARD NEEDS THESE)
    sold: 0,
    investors: 0,
    invested: form.minInvestment || "0",
    return: 0,

    // AREA
    area: form.area || "0",

    // keep all original fields
    ...form,
  })
);



  setShowToast(true);

  setTimeout(() => {
    setShowToast(false);

    // reset form (optional)
    setForm({
      ...form,
      price: "",
      location: "",
      landmark: "",
      about: "",
    });

    if (onClose) onClose(); // close popup
  }, 800);
}


  /* ================= UI ================= */

  return (
    <div className="w-full flex justify-center relative pb-10">


      {/* ================= TOAST ================= */}

      {showToast && (

        <div
          className="
            fixed top-5 right-5 z-50
            px-4 py-3
            rounded-lg
            bg-[#0f766e]/90
            backdrop-blur
            border border-white/20
            text-white text-sm
            flex items-center gap-3
            shadow-lg
          "
        >

          <span>
            {form.title} Property successfully added
          </span>

          <button
            onClick={() => setShowToast(false)}
            className="text-white/70 hover:text-white"
          >
            ✕
          </button>

        </div>

      )}


      {/* ================= FORM ================= */}

      <form
        onSubmit={handleSubmit}
        className="
          w-[1120px]
          p-6
          rounded-xl
          backdrop-blur
          bg-[#29354D]/40
          border border-white/20
          text-white
        "
      >


        {/* ================= HEADER ================= */}

        <div className="flex justify-between items-center mb-6">

          <div>

            <h1 className="text-xl font-semibold flex gap-2 items-center">

              {form.title}

              <span className="text-cyan-400 text-sm">
                {form.type}
              </span>

            </h1>

          </div>


          <span className="px-3 py-1 text-xs bg-green-600 rounded">
            {form.status}
          </span>

        </div>



        {/* ================= TYPE + STATUS ================= */}

        <div className="grid grid-cols-2 gap-4 mb-6">

          <Select
            label="Property Type"
            name="type"
            value={form.type}
            onChange={handleChange}
            options={["Residential", "Commercial", "Industrial"]}
          />

          <Select
            label="Status"
            name="status"
            value={form.status}
            onChange={handleChange}
            options={["Active", "Inactive"]}
          />

        </div>



        {/* ================= BASIC ================= */}

        <h2 className="font-semibold mb-3">
          Basic Details
        </h2>


        <div className="grid grid-cols-3 gap-4 mb-6">

          <Input
            label="Price (₹)"
            name="price"
            placeholder="1.60 Cr"
            value={form.price}
            onChange={handleChange}
          />


          {/* Location with Icon */}

          <div className="flex flex-col gap-1">

            <span className="text-sm text-white/70">
              Location
            </span>

            <div className="relative">

              <MapPin
                size={16}
                className="absolute left-3 top-3 text-cyan-400"
              />

              <select
                name="location"
                value={form.location}
                onChange={handleChange}
                className="
                  w-full
                  pl-9
                  bg-white/10
                  border border-white/20
                  rounded-md
                  px-3 py-2
                  text-sm
                  outline-none
                "
              >

                <option value="">Select Location</option>

                <option>Andheri East, Mumbai</option>
                <option>Viman Nagar, Pune</option>
                <option>Bhiwandi, Mumbai</option>
                <option>Baner, Pune</option>

              </select>

            </div>

          </div>


          <Input
            label="Landmark"
            name="landmark"
            placeholder="Green Hotel"
            value={form.landmark}
            onChange={handleChange}
          />

        </div>



        <Select
          label="Construction Status"
          name="construction"
          value={form.construction}
          onChange={handleChange}
          options={[
            "Under Construction",
            "Ready to Move",
            "New Project",
          ]}
        />



        {/* ================= PROPERTY INFO ================= */}

        <h2 className="font-semibold my-4">
          Property Info
        </h2>


        <div className="grid grid-cols-3 gap-4 mb-4">

          <Input
            label="Area (sq ft)"
            name="area"
            placeholder="1200"
            value={form.area}
            onChange={handleChange}
          />


          <Select
            label="Water Availability"
            name="water"
            value={form.water}
            onChange={handleChange}
            options={[
              "24x7 Water",
              "Limited",
              "Borewell",
            ]}
          />


          <Select
            label="Electricity"
            name="electricity"
            value={form.electricity}
            onChange={handleChange}
            options={[
              "24x7",
              "Backup",
              "Limited",
            ]}
          />

        </div>


        {/* ===== INDUSTRIAL SECTION ===== */}
        {form.type === "Industrial" && (
          <>
            <h2 className="font-semibold my-6">Industrial Details</h2>

            <div className="grid grid-cols-3 gap-4 mb-6">
              <Input label="Built-up Area (sq ft)" name="builtUp" value={form.builtUp} onChange={handleChange} />
              <Input label="Open Area (sq ft)" name="openArea" value={form.openArea} onChange={handleChange} />
              <Select label="Industrial Type" name="industrialType" value={form.industrialType} onChange={handleChange} options={["Warehouse", "Factory"]} />
            </div>

            <h3 className="font-semibold mb-4">Infrastructure</h3>

            <div className="grid grid-cols-3 gap-4 mb-6">
              <Input label="Ceiling Height (ft)" name="ceilingHeight" value={form.ceilingHeight} onChange={handleChange} />
              <Input label="Entry Gate Width (ft)" name="entryGateWidth" value={form.entryGateWidth} onChange={handleChange} />
              <Select label="Truck Access" name="truckAccess" value={form.truckAccess} onChange={handleChange} options={["Yes", "No"]} />
            </div>

            <h3 className="font-semibold mb-4">Legal & Compliance</h3>

            <div className="grid grid-cols-3 gap-4 mb-6">
              <Select label="Zoning Type" name="zoningType" value={form.zoningType} onChange={handleChange} options={["Industrial", "Commercial"]} />
              <Select label="Pollution Clearance" name="pollutionClearance" value={form.pollutionClearance} onChange={handleChange} options={["Approved", "Pending"]} />
              <Input label="Power Load Capacity (kW)" name="powerLoad" value={form.powerLoad} onChange={handleChange} />
            </div>
          </>
        )}



        {/* ================= EXTRA ================= */}

        <div className="grid grid-cols-5 gap-4 mb-6">

          <Input
            label="Age"
            name="age"
            value={form.age}
            onChange={handleChange}
          />


          <Select
            label="Unit"
            name="ageUnit"
            value={form.ageUnit}
            onChange={handleChange}
            options={["Year", "Month"]}
          />


          <Select
            label="Parking"
            name="parking"
            value={form.parking}
            onChange={handleChange}
            options={["0", "1", "2", "3+"]}
          />


          <Select
            label="Facing"
            name="facing"
            value={form.facing}
            onChange={handleChange}
            options={[
              "East",
              "West",
              "North",
              "South",
            ]}
          />


          <Input
            label="Floor No"
            name="floor"
            value={form.floor}
            onChange={handleChange}
          />

        </div>



        {/* ================= PRICING ================= */}

        <h2 className="font-semibold mb-3">
          Pricing & Investment
        </h2>


        <div className="grid grid-cols-3 gap-4 mb-4">

          <Input
            label="Total Value"
            name="totalValue"
            value={form.totalValue}
            onChange={handleChange}
          />


          <Input
            label="Price / Share"
            name="pricePerShare"
            value={form.pricePerShare}
            onChange={handleChange}
          />


          <Input
            label="Expected Return (%)"
            name="expectedReturn"
            value={form.expectedReturn}
            onChange={handleChange}
          />

        </div>


        <div className="grid grid-cols-2 gap-4 mb-6">

          <Input
            label="Minimum Investment"
            name="minInvestment"
            value={form.minInvestment}
            onChange={handleChange}
          />


          <Select
            label="Investment Type"
            name="minType"
            value={form.minType}
            onChange={handleChange}
            options={["Monthly", "Yearly"]}
          />

        </div>



        {/* ================= ABOUT ================= */}

        <h2 className="font-semibold mb-2">
          About Property
        </h2>


        <textarea
          name="about"
          value={form.about}
          onChange={handleChange}
          placeholder="Write property description..."
          className="
            w-full h-28
            bg-white/10
            border border-white/20
            rounded-md
            p-3
            text-sm
            outline-none
            resize-none
          "
        />



        {/* ================= ACTION ================= */}

        <div className="flex justify-end gap-3 mt-6">

          <button
            type="button"
            className="px-4 py-2 bg-white/10 rounded"
          >
            Cancel
          </button>


          <button
            type="submit"
            className="
              px-5 py-2
              bg-[#1FD2AF]
              rounded
              text-black
              font-medium
            "
          >
            Save
          </button>

        </div>


      </form>

    </div>
  );
}


/* ================= REUSABLE ================= */

function Input({ label, ...props }) {

  return (

    <div className="flex flex-col gap-1">

      <span className="text-sm text-white/70">
        {label}
      </span>

      <input
        {...props}
        className="
          bg-white/10
          border border-white/20
          rounded-md
          px-3 py-2
          text-sm
          outline-none
        "
      />

    </div>

  );
}


function Select({ label, options, ...props }) {

  return (

    <div className="flex flex-col gap-1">

      <span className="text-sm text-white/70">
        {label}
      </span>

      <select
        {...props}
        className="
          bg-white/10
          border border-white/20
          rounded-md
          px-3 py-2
          text-sm
          outline-none
        "
      >

        <option value="">
          Select
        </option>

        {options.map((op) => (

          <option
            key={op}
            value={op}
            className="bg-[#1B2B45]"
          >
            {op}
          </option>

        ))}

      </select>

    </div>

  );
}
