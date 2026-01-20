import { useState } from "react";
import Button from "../ui/Button";
import { Icon } from "@iconify/react";

export default function RegisterCard({ onSwitch }) {
  const [showPassword, setShowPassword] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    mobile: "",
    password: "",
  });

  const [error, setError] = useState("");

  // 🔹 Capture input correctly
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // 🔹 REGISTER LOGIC (WORKING)
  const handleRegister = () => {
    const { name, email, mobile, password } = form;

    if (!name || !email || !mobile || !password) {
      setError("All fields are required");
      return;
    }

    const users = JSON.parse(localStorage.getItem("users")) || [];

    const alreadyExists = users.find((u) => u.email === email);
    if (alreadyExists) {
      setError("User already exists");
      return;
    }

    users.push({ name, email, mobile, password });
    localStorage.setItem("users", JSON.stringify(users));

    setError("");
    onSwitch(); // 👉 switch to Login popup
  };

  return (
    <div className="w-[538px] rounded-[9px] bg-white p-[30px] flex flex-col gap-4 shadow-xl">
      
      {/* Header */}
      <div>
        <h2 className="text-2xl font-semibold text-[#1F3A5F]">
          Register
        </h2>
        <p className="text-sm text-gray-500">
          to get started
        </p>
      </div>

      {/* Name */}
      <Input
        label="Your Name"
        name="name"
        value={form.name}
        onChange={handleChange}
      />

      {/* Email */}
      <Input
        label="Your Email Id"
        name="email"
        value={form.email}
        onChange={handleChange}
      />

      {/* Mobile */}
      <div className="flex gap-3">
        <select className="h-10 w-[80px] rounded-md border border-gray-300 bg-white text-[#1F3A5F]">
          <option>91+</option>
        </select>

        <input
          name="mobile"
          value={form.mobile}
          onChange={handleChange}
          placeholder="6789876543"
          className="flex-1 h-10 px-3 rounded-md border border-gray-300 bg-white text-[#1F3A5F]"
        />
      </div>

      {/* Password */}
      <div className="flex flex-col gap-1">
        <label className="text-sm text-gray-500">Password</label>
        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            value={form.password}
            onChange={handleChange}
            placeholder="••••••••"
            className="h-10 w-full px-3 pr-10 rounded-md border border-gray-300 bg-white text-[#1F3A5F]"
          />
          <Icon
            icon={showPassword ? "mdi:eye-outline" : "mdi:eye-off-outline"}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 cursor-pointer"
            onClick={() => setShowPassword(!showPassword)}
          />
        </div>
      </div>

      {/* Error */}
      {error && (
        <p className="text-sm text-red-500">
          {error}
        </p>
      )}

      {/* Button */}
      <Button onClick={handleRegister}>
        Continue
      </Button>

      {/* Footer */}
      <p className="text-sm text-center text-gray-500">
        Already Register?{" "}
        <span
          onClick={onSwitch}
          className="text-[#1F3A5F] font-medium cursor-pointer"
        >
          Login
        </span>
      </p>
    </div>
  );
}

/* 🔁 Reusable Input */
function Input({ label, name, value, onChange }) {
  return (
    <div className="flex flex-col gap-1">
      <label className="text-sm text-gray-500">{label}</label>
      <input
        name={name}
        value={value}
        onChange={onChange}
        className="h-10 px-3 rounded-md border border-gray-300 bg-white text-[#1F3A5F]"
      />
    </div>
  );
}
