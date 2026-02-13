import { X, ChevronDown } from "lucide-react";
import { useState } from "react";

export default function EditInvestorDrawer({ open, onClose }) {
  const [form, setForm] = useState({
    email: "nitya234@.com",
    phone: "6789876543",
    city: "",
    state: "",
    pin: "",
    role: "Investor",
    status: "Active",
  });

  if (!open) return null;

  function handleChange(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  return (
    <>
      {/* BACKDROP */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
      />

      {/* DRAWER */}
        <div
            className="
                fixed right-0 top-0
                w-[480px]
                h-screen
                z-50
                flex flex-col
                border-l border-white/20
                backdrop-blur-xl
                bg-[#29354D]/80
                text-white
            "
            >
            {/* HEADER */}
            <div className="flex justify-between items-center p-6 border-b border-white/20">
                <h2 className="text-xl font-semibold">
                Edit User Info
                </h2>

                <button onClick={onClose}>
                <X className="text-white/70 hover:text-white" />
                </button>
            </div>

            {/* SCROLLABLE FORM */}
            <div className="flex-1 overflow-y-auto p-6 flex flex-col gap-6">

                <Input
                label="Email Address"
                name="email"
                value={form.email}
                onChange={handleChange}
                />

                <Input
                label="Phone Number"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                />

                <Input
                label="City"
                name="city"
                value={form.city}
                onChange={handleChange}
                />

                <Input
                label="State"
                name="state"
                value={form.state}
                onChange={handleChange}
                />

                <Input
                label="Pin Code"
                name="pin"
                value={form.pin}
                onChange={handleChange}
                />

                <SelectField
                label="User Role"
                name="role"
                value={form.role}
                onChange={handleChange}
                options={["Investor", "Admin"]}
                />

                <SelectField
                label="Status"
                name="status"
                value={form.status}
                onChange={handleChange}
                options={["Active", "Inactive"]}
                />
            </div>

            {/* FIXED FOOTER */}
            <div className="p-6 border-t border-white/20 flex justify-end gap-4">
                <button
                onClick={onClose}
                className="
                    px-5 py-2
                    rounded-lg
                    border border-white/30
                    text-white/70
                    hover:text-white
                "
                >
                Cancel
                </button>

                <button
                className="
                    px-6 py-2
                    rounded-lg
                    bg-[#1FD2AF]
                    hover:bg-[#19c3a3]
                    text-black
                    font-medium
                "
                >
                Save
                </button>
            </div>
        </div>

    </>
  );
}


/* ================= REUSABLE INPUT ================= */

function Input({ label, ...props }) {
  return (
    <div className="flex flex-col gap-2">
      <span className="text-white/70 text-sm">
        {label}
      </span>
      <input
        {...props}
        className="
          bg-white/10
          border border-white/30
          rounded-lg
          px-4 py-3
          text-white
          outline-none
        "
      />
    </div>
  );
}


/* ================= SELECT ================= */

function SelectField({ label, options, ...props }) {
  return (
    <div className="flex flex-col gap-2 relative">
      <span className="text-white/70 text-sm">
        {label}
      </span>

      <select
        {...props}
        className="
          bg-white/10
          border border-white/30
          rounded-lg
          px-4 py-3
          text-white
          outline-none
          appearance-none
        "
      >
        {options.map((op) => (
          <option key={op} value={op} className="bg-[#1B2B45]">
            {op}
          </option>
        ))}
      </select>

      <ChevronDown
        size={16}
        className="absolute right-4 top-[44px] text-white/60"
      />
    </div>
  );
}
