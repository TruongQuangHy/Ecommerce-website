import React, { useEffect, useRef, useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { IoCloseSharp } from "react-icons/io5";
import { motion } from "framer-motion";

const Search = () => {
  const [openSearch, setOpenSearch] = useState(false);
  const searchRef = useRef<HTMLDListElement>(null);

  useEffect(() => {
    const handleOutSide = (e: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(e.target as Node)) {
        setOpenSearch(false);
      }
    };
    document.addEventListener("mousedown", handleOutSide);
    return () => {
      document.removeEventListener("mousedown", handleOutSide);
    };
  }, []);

  const handleOpenSearch = () => {
    setOpenSearch(!openSearch);
  };
  return (
    <>
      <div className="text-white mx-4  ">
        <IoIosSearch
          onClick={handleOpenSearch}
          className="size-5 hover:text-primary transition-all duration-100 ease-out"
        />

        <motion.div
          ref={searchRef}
          inherit={{ x: "100%" }}
          animate={{ x: openSearch ? "-50%" : "200%" }}
          transition={{ type: "spring", stiffness: 100, damping: 20 }}
          className="fixed top-7 max-lg:top-4 left-1/2 -translate-x-1/2 right-0 bg-white h-14 w-3/5 max-lg:w-full rounded-full flex items-center z-50"
        >
          <IoIosSearch className="size-8 mx-4 text-dark hover:text-primary transition-all duration-100 ease-out" />
          <input
            type=""
            placeholder="asdfasdf"
            className="w-full h-full rounded-full focus:outline-none text-dark"
          />
          <IoCloseSharp
            onClick={handleOpenSearch}
            className="size-8 mx-4 text-dark hover:text-primary transition-all duration-100 ease-out"
          />
        </motion.div>
      </div>
    </>
  );
};

export default Search;
