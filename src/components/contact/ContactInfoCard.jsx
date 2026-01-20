import { Icon } from "@iconify/react";

export default function ContactInfoCard() {
  return (
    <div className="rounded-[16px] border border-white/20 bg-[rgba(31,58,95,0.2)] backdrop-blur-[4px] p-6">
      
      <h3 className="text-lg font-semibold text-[#D7A95D] mb-4">
        Get In Touch
      </h3>

      <div className="space-y-3 text-white/80 font-semibold text-xl">
        <div className="flex items-center gap-3">
          <Icon icon="mdi:map-marker-outline" />
          123 Business Ave, Mumbai, India
        </div>

        <div className="flex items-center gap-3">
          <Icon icon="mdi:phone-outline" />
          Andheri East, Mumbai
        </div>

        <div className="flex items-center gap-3">
          <Icon icon="mdi:email-outline" />
          Andheri East, Mumbai
        </div>
      </div>

      {/* Tags */}
      <div className="flex items-center gap-[6px] mt-85 flex-wrap">
        <Tag type="investor" text="Investor Support" />
        <Tag type="enquiry" text="Property Enquiry" />
        <Tag type="business" text="Business Partnership" />
      </div>

    </div>
  );
}

function Tag({ text, type }) {
  const config = {
    investor: {
      icon: "mdi:check-bold",
      color: "text-green-400",
      bg: "bg-[#29354DB0]",
    },
    enquiry: {
      icon: "mdi:chart-line",
      color: "text-yellow-400",
      bg: "bg-[#29354DB0]",
    },
    business: {
      icon: "mdi:chart-line",
      color: "text-yellow-400",
      bg: "bg-[#29354DB0]",
    },
  };

  const { icon, color, bg } = config[type];

  return (
    <div
      className={`
        flex items-center gap-2
        px-8 py-2
        rounded
        ${bg}
        border border-white/30
        text-sm text-white
        backdrop-blur-sm
      `}
    >
      <Icon icon={icon} className={color} width={16} />
      {text}
    </div>
  );
}
