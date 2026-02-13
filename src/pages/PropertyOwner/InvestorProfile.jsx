import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import EditInvestorDrawer from "./EditInvestorDrawer";

import {
  User,
  Mail,
  Phone,
  MapPin,
  Pencil,
  Trash2,
} from "lucide-react";

export default function InvestorProfile() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [editOpen, setEditOpen] = useState(false);

  return (
    <div className="w-full flex justify-center py-10">

      {/* FIXED WIDTH LIKE FIGMA */}
      <div className="w-[1122px]">

        {/* BREADCRUMB */}
        <p className="text-sm text-white/60 mb-4">
          Investor <span className="text-white/40">›</span> User Profile
        </p>

        {/* MAIN CARD */}
        <div
          className="
            w-[1122px]
            h-[732px]
            rounded-[9px]
            border border-[#EEEEEE]/30
            bg-[#29354D]/50
            backdrop-blur-md
            p-6
            text-white
            shadow-xl
          "
        >

          {/* HEADER */}
          <div className="flex justify-between items-start">

            <div className="flex gap-6 items-center">

              {/* AVATAR */}
              <div className="w-[96px] h-[96px] rounded-full bg-cyan-500/20 flex items-center justify-center">
                <User size={42} className="text-cyan-400" />
              </div>

              {/* NAME + JOIN */}
              <div>
                <h1 className="text-[28px] font-semibold tracking-wide">
                  Nitya Varma
                </h1>

                <p className="text-sm text-white/60 mt-2">
                  Joined on: <span className="text-white">12 Aug 2023</span>

                 <span
                    onClick={() => navigate(`/investor/`)}
                    className="text-cyan-400 ml-4 cursor-pointer hover:underline"
                    >
                    Investment
                </span>

                </p>
              </div>
            </div>

            {/* ACTION ICONS (FIGMA MATCH) */}
            <div className="flex gap-5 mt-1">
              <button onClick={() => setEditOpen(true)}>
                <Pencil
                  size={20}
                  strokeWidth={1.5}
                  className="text-white/70 hover:text-white transition"
                />
              </button>

              <button>
                <Trash2
                  size={20}
                  strokeWidth={1.5}
                  className="text-red-400 hover:text-red-500 transition"
                />
              </button>
            </div>
          </div>

          {/* DIVIDER */}
          <div className="border-t border-white/20 my-8" />

          {/* INFO GRID */}
          <div className="grid grid-cols-3 gap-20">

            {/* USER ROLE */}
            <InfoBlock
              icon={<User size={20} className="text-cyan-400" />}
              label="User Role"
              value="Investor"
            />

            {/* EMAIL */}
            <InfoBlock
              icon={<Mail size={20} className="text-cyan-400" />}
              label="Email Address"
              value="nitya234@.com"
            />

            {/* PHONE */}
            <InfoBlock
              icon={<Phone size={20} className="text-cyan-400" />}
              label="Phone Number"
              value="6789876543"
            />

          </div>

          {/* ADDRESS */}
          <div className="mt-16">
            <InfoBlock
              icon={<MapPin size={20} className="text-cyan-400" />}
              label="Address"
              value="City, State, Pin Code"
            />
          </div>

        </div>
      </div>

      {/* DRAWER */}
      <EditInvestorDrawer
        open={editOpen}
        onClose={() => setEditOpen(false)}
      />

    </div>
  );
}


/* ================= INFO BLOCK ================= */

function InfoBlock({ icon, label, value }) {
  return (
    <div className="flex gap-4 items-start">
      <div className="mt-1">{icon}</div>

      <div>
        <p className="text-sm text-white/60">
          {label}
        </p>

        <p className="mt-2 text-white text-[15px]">
          {value}
        </p>
      </div>
    </div>
  );
}
