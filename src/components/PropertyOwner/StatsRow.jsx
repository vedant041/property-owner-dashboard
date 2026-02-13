

import StatCard from "../PropertyOwner/cards/StatCard";
import { Building2, Home, IndianRupee, Users } from "lucide-react";

export default function StatsRow() {
  return (
    <div className="flex gap-6 mb-6">
      <StatCard
        title="Properties Listed"
        value="12"
        Icon={Building2}
        iconBg="rgba(59,130,246,0.20)"
        iconColor="#3B82F6"
      />

      <StatCard
        title="Currently Open"
        value="12"
        Icon={Home}
        iconBg="rgba(234,179,8,0.20)"
        iconColor="#EAB308"
      />

      <StatCard
        title="Total Invested"
        value="₹1.60 Cr"
        Icon={IndianRupee}
        iconBg="rgba(168,85,247,0.20)"
        iconColor="#A855F7"
      />

      <StatCard
        title="Investors"
        value="24"
        Icon={Users}
        iconBg="rgba(249,115,22,0.20)"
        iconColor="#F97316"
      />
    </div>
  );
}
