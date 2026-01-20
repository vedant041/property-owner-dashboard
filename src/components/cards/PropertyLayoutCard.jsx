import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function PropertyLayoutCard() {
  const navigate = useNavigate();

  /* ===================== LAYOUT + PROJECT MAPPING ===================== */

  const layouts = [
    {
      id: "layout-1",
      image: "/Layoutimg5.png",
      projects: [
        {
          title: "Modern Residences",
          percent: 20,
          image: "/Property2.png",
          route: "/property/modern-residences",
        },
        {
          title: "2 BHK Apartment",
          percent: 80,
          image: "/Property1.png",
          route: "/property/2-bhk-apartment",
        },
      ],
    },

    {
      id: "layout-2",
      image: "/Layoutimg1.png",
      projects: [
        {
          title: "Luxury Villas",
          percent: 55,
          image: "/Property1.png",
          route: "/property/luxury-villas",
        },
        {
          title: "Studio Apartment",
          percent: 35,
          image: "/Property2.png",
          route: "/property/studio-apartment",
        },
        {
          title: "Penthouse",
          percent: 70,
          image: "/Property1.png",
          route: "/property/penthouse",
        },
      ],
    },

    {
      id: "layout-3",
      image: "/Layoutimg2.png",
      projects: [
        {
          title: "Affordable Homes",
          percent: 60,
          image: "/Property1.png",
          route: "/property/affordable-homes",
        },
        {
          title: "Office Hub",
          percent: 90,
          image: "/Property1.png",
          route: "/property/office-hub",
        },
      ],
    },

    {
      id: "layout-4",
      image: "/Layoutimg3.png",
      projects: [
        {
          title: "Commercial Space",
          percent: 45,
          image: "/Property2.png",
          route: "/property/commercial-space",
        },
        {
          title: "Office Hub",
          percent: 90,
          image: "/Property1.png",
          route: "/property/office-hub",
        },
      ],
    },

    {
      id: "layout-5",
      image: "/Layoutimg4.png",
      projects: [
        {
          title: "Modern Residences",
          percent: 20,
          image: "/Property1.png",
          route: "/property/modern-residences",
        },
        {
          title: "2 BHK Apartment",
          percent: 80,
          image: "/Property2.png",
          route: "/property/2-bhk-apartment",
        },
      ],
    },
  ];

  /* ===================== STATES ===================== */

  const [activeLayoutIndex, setActiveLayoutIndex] = useState(0);
  const [showInlineLayout, setShowInlineLayout] = useState(false);
  const [cardIndex, setCardIndex] = useState(0);

  const activeLayout = layouts[activeLayoutIndex];
  const projects = activeLayout.projects;

  /* ===================== UI ===================== */

  return (
    <div
      className="
        relative
        w-[533px]
        rounded-[15px]
        border border-white/30
        backdrop-blur-md
        p-6
        text-white
        flex flex-col gap-4
      "
      style={{ background: "rgba(31,58,95,0.10)" }}
    >
      {/* HEADER */}
      <div>
        <h2 className="text-xl font-semibold">Property Layout</h2>
        <p className="text-sm text-white/70">
          Click on a plot to view details
        </p>
      </div>

      {/* LAYOUT VIEW */}
      <div className="flex gap-6 items-start">
        <div className="flex flex-col gap-2">
          <StatusPill color="bg-green-400" label="Available" />
          <StatusPill color="bg-red-400" label="Sold" />
          <StatusPill color="bg-yellow-400" label="Reserved" />

          <button
            onClick={() => setShowInlineLayout(true)}
            className="mt-4 w-9 h-9 rounded-lg bg-white/10 border border-white/20 flex items-center justify-center"
          >
            ⬚
          </button>
        </div>

        <img
          src={activeLayout.image}
          className="w-[455px] h-[229px] object-cover rounded-[12px]"
          alt="layout"
        />
      </div>

      {/* INLINE LAYOUT SWITCHER */}
      {showInlineLayout && (
        <div
          className="absolute left-[95px] top-[255px] w-[430px] h-[75px] rounded-xl flex items-center px-3 gap-3 backdrop-blur-md z-20"
          style={{
            background: "rgba(31,58,95,0.12)",
            border: "1px solid rgba(238,238,238,0.3)",
          }}
        >
          <button
            onClick={() => setShowInlineLayout(false)}
            className="absolute -left-10 w-8 h-8 rounded-full bg-white/20"
          >
            ✕
          </button>

          {layouts.map((layout, index) => (
            <button
              key={layout.id}
              onClick={() => {
                setActiveLayoutIndex(index);
                setCardIndex(0); // reset cards
              }}
              className={`w-[70px] h-[48px] rounded-[10px] overflow-hidden border ${
                index === activeLayoutIndex
                  ? "border-white bg-white/10"
                  : "border-white/20"
              }`}
            >
              <img src={layout.image} className="w-full h-full object-cover" />
            </button>
          ))}
        </div>
      )}

      <div className="border-t border-white/20 mt-2" />

      {/* CONSTRUCTION PROJECTS */}
      <div>
        <h3 className="text-sm font-semibold">Construction Project</h3>
        <p className="text-xs text-white/60 mb-4">
          Available properties
        </p>

        <div className="relative">
          <div className="grid grid-cols-2 gap-4">
            {projects.slice(cardIndex, cardIndex + 2).map((p) => (
              <ProjectCard
                key={p.title}
                {...p}
                onClick={() => navigate(p.route)}
              />
            ))}
          </div>

          {/* RIGHT ARROW */}
          {projects.length > 2 && cardIndex + 2 < projects.length && (
            <Arrow direction="right" onClick={() => setCardIndex(cardIndex + 1)} />
          )}

          {/* LEFT ARROW */}
          {projects.length > 2 && cardIndex > 0 && (
            <Arrow direction="left" onClick={() => setCardIndex(cardIndex - 1)} />
          )}
        </div>
      </div>
    </div>
  );
}

/* ===================== COMPONENTS ===================== */

function StatusPill({ color, label }) {
  return (
    <div className="px-2 py-1 text-[11px] rounded-md border border-white/30 bg-white/10 flex items-center gap-1">
      <span className={`w-2 h-2 rounded-full ${color}`} />
      {label}
    </div>
  );
}

function Arrow({ direction, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`absolute top-1/2 -translate-y-1/2 ${
        direction === "right" ? "-right-4" : "-left-4"
      } w-9 h-9 rounded-md bg-white/20 backdrop-blur-md`}
    >
      {direction === "right" ? "❯" : "❮"}
    </button>
  );
}

function ProjectCard({ title, percent, image, onClick }) {
  return (
    <div className="h-[330px] rounded-[16px] p-6 flex flex-col backdrop-blur-lg border border-white/20 bg-[#29354DB0]">
      <h4 className="text-lg font-semibold mb-3">{title}</h4>

      <div className="flex-1 flex items-center justify-center">
        <img src={image} className="max-h-[150px] object-contain" />
      </div>

      <p className="text-sm text-white/60 mb-2 text-center">
        {percent}% Funded
      </p>

      <div className="h-[6px] bg-white/30 rounded-full mb-4 overflow-hidden">
        <div
          className="h-full bg-green-400"
          style={{ width: `${percent}%` }}
        />
      </div>

      <button
        onClick={onClick}
        className="h-[40px] rounded-md bg-white/20 border border-white/20 hover:bg-white/30"
      >
        More Details
      </button>
    </div>
  );
}