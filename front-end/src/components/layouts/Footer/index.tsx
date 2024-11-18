import React from "react";
import { Link, NavLink } from "react-router-dom";
import { navData } from "../../../data/navItem"; // Sử dụng dữ liệu có sẵn từ navData
import { FaFacebook, FaTiktok, FaTwitter } from "react-icons/fa";
import { CiInstagram } from "react-icons/ci";

const Footer: React.FC = () => {
  return (
    <footer className="relative w-11/12 px-16 bg-black shadow-2xl shadow-white/20 mx-auto my-6 rounded-3xl overflow-hidden">
      <div className="absolute bg-box/40 h-96 w-96 -top-1/2 left-1/2 -translate-x-1/2 rounded-full blur-3xl"></div>
      <div className="grid grid-cols-2 p-6">
        <div>
          <h1 className="text-4xl font-Noto custom-gradient-text-2 font-semibold mb-10 w-3/5">
            Are you interested in a Website?
          </h1>
          <NavLink
            to={"/"}
            className="font-Noto font-semibold text-lg custom custom-gradient-text-2 border-2 rounded-full py-1 px-6 mt-6"
          >
            Contact Sales
          </NavLink>
        </div>
      </div>

      <div className="flex justify-between p-6 mt-8">
        <Link to={"/"} className="text-white font-semibold">
          Logo
        </Link>
        <div className="flex gap-8">
          {navData.map(({ id, name, to }) => (
            <NavLink
              key={id}
              to={to}
              className="text-white text-lg border-2 rounded-full border-white px-4 transition duration-300 ease-in-out hover:text-primary hover:border-primary"
            >
              {name}
            </NavLink>
          ))}
        </div>
        <ul className="flex gap-4 items-center">
          <li className="border-2 p-1 rounded-full">
            <FaFacebook className="text-white text-base" />
          </li>
          <li className="border-2 p-1 rounded-full">
            <CiInstagram className="text-white text-base" />
          </li>
          <li className="border-2 p-1 rounded-full">
            <FaTwitter className="text-white text-base" />
          </li>
          <li className="border-2 p-1 rounded-full">
            <FaTiktok className="text-white text-base" />
          </li>
        </ul>
      </div>
      <div className="w-full flex justify-center mb-24 mt-12">
        <div className="w-1/2 h-[1px] bg-footer "></div>
      </div>
    </footer>
  );
};

export default Footer;
