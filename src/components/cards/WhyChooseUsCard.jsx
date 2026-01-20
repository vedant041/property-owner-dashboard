import { Icon } from "@iconify/react";

export default function WhyChooseUsCard() {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Why Choose Us</h2>

      <div className="grid grid-cols-2 gap-4">
        <div className="flex items-start gap-3 rounded-[12px] border border-white/20 bg-[rgba(31,58,95,0.15)] backdrop-blur-md p-5">
          <Icon icon="mdi:check-circle" className="text-green-400 mt-1" />
          <div>
            <h4 className="font-semibold">Transparent Process</h4>
            <p className="text-sm text-white/70">
              Full visibility into investments and returns.
            </p>
          </div>
        </div>

        <div className="flex items-start gap-3 rounded-[12px] border border-white/20 bg-[rgba(31,58,95,0.15)] backdrop-blur-md p-5">
          <Icon icon="mdi:chart-box" className="text-yellow-400 mt-1" />
          <div>
            <h4 className="font-semibold">Data-Driven Insights</h4>
            <p className="text-sm text-white/70">
              Accurate analytics to make informed decisions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
