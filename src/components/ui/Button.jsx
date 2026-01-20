export default function Button({
  children,
  variant = "primary",
  className = "",
  type = "button",
  onClick,
}) {
  const base =
    "rounded-lg font-medium transition flex items-center justify-center";

  const variants = {
    primary: "bg-blue-500 hover:bg-blue-600 text-black px-4 py-2",
    warning: "bg-yellow-500 hover:bg-yellow-600 text-black px-4 py-2",

    // Figma Login/Register button
    auth: "bg-[#1F3A5F] hover:bg-[#284b7a] text-white h-[44px] w-full text-sm",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${base} ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
}
