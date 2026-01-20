const BottomOverlay = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-[#1f3b5c]">
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute left-6 bottom-28 h-10 w-10 rounded-full bg-white/20 text-white text-xl flex items-center justify-center hover:bg-white/30"
      >
        ✕
      </button>

      {/* Content */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-[90%] bg-white/10 backdrop-blur-lg rounded-2xl p-4 flex gap-4 overflow-x-auto">
        {children}
      </div>
    </div>
  );
};

export default BottomOverlay;
