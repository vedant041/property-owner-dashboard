import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Area,
  ReferenceLine,
} from "recharts";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const data = [
  { month: "Jan", value: 5000 },
  { month: "Feb", value: 12000 },
  { month: "Mar", value: 10000 },
  { month: "Apr", value: 14500 },
  { month: "May", value: 11000 },
  { month: "Jun", value: 18500 },
  { month: "Jul", value: 15000 },
  { month: "Aug", value: 21000 },
  { month: "Sep", value: 16000 },
  { month: "Oct", value: 11000 },
  { month: "Nov", value: 7000 },
  { month: "Dec", value: 9000 },
];

export default function InvestmentGrowthGraph() {
  const [propertyOpen, setPropertyOpen] = useState(false);
  const [yearOpen, setYearOpen] = useState(false);
  const [property, setProperty] = useState("Property 1");
  const [year, setYear] = useState("2025");

  return (
    <div className="">

      {/* MAIN CARD */}
      <div
        className="
          w-[1220px]
          h-[631px]
          relative
          rounded-xl
          border border-white/20
          bg-[#29354D]/50
          backdrop-blur-[4px]
          p-6
        "
      >

        {/* HEADER */}
        <div className="flex justify-between items-center mb-6">

          <h2 className="text-lg font-semibold text-white">
            Investment Growth Graph
          </h2>

          {/* DROPDOWNS */}
          <div className="flex gap-4 relative z-50">

            {/* PROPERTY DROPDOWN */}
            <div className="relative">
              <button
                onClick={() => {
                  setPropertyOpen(!propertyOpen);
                  setYearOpen(false);
                }}
                className="px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white flex items-center gap-2"
              >
                {property}
                <ChevronDown size={16} />
              </button>

              {propertyOpen && (
                <div className="absolute right-0 mt-2 w-40 bg-[#3B4E73] border border-white/20 rounded-lg shadow-lg z-50">
                  {["Property 1", "Property 2", "Property 3"].map((p) => (
                    <div
                      key={p}
                      onClick={() => {
                        setProperty(p);
                        setPropertyOpen(false);
                      }}
                      className="px-4 py-2 hover:bg-white/10 cursor-pointer text-white"
                    >
                      {p}
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* YEAR DROPDOWN */}
            <div className="relative">
              <button
                onClick={() => {
                  setYearOpen(!yearOpen);
                  setPropertyOpen(false);
                }}
                className="px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white flex items-center gap-2"
              >
                {year}
                <ChevronDown size={16} />
              </button>

              {yearOpen && (
                <div className="absolute right-0 mt-2 w-28 bg-[#3B4E73] border border-white/20 rounded-lg shadow-lg z-50">
                  {["2021", "2022", "2023", "2024", "2025", "2026"].map((y) => (
                    <div
                      key={y}
                      onClick={() => {
                        setYear(y);
                        setYearOpen(false);
                      }}
                      className="px-4 py-2 hover:bg-white/10 cursor-pointer text-white"
                    >
                      {y}
                    </div>
                  ))}
                </div>
              )}
            </div>

          </div>
        </div>

        {/* CHART WRAPPER */}
        <div className="relative z-0 pointer-events-none">

          <ResponsiveContainer width="100%" height={520}>
            <LineChart data={data}>

              {/* GRID */}
              <CartesianGrid stroke="rgba(255,255,255,0.1)" vertical={false} />

              {/* X AXIS */}
              <XAxis
                dataKey="month"
                stroke="rgba(255,255,255,0.6)"
                tick={{ fill: "#ffffffaa" }}
              />

              {/* Y AXIS (START FROM 500, GAP 5000) */}
              <YAxis
                domain={[5000, 30000]}
                ticks={[5000, 10000, 15000, 20000, 25000, 30000]}
                stroke="rgba(255,255,255,0.6)"
                tick={{ fill: "#ffffffaa" }}
              />

              {/* TOOLTIP */}
              <Tooltip
                wrapperStyle={{ pointerEvents: "auto" }}
                contentStyle={{
                  backgroundColor: "#2E405F",
                  border: "1px solid rgba(255,255,255,0.2)",
                  borderRadius: "10px",
                  color: "#fff",
                }}
              />

              {/* SHADED AREA */}
              <Area
                type="monotone"
                dataKey="value"
                stroke="none"
                fill="url(#colorGradient)"
                fillOpacity={0.25}
              />

              {/* LINE */}
              <Line
                type="monotone"
                dataKey="value"
                stroke="#22D3EE"
                strokeWidth={3}
                dot={{ r: 6, stroke: "#22D3EE", strokeWidth: 3, fill: "#0F172A" }}
                activeDot={{ r: 8 }}
              />

              {/* HIGHLIGHT VERTICAL LINE */}
              <ReferenceLine
                x="Jan"
                stroke="#22D3EE"
                strokeDasharray="3 3"
              />

              {/* GRADIENT */}
              <defs>
                <linearGradient id="colorGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#22D3EE" stopOpacity={0.4} />
                  <stop offset="95%" stopColor="#22D3EE" stopOpacity={0} />
                </linearGradient>
              </defs>

            </LineChart>
          </ResponsiveContainer>

        </div>

      </div>
    </div>
  );
}
