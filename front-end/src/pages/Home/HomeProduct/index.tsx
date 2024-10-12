import React, { useState } from "react";
import { GrFormNextLink } from "react-icons/gr";
import { MdNavigateNext } from "react-icons/md";
import { NavLink } from "react-router-dom";
import { cateData } from "../../../data/navItem";
import { motion } from "framer-motion";

interface Cate {
  id: number;
  name: string;
  value: string;
  subMenu: { id: number; name: string }[];
}

const HomeProduct: React.FC = () => {
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);

  // Animation hover
  const subMenuAnimate = {
    enter: {
      opacity: 1,
      rotateX: 0,
      transition: {
        duration: 0.5,
      },
      display: "grid",
    },
    exit: {
      opacity: 0,
      rotateX: -15,
      transition: {
        duration: 0.5,
      },
      display: "none",
    },
  };

  return (
    <>
      <div className="container h-screen bg-white rounded-md p-4 mx-auto max-w-full sm:max-w-3xl md:max-w-5xl lg:max-w-4xl xl:max-w-6xl">
        <div className="relative flex justify-between after:content-[''] after:w-full after:h-[1px] after:bg-dark/10 after:absolute after:-bottom-4 after:left-0">
          <ul className="flex">
            {cateData.map((cate) => {
              return (
                <motion.div
                  key={cate.id}
                  onHoverStart={() => setHoveredItem(cate.id)} // Bắt đầu hover
                  onHoverEnd={() => setHoveredItem(null)} // Kết thúc hover
                  className="relative group mx-4"
                >
                  <NavLink
                    to={cate.value}
                    className="flex items-center font-Noto"
                  >
                    {cate.name}
                    <MdNavigateNext className="mx-1 size-6 group-hover:rotate-90" />
                  </NavLink>

                  <div className=" w-full absolute top-6 left-0 h-6"></div>

                  {/* SubMenu, hidden by default, shown on hover */}
                  <motion.div
                    inherit="exit"
                    animate={hoveredItem === cate.id ? "enter" : "exit"} // Chỉ hiển thị submenu khi hover vào đúng item
                    variants={subMenuAnimate}
                    className="absolute top-10 grid w-[200px] h-[100px] left-0 bg-white shadow-lg border-solid border-2 rounded-lg z-10"
                  >
                    {cate.subMenu.map((submenu) => {
                      return (
                        <NavLink
                          key={submenu.id}
                          to={`/subcategory/${submenu.id}`}
                          className=" px-4 py-2 hover:bg-primary hover:text-white "
                        >
                          {submenu.name}
                        </NavLink>
                      );
                    })}
                  </motion.div>
                </motion.div>
              );
            })}
          </ul>

          <div>
            <NavLink to={`/products`} className="flex items-center">
              Xem ngay <GrFormNextLink />
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeProduct;
