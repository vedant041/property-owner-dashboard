import { NavLink } from "react-router-dom";
import { LayoutDashboard, Building2, Users } from "lucide-react";

const menu = [
  { name: "Dashboard", icon: LayoutDashboard, path: "/" },
  { name: "My Properties", icon: Building2, path: "/properties" },
  { name: "Investors", icon: Users, path: "/investors" },
];

export default function Sidebar() {
  return (
    <div
      className="
        w-[254px]
        pt-6 px-4
        border-r border-white/20
        backdrop-blur-md
      "
    >


      {menu.map((item) => {
        const Icon = item.icon;

        return (
          <NavLink
            key={item.name}
            to={item.path}
            end
            className={({ isActive }) =>
              `
              flex items-center gap-3
              px-5 py-3 mb-3
              rounded-xl
              text-sm font-medium
              transition-all duration-200

              ${
                isActive
                  ? `
                    bg-white/10
                    backdrop-blur-md
                    border border-white/20
                    text-white
                    shadow-inner
                  `
                  : `
                    text-white/60
                    hover:bg-white/5
                    hover:text-white
                  `
              }
              `
            }
          >
            <Icon size={18} className="opacity-80" />
            {item.name}
          </NavLink>
        );
      })}
    </div>
  );
}
