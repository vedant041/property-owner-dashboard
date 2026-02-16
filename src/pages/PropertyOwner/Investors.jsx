import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import {
  Search,
  MoreVertical,
  User,
  ChevronDown,
} from "lucide-react";



/* ===============================
   DUMMY DATA (FIGMA LIKE)
================================ */

const investorData = [

  {
    id: 1,
    name: "Nitya Varma",
    date: "12 Jul 2025",
    property: "2 BHK Apartment",
    location: "Andheri East, Mumbai",
    plan: "Monthly",
    type: "Commercial",
    amount: "₹50,000",
    share: "1.2%",
    status: "Active",
  },

  {
    id: 2,
    name: "Nitya Varma",
    date: "12 Jul 2025",
    property: "2 BHK Apartment",
    location: "Andheri East, Mumbai",
    plan: "Yearly",
    type: "Residential",
    amount: "₹50,000",
    share: "1.2%",
    status: "Cancelled",
  },

  {
    id: 3,
    name: "Nitya Varma",
    date: "12 Jul 2025",
    property: "2 BHK Apartment",
    location: "Andheri East, Mumbai",
    plan: "Monthly",
    type: "Residential",
    amount: "₹50,000",
    share: "1.2%",
    status: "Matured",
  },

  {
    id: 4,
    name: "Nitya Varma",
    date: "12 Jul 2025",
    property: "2 BHK Apartment",
    location: "Andheri East, Mumbai",
    plan: "Yearly",
    type: "Commercial",
    amount: "₹50,000",
    share: "1.2%",
    status: "Pending",
  },
  {
    id: 5,
    name: "Nitya Varma",
    date: "12 Jul 2025",
    property: "2 BHK Apartment",
    location: "Andheri East, Mumbai",
    plan: "Monthly",
    type: "Commercial",
    amount: "₹50,000",
    share: "1.2%",
    status: "Active",
  },

  {
    id: 6,
    name: "Nitya Varma",
    date: "12 Jul 2025",
    property: "2 BHK Apartment",
    location: "Andheri East, Mumbai",
    plan: "Yearly",
    type: "Residential",
    amount: "₹50,000",
    share: "1.2%",
    status: "Cancelled",
  },

  {
    id: 7,
    name: "Nitya Varma",
    date: "12 Jul 2025",
    property: "2 BHK Apartment",
    location: "Andheri East, Mumbai",
    plan: "Monthly",
    type: "Residential",
    amount: "₹50,000",
    share: "1.2%",
    status: "Matured",
  },

  {
    id: 8,
    name: "Nitya Varma",
    date: "12 Jul 2025",
    property: "2 BHK Apartment",
    location: "Andheri East, Mumbai",
    plan: "Yearly",
    type: "Commercial",
    amount: "₹50,000",
    share: "1.2%",
    status: "Pending",
  },

  {
    id: 9,
    name: "Nitya Varma",
    date: "12 Jul 2025",
    property: "2 BHK Apartment",
    location: "Andheri East, Mumbai",
    plan: "Monthly",
    type: "Residential",
    amount: "₹50,000",
    share: "1.2%",
    status: "Matured",
  },
];



/* ===============================
   MAIN COMPONENT
================================ */

