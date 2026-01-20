import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import Button from "../ui/Button";
import { Icon } from "@iconify/react";
import { login } from "../../redux/authSlice";

export default function LoginCard({ onSwitch, onClose }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  

  const handleLogin = () => {
    if (!email || !password) {
      setError("Please enter email and password");
      return;
    }

    const users = JSON.parse(localStorage.getItem("users")) || [];

    const validUser = users.find(
      (u) => u.email === email && u.password === password
    );

    if (!validUser) {
      setError("Invalid email or password");
      return;
    }

    // ✅ LOGIN SUCCESS
    dispatch(login({validUser})); 
    setError("");

    onClose?.(); // close popup
    navigate("/dashboard"); 
  };

  return (
    <div
      className="
        w-[538px]
        rounded-[12px]
        bg-white
        p-[30px]
        shadow-[0_20px_50px_rgba(0,0,0,0.15)]
        flex
        flex-col
        gap-6
      "
    >
      {/* Header */}
      <div>
        <h1 className="text-[28px] font-bold text-[#1F3A5F]">
          Login
        </h1>
        <h3 className="text-[16px] font-semibold text-[#6B7280]">
          Welcome Back
        </h3>
      </div>

      {/* Email */}
      <div className="flex flex-col gap-2">
        <label className="text-sm text-[#9CA3AF]">
          Your Email Id
        </label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="nitya234@.com"
          className="
            h-[44px]
            px-4
            rounded-lg
            border
            border-[#E5E7EB]
            text-sm
            text-[#1F3A5F]
            outline-none
            focus:border-[#1F3A5F]
          "
        />
      </div>

      {/* Password */}
      <div className="flex flex-col gap-2 relative">
        <label className="text-sm text-[#9CA3AF]">
          Password
        </label>

        <input
          type={showPassword ? "text" : "password"}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="••••••••"
          className="
            h-[44px]
            px-4
            pr-10
            rounded-lg
            border
            border-[#E5E7EB]
            text-sm
            text-[#1F3A5F]
            outline-none
            focus:border-[#1F3A5F]
          "
        />

        <Icon
          icon={showPassword ? "mdi:eye-outline" : "mdi:eye-off-outline"}
          className="absolute right-4 top-[42px] text-gray-400 cursor-pointer"
          width={20}
          onClick={() => setShowPassword(!showPassword)}
        />
      </div>

      {/* Error */}
      {error && (
        <p className="text-sm text-red-500">
          {error}
        </p>
      )}

      {/* Continue Button (Figma color handled in Button.jsx) */}
      <Button variant="auth" onClick={handleLogin}>
        Continue
      </Button>

      {/* Footer */}
      <p className="text-sm text-center text-[#6B7280]">
        Don’t have an account?{" "}
        <span
          onClick={onSwitch}
          className="text-[#1F3A5F] font-medium cursor-pointer"
        >
          Register
        </span>
      </p>
    </div>
  );
}
