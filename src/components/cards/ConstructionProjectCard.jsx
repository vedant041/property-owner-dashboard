import { useNavigate } from "react-router-dom";
import GlassCard from "./GlassCard";
import ProgressBar from "../ui/ProgressBar";

export default function ConstructionProjectCard() {
  const navigate = useNavigate();

  return (
    <GlassCard className="h-full">
      <h2 className="text-lg font-semibold">
        Construction Project
      </h2>
      <p className="text-sm text-white/60 mb-6">
        Available properties
      </p>

      <div className="flex gap-6 justify-center">
        {/* CARD 1 */}
        <div
          className="w-[244.5px] h-[360px] rounded-[9px] flex flex-col items-center text-center p-5 backdrop-blur-xl"
          style={{ background: "rgba(41, 53, 77, 0.69)" }}
        >
          <img
            src="/Property2.png"
            alt="Modern Residences"
            className="w-[140px] mb-4"
          />

          <h3 className="font-semibold text-lg">
            Modern Residences
          </h3>

          <p className="text-sm text-white/70 mt-1 mb-4">
            20% Funded
          </p>

          <div className="w-full mb-6">
            <ProgressBar value={20} />
          </div>

          <button
            onClick={() => navigate("/property/modern-residences")}
            className="mt-auto bg-white/20 hover:bg-white/30 transition px-5 py-2 rounded-md text-sm"
          >
            More Details
          </button>
        </div>

        {/* CARD 2 */}
        <div
          className="w-[244.5px] h-[360px] rounded-[9px] flex flex-col items-center text-center p-5 backdrop-blur-xl"
          style={{ background: "rgba(41, 53, 77, 0.69)" }}
        >
          <img
            src="/Property1.png"
            alt="2 BHK Apartment"
            className="w-[140px] mb-4"
          />

          <h3 className="font-semibold text-lg">
            2 BHK Apartment
          </h3>

          <p className="text-sm text-white/70 mt-1 mb-4">
            80% Funded
          </p>

          <div className="w-full mb-6">
            <ProgressBar value={80} />
          </div>

          <button
            onClick={() => navigate("/property/2-bhk-apartment")}
            className="mt-auto bg-white/20 hover:bg-white/30 transition px-5 py-2 rounded-md text-sm"
          >
            More Details
          </button>
        </div>
      </div>
    </GlassCard>
  );
}