export default function Investors() {
   const navigate = useNavigate(); 
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("");
  const [type, setType] = useState("");


  /* ================= FILTER ================= */

  const filtered = investorData.filter((item) => {

    const matchSearch =
      item.name.toLowerCase().includes(search.toLowerCase());

    const matchStatus =
      status === "" || item.status === status;

    const matchType =
      type === "" || item.type === type;

    return matchSearch && matchStatus && matchType;

  });


  return (
    <div className="flex justify-center pb-10">


      {/* ================= MAIN CARD ================= */}

      <div
        className="
          w-[1122px]
          p-6
          rounded-xl
          backdrop-blur-md
          border border-white/20
          bg-[#29354D]/45
          text-white
        "
      >


        {/* ================= HEADER ================= */}

        <div className="flex justify-between items-center mb-6">


          {/* LEFT */}
          <div>

            <h1 className="text-xl font-semibold">
              Investors
            </h1>

            <p className="text-sm text-white/60">
              Track all user investments across properties
            </p>

          </div>


          {/* RIGHT */}
          <div className="flex gap-3 items-center">


            {/* SEARCH */}
            <div className="relative">

              <Search
                size={16}
                className="absolute left-3 top-2.5 text-white/50"
              />

              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search"
                className="
                  pl-9 pr-3 py-2
                  bg-white/10
                  border border-white/20
                  rounded-lg
                  text-sm
                  outline-none
                "
              />

            </div>


            {/* STATUS */}
            <SelectBox
              value={status}
              onChange={setStatus}
              label="Status"
              options={[
                "Active",
                "Cancelled",
                "Matured",
                "Pending",
              ]}
            />


            {/* TYPE */}
            <SelectBox
              value={type}
              onChange={setType}
              label="Property Type"
              options={[
                "Residential",
                "Commercial",
              ]}
            />

          </div>

        </div>



        {/* ================= TABLE ================= */}

        <div
          className="
            rounded-lg
            border border-white/20
            overflow-hidden
          "
        >


          {/* HEADER ROW */}
          <div
            className="
              grid grid-cols-[2fr_1fr_2fr_1fr_1fr_1fr_1fr_1fr_1fr_60px]
              px-4 py-3
              bg-white/5
              text-white/70
              text-sm
            "
          >

            <div>Investor</div>
            <div>Invested On</div>
            <div>Property</div>
            <div>Plan</div>
            <div>Type</div>
            <div>Amount</div>
            <div>Share</div>
            <div>Status</div>
            <div></div>
            <div>Action</div>

          </div>



          {/* BODY */}
          {filtered.map((item) => (

            <Row key={item.id} data={item}  navigate={navigate} />

          ))}

        </div>



        {/* ================= PAGINATION ================= */}

        <div className="flex justify-end gap-2 mt-4">

          {["1", "2", "3", "...", "40"].map((p) => (

            <button
              key={p}
              className="
                px-3 py-1
                bg-white/10
                rounded
                text-sm
                hover:bg-white/20
              "
            >
              {p}
            </button>

          ))}

        </div>

      </div>

    </div>
  );
}



/* ===============================
   ROW
================================ */

function Row({ data, navigate }) {

  const [open, setOpen] = useState(false);
  const ref = useRef();


  /* CLOSE ON OUTSIDE */
  useEffect(() => {

    function close(e) {
      if (!ref.current?.contains(e.target)) {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", close);

    return () => document.removeEventListener("mousedown", close);

  }, []);


  return (
    <div
      className="
        grid grid-cols-[2fr_1fr_2fr_1fr_1fr_1fr_1fr_1fr_1fr_60px]
        px-4 py-4
        border-b border-white/10
        text-sm
        items-center
      "
    >


      {/* INVESTOR */}
      <div className="flex gap-3 items-center">

        <div
          className="
            w-9 h-9
            rounded-full
            bg-cyan-500/20
            flex justify-center items-center
          "
        >
          <User size={18} className="text-cyan-400" />
        </div>

        <div>

          <p>{data.name}</p>

          <p className="text-xs text-white/50">
            Investor
          </p>

        </div>

      </div>


      <div>{data.date}</div>


      <div>

        <p>{data.property}</p>

        <p className="text-xs text-white/50">
          {data.location}
        </p>

      </div>


      <div>{data.plan}</div>

      <div>{data.type}</div>

      <div>{data.amount}</div>

      <div>{data.share}</div>


      {/* STATUS */}
      <div>
        <StatusBadge status={data.status} />
      </div>


      <div></div>


      {/* ACTION */}
    <div className="relative" ref={ref}>
      <button
        onClick={() => setOpen(!open)}
        className="
          w-8 h-8
          rounded-full
          bg-white/10
          hover:bg-white/20
          flex justify-center items-center
        "
      >
        <MoreVertical size={16} />
      </button>

      {open && (
        <div
          className="
            absolute right-10 top-0
            w-[170px]
            bg-[#3B4E73]
            rounded-lg
            border border-white/20
            shadow-xl
            overflow-hidden
            z-50
          "
        >

          <MenuItem
            text="Remove"
            danger
            onClick={() => {
              setOpen(false);
              console.log("Remove clicked");
            }}
          />

          <MenuItem
            text="View Profile"
            onClick={() => {
              setOpen(false);
              navigate(`/investor/${data.id}`);
            }}
          />

          <MenuItem
            text="See Investment"
            onClick={() => {
              setOpen(false);
              navigate(`/investment/${data.id}`);
            }}
          />


        </div>
      )}
</div>


    </div>
  );
}



/* ===============================
   COMPONENTS
================================ */

function SelectBox({ value, onChange, label, options }) {

  return (
    <div className="relative">

      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="
          bg-white/10
          border border-white/20
          rounded-lg
          px-4 py-2
          text-sm
          outline-none
          pr-8
        "
      >

        <option value="">{label}</option>

        {options.map((o) => (
          <option key={o} value={o} className="bg-[#1B2B45]">
            {o}
          </option>
        ))}

      </select>

      <ChevronDown
        size={14}
        className="absolute right-2 top-3 text-white/60"
      />

    </div>
  );
}



function StatusBadge({ status }) {

  const styles = {

    Active: "bg-green-500/20 w-[74px] h-[25px] text-green-400",
    Cancelled: "bg-red-500/20 w-[74px] h-[25px] text-red-400",
    Matured: "bg-blue-500/20 w-[74px] h-[25px] text-blue-400",
    Pending: "bg-orange-500/20 w-[74px] h-[25px] text-orange-400",

  };


  return (
    <span
      className={`
        px-3 py-1 w-[74px] h-[25px]
        rounded-md
        text-xs
        ${styles[status]}
      `}
    >
      {status}
    </span>
  );
}



function MenuItem({ text, danger, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`
        w-full text-left px-4 py-2 text-sm
        hover:bg-white/10 transition
        ${danger ? "text-red-400" : "text-white"}
      `}
    >
      {text}
    </button>
  );
}
