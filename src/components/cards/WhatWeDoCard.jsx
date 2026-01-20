export default function WhatWeDo() {
  const features = [
    {
      title: "Property Management",
      desc: "List and manage properties easily through our intuitive platform",
      icon: "/icons/property-management.png",
    },
    {
      title: "Smart Investments",
      desc: "Access fractional investments in high-value properties",
      icon: "/icons/smart-investments.png",
    },
    {
      title: "Investor Insights",
      desc: "Transparent reporting and analytics to track portfolio performance",
      icon: "/icons/investor-insights.png",
    },
    {
      title: "Secure & Trustworthy",
      desc: "Industry-leading security measures to protect investments",
      icon: "/icons/secure-trustworthy.png",
    },
  ];

  return (
    <section className="space-y-6">
      
      {/* SECTION TITLE */}
      <div>
        <h2 className="text-xl font-semibold text-white">
          What We Do
        </h2>
        <p className="text-white/70 text-sm mt-1 max-w-[700px]">
          We are a technology-enabled real estate platform focused on simplifying property investment and ownership.
        </p>
      </div>

      {/* CARDS */}
      <div className="grid grid-cols-4 gap-6">
        {features.map((item, index) => (
          <div
            key={index}
            className="glass-card p-6 flex flex-col gap-4"
          >
            {/* ICON */}
            <div
              className="
                w-[64px]
                h-[64px]
                rounded-xl
                icon-glass
                flex
                items-center
                justify-center
              "
            >
              <img
                src={item.icon}
                alt={item.title}
                className="w-10 h-10 object-contain"
              />
            </div>

            {/* TITLE */}
            <h3 className="text-white font-semibold text-black">
              {item.title}
            </h3>

            {/* DESCRIPTION */}
            <p className="text-white/75 text-sm leading-relaxed">
              {item.desc}
            </p>
          </div>
        ))}
      </div>

    </section>
  );
}
