import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import investorData from "../../data/investorData";

/* ---------- LEGEND ---------- */
function CustomLegend() {
  return (
    <div className="flex gap-6 mt-2">
      <div className="flex items-center gap-2 text-sm">
        <span className="w-3 h-3 rounded-full bg-[#8979FF]" />
        <span>Invested</span>
      </div>
      <div className="flex items-center gap-2 text-sm">
        <span className="w-3 h-3 rounded-full bg-[#FFE88A]" />
        <span>Return</span>
      </div>
    </div>
  );
}

export default function InvestorCard() {
  const { chart, shareholders } = investorData;

  return (
    <div className="bg-[rgba(31,58,95,0.1)] backdrop-blur-sm border border-white/15 rounded-[24px] p-6 flex flex-col gap-5 text-white h-full">

      {/* TITLE */}
      <h2 className="text-lg font-semibold">
        Investor & Shareholders
      </h2>

      {/* CHART */}
      <div className="h-[260px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={chart}>
            <CartesianGrid stroke="rgba(255,255,255,0.15)" strokeDasharray="4 4" />

            <XAxis
              dataKey="month"
              stroke="rgba(255,255,255,0.6)"
              tick={{ fontSize: 12 }}
            />

            <YAxis
              domain={[0, 100]}
              ticks={[0, 20, 40, 60, 80, 100]}
              stroke="rgba(255,255,255,0.6)"
              tick={{ fontSize: 12 }}
            />

            <Tooltip
              contentStyle={{
                background: "rgba(15,35,60,0.95)",
                borderRadius: "10px",
                border: "1px solid rgba(255,255,255,0.1)",
              }}
            />

            <Line
              type="monotone"
              dataKey="invested"
              stroke="#8979FF"
              strokeWidth={2.5}
              dot={{ r: 5, fill: "#8979FF" }}
            />

            <Line
              type="monotone"
              dataKey="return"
              stroke="#FFE88A"
              strokeWidth={2.5}
              dot={{ r: 5, fill: "#FFE88A" }}
            />
          </LineChart>
        </ResponsiveContainer>

        <CustomLegend />
      </div>

      {/* BUTTONS */}
      <div className="flex gap-8 mt-8 ">
        <button className="flex-1 bg-[#D7E4F8] hover:bg-[#C3D6F3] transition rounded-lg py-2 font-medium text-[#1F3A5F]">
          Buy Shares
        </button>
        <button className="flex-1 bg-[#FFD24A] hover:bg-[#FACC15] transition rounded-lg py-2 font-medium text-black">
          Sell Shares
        </button>
      </div>

      {/* SHAREHOLDER TABLE */}
      <div className="bg-[#29354D]/50 rounded-[18px] border border-white/20 p-4 flex flex-col">

        {/* TABLE HEADER */}
        <div className="grid grid-cols-[1.6fr_0.7fr_1fr_1fr] text-sm text-white/70 pb-2 border-b border-white/15">
          <span>Shareholder Name</span>
          <span>Shares</span>
          <span>Dividend</span>
          <span>Total</span>
        </div>

        {/* 🔥 SCROLLABLE BODY */}
        <div className="mt-2 max-h-[200px] overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-white/20 scrollbar-track-transparent">
          {shareholders.map((item, index) => (
            <div
              key={index}
              className="grid grid-cols-[1.6fr_0.7fr_1fr_1fr] items-center h-[40px] text-sm"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-teal-500/20 flex items-center justify-center text-teal-400">
                  👤
                </div>
                <span>{item.name}</span>
              </div>
              <span>{item.shares}</span>
              <span>${item.dividend.toLocaleString()}</span>
              <span>${item.total.toLocaleString()}</span>
            </div>
          ))}
        </div>

        {/* TOTAL */}
        <div className="flex justify-between text-sm font-medium pt-3 mt-3 border-t border-white/15">
          <span>Total Invested</span>
          <span>$30,000</span>
        </div>
      </div>
    </div>
  );
}
