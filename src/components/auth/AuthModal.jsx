import { useState } from "react";
import LoginCard from "../cards/LoginCard";
import RegisterCard from "../cards/RegisterCard";

export default function AuthModal({ onClose }) {
  const [mode, setMode] = useState("login");

  return (
    <div
      className="
        fixed inset-0 z-50
        bg-black/40
        flex items-center justify-center
      "
    >
      <div
        className="absolute inset-0"
        onClick={onClose}
      />

      <div className="relative z-10 pointer-events-auto">
        {mode === "login" ? (
          <LoginCard
            onSwitch={() => setMode("register")}
            onClose={onClose}
          />
        ) : (
          <RegisterCard
            onSwitch={() => setMode("login")}
          />
        )}
      </div>
    </div>
  );
}