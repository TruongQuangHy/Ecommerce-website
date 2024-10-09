import React, { useState } from "react";
import { navData } from "../../../../data/navItem";
import { NavLink, Link } from "react-router-dom";
import { DropDownMenu } from "../../../components/NavMenu";
import MobMenu from "../../../components/MobMenu";

interface NavBarProps {
  handlShow: () => void;
}

interface Menu {
  id: number;
  name: string;
  to: string;
}

const Navbar: React.FC<NavBarProps> = ({ handlShow }) => {
  return (
    <nav className="bg-dark">
      <div className="container p-4 mx-auto max-w-full sm:max-w-3xl md:max-w-5xl lg:max-w-4xl xl:max-w-6xl">
        <div className="flex justify-between items-center h-20 max-xl:h-14">
          <Link
            to="/"
            className="text-2xl font-OpenSans text-white font-bold max-xl:"
          >
            Logo
          </Link>

          {/* Desktop Menu */}

          <ul className=" lg:flex hidden max-xl:hidden justify-between ">
            {navData.map((menu) => {
              return <DropDownMenu menu={menu} key={menu.id} />;
            })}
          </ul>
          <div className="flex">
            <div className="text-white text-2xl font-OpenSans">Login</div>
            {/* Responsive Menu */}
            <div className="lg:hidden flex items-center">
              <MobMenu Menus={navData} />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
