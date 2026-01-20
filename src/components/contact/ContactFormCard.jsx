import Button from "../ui/Button";

export default function ContactFormCard() {
  return (
    /* OUTER CARD */
    <div
      className="
        rounded-[16px]
        border border-white/30
        bg-[#1F3A5F1A]/10
        backdrop-blur-sm
        p-4
      "
    >

    <h3 className="text-lg font-semibold text-[#FFD166] mb-5">
      Send Us a Message
    </h3>
    
      {/* INNER CARD */}
      <div
        className="
          rounded-[14px]
          border border-white/20
          bg-[#FFFFFF24]/25
          backdrop-blur-sm
          p-6
        "
      >
        

        <form className="flex flex-col gap-5">
          <Input label="Name" placeholder="Full Name" />
          <Input label="Email" placeholder="Email" />
          <Input label="Phone" placeholder="Phone" />

          {/* MESSAGE */}
          <div>
            <label className="text-sm text-white/80">Message</label>
            <textarea
              rows={4}
              placeholder="Type Message..."
              className="
                w-full mt-1
                rounded-[10px]
                px-4 py-3
                bg-white/65
                text-[#0B1F3A]
                placeholder:text-[#6B7280]
                outline-none
                resize-none
              "
            />
          </div>

          {/* BUTTON */}
          <Button variant="auth" className="mt-2 w-full">
            Send Message
          </Button>
        </form>
      </div>
    </div>
  );
}

/* INPUT COMPONENT */
function Input({ label, placeholder }) {
  return (
    <div>
      <label className="text-sm text-white/80">{label}</label>
      <input
        placeholder={placeholder}
        className="
          w-full mt-1
          h-[42px]
          rounded-[10px]
          px-4
          bg-white/65
          text-[#0B1F3A]
          placeholder:text-[#6B7280]
          outline-none
        "
      />
    </div>
  );
}
