import React from "react";
import { GrFormNextLink } from "react-icons/gr";
import { NavLink } from "react-router-dom";

const Hero = () => {
  return (
    <>
      <div className="container p-4 mx-auto max-w-full sm:max-w-3xl md:max-w-5xl lg:max-w-4xl xl:max-w-6xl">
        <div className="grid justify-items-center">
          <h1 className="text-center text-5xl leading-snug px-20 my-6 font-bold custom-gradient-text font-OpenSans">
            A Professional Platform for Buying and Selling Websites – Build Your
            Online Empire Today
          </h1>
          <p className="text-white/80 font-OpenSans text-lg mt-4">
            Find the Perfect Website to Boost Your Online Presence
          </p>
          <p className="text-white/80 font-OpenSans text-lg">
            From E-commerce to Blogs – We Have the Website You Need
          </p>
          <NavLink
            to={""}
            className="text-white font-OpenSans flex items-center justify-between my-12 rounded-full  text-xl shadow-inner-custom"
          >
            <GrFormNextLink className="bg-primary w-12 h-12 rounded-full m-2 text-dark" />
            <p className="my-3 mx-4 mr-6">Get Started</p>
          </NavLink>
        </div>
      </div>
      <div className="relative w-full h-48 bg-white my-28">
        <div className="container p-4 mx-auto max-w-full sm:max-w-3xl md:max-w-5xl lg:max-w-4xl xl:max-w-6xl">
          <div className="absolute -top-1/2 w-3/5 max-2xl:w-3/4 h-48 bg-white shadow-inner-down"></div>
        </div>
      </div>
    </>
  );
};

export default Hero;
