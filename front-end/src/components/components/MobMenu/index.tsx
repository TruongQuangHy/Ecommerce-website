import React, { useEffect, useRef, useState } from "react";
import { IoMdMenu } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

interface MenuItem {
  name: string;
  to: string;
}

interface MobMenuProps {
  Menus: MenuItem[];
}

const MobMenu: React.FC<MobMenuProps> = ({ Menus }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDListElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <>
      <div>
        <button
          onClick={toggleMenu}
          className="text-white text-2xl z-50 relative flex items-center mx-4"
        >
          {menuOpen ? <IoClose /> : <IoMdMenu />}
        </button>
        <motion.div
          ref={menuRef}
          inherit={{ x: "-100%" }}
          animate={{ x: menuOpen ? "0%" : "-100%" }}
          className="fixed left-0 right-0 top-20 overflow-y-auto h-full w-1/2 bg-primarySec backdrop-blur p-6"
        >
          <ul>
            {Menus?.map(({ name, to }, i) => {
              return (
                <li
                  key={name}
                  className="p-4 hover:bg-white/5 rounded-md transition-all ease-in-out"
                >
                  <NavLink
                    to={to}
                    className={({ isActive }) =>
                      `relative transition-all duration-300 ease-in-out text-lg w-full
                      ${isActive ? "text-primary border-primary" : "text-white"}
                      hover:text-primary`
                    }
                  >
                    {({ isActive }) => (
                      <span
                        className={`relative pb-2 
                          ${isActive ? "border-b-2 border-primary" : ""}
                          after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0
                          after:bg-primary after:transition-all after:duration-300 after:ease-in-out 
                          hover:after:w-full`}
                      >
                        {name}
                      </span>
                    )}
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </motion.div>
      </div>
    </>
  );
};

export default MobMenu;
