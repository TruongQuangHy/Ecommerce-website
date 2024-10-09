import React from "react";
import { NavLink } from "react-router-dom";

interface Menu {
  id: number;
  name: string;
  to: string;
}

interface MenuProps {
  menu: Menu[];
}

export const DropDownMenu: React.FC<MenuProps> = ({ menu }) => {
  return (
    <>
      <li
        key={menu.id} // Add key to avoid React warning
        className="mx-6 text-white text-2xl font-OpenSans font-semibold"
      >
        <NavLink
          to={menu.to}
          className={({ isActive }) =>
            `relative transition-all duration-300 ease-in-out 
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
              {menu.name}
            </span>
          )}
        </NavLink>
      </li>
    </>
  );
};
