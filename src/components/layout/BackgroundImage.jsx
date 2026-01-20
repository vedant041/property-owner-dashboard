export default function BackgroundImage({ children }) {
  return (
    <div
      className="min-h-screen w-full bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/Backgroundimg.png')",
      }}
    >
      {/* LIGHT glass overlay like Figma */}
      <div
        className="
          min-h-screen w-full
          bg-gradient-to-b
          from-[rgba(11,31,58,0.35)]
          via-[rgba(11,31,58,0.25)]
          to-[rgba(11,31,58,0.4)]
          backdrop-blur-[2px]
        "
      >
        {children}
      </div>
    </div>
  );
}
