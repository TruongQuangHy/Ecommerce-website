import React from "react";
import { GrFormNextLink } from "react-icons/gr";
import { NavLink } from "react-router-dom";

const Hero = () => {
  return (
    <>
      <div className="container p-4 mx-auto max-w-full sm:max-w-3xl md:max-w-5xl lg:max-w-4xl xl:max-w-6xl">
        <div className="grid items-center">
          <h1 className="text-center text-5xl leading-snug px-20 font-bold custom-gradient-text">
            A Professional Platform for Buying and Selling Websites – Build Your
            Online Empire Today
          </h1>
          <p>Find the Perfect Website to Boost Your Online Presence</p>
          <p>From E-commerce to Blogs – We Have the Website You Need</p>
          <NavLink>
            <GrFormNextLink />
            Get Started
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default Hero;
