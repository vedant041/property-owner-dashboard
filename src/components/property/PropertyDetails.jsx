export default function PropertyDetails() {
  const details = [
    ["Total Price", "₹ 1.60 Cr"],
    ["Price Per Share", "₹12,200"],
    ["Minimum Investment", "₹12,200, Monthly"],
    ["Expected Return (%)", "2 %"],
    ["Area", "1200 sq. ft"],
    ["Location", "Andheri East, Mumbai"],
    ["Landmarks", "Green Hotel"],
    ["Furnishing", "Furnished"],
    ["Overlooking", "Garden/Park, Main Road"],
    ["Age of Construction", "Less than 5 years"],
    ["Water Availability", "24 Hours Available"],
    ["Status of Electricity", "No/Rare Powercut"],
    ["Parking", "1"],
    ["Facing", "East"],
    ["Lift", "1"],
    ["Floor Number", "B603"],
    ["Total Floors", "8"],
    ["Bedrooms", "2"],
    ["Bathrooms", "2"],
    ["Balcony", "2"],
  ];

  return (
    <div
      className="
        w-[700px]
        rounded-[15px]
        bg-[#1F3A5F]/10
        backdrop-blur-sm
        border border-white/30
        p-[24px]
        flex flex-col
        gap-[14px]
        text-white
      "
    >
      {/* TITLE */}
      <h3 className="text-[16px] font-semibold leading-tight mb-2">
        Property Details
      </h3>

      {/* DETAILS LIST */}
      <div className="flex flex-col gap-[14px] text-[14px]">
        {details.map(([label, value]) => (
          <div
            key={label}
            className="grid grid-cols-[1.3fr_1fr] items-start"
          >
            <span className="text-white/80">
              {label}
            </span>
            <span className="text-white text-right">
              {value}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
