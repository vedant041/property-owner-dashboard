import { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/authSlice";
import AuthModal from "../auth/AuthModal";
import { Icon } from "@iconify/react";

export default function Navbar() {
  const dispatch = useDispatch();
  const { isAuthenticated } = useSelector((state) => state.auth);

  const [openAuth, setOpenAuth] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <>
      {/* ✅ NAVBAR */}
      <nav className="relative z-30 w-full bg-[#0B1F3A]/70 backdrop-blur-md px-10 py-4 flex justify-between items-center text-white">
        
        {/* LOGO */}
        <div className="bg-[#E0E0E080] text-[#FAE699] px-6 py-2 w-100px p-45px text-sm">
          Logo
        </div>

        {/* RIGHT */}
        <div className="flex items-center gap-8">
          <Link
            to="/about"
            className="hover:text-[#FFD24A] transition"
          >
            About Us
          </Link>

          <Link
            to="/contact"
            className="hover:text-[#FFD24A] transition"
          >
            Contact Us
          </Link>

          {!isAuthenticated ? (
            <button
              onClick={() => setOpenAuth(true)}
              className="flex items-center gap-2 px-5 h-10 rounded-full border border-white/30 bg-white/10"
            >
              <Icon icon="iconamoon:profile-circle-light" width={18} />
              Login
            </button>
          ) : (
            <div className="relative">
              <button
                onClick={() => setOpenMenu(!openMenu)}
                className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/10"
              >
                <img
                  src="./LoginUserimg.jpg"
                  className="w-8 h-8 rounded-full"
                />
                <Icon icon="mdi:chevron-down" />
              </button>

              {openMenu && (
                <div className="absolute right-0 mt-2 w-40 bg-white text-black rounded-md shadow">
                  <button
                    onClick={() => {
                      dispatch(logout());
                      setOpenMenu(false);
                    }}
                    className="w-full px-4 py-2 text-left hover:bg-gray-100"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </nav>

      {/* ✅ AUTH MODAL — OUTSIDE NAV */}
      {openAuth && <AuthModal onClose={() => setOpenAuth(false)} />}
    </>
  );
}