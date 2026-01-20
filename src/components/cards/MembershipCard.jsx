export default function MembershipCard() {
  return (
    <div className="flex flex-col gap-6">
      {/* ===== CARD 1 : BUDHIS FOUNDATION MEMBERSHIP ===== */}
      <div className="bg-[rgba(31,58,95,0.1)] backdrop-blur-sm border border-white/15 rounded-[24px] p-6">
        <h1 className="text-[18px] font-semibold mb-4">
          Budhis Foundation Membership
        </h1>

        {/* Inner bordered box */}
        <div className="bg-[#1116296B] border border-[#FFD24A]/60 rounded-[14px] p-4 text-sm text-white/90 mb-6">
          <p className="leading-relaxed">
            Become a part of BUDHIS FOUNDATION. <br />
            Get exclusive benefits and opportunities as a member.
          </p>

          <div className="mt-2 text-right text-xs text-white/70 cursor-pointer">
            Learn More →
          </div>
        </div>

        {/* Join Button */}
        <div className="flex justify-center items-center ">
          <button className="bg-[#FFD24A] text-black font-medium px-6 py-2 rounded-[10px] hover:brightness-110 transition">
            Join Now
          </button>
        </div>
      </div>
    </div>
  );
}
