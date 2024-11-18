import React, { useEffect, useState } from "react";
import { GrFormNextLink } from "react-icons/gr";
import { MdNavigateNext } from "react-icons/md";
import { NavLink } from "react-router-dom";
import { cateData } from "../../../data/navItem";
import { motion } from "framer-motion";
import CartProduct from "../../../components/components/CartProduct";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../../../features/product/productSlice";
import { RootState, AppDispatch } from "../../../app/store";

const HomeProduct: React.FC = () => {
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);
  const dispatch: AppDispatch = useDispatch();
  const productState = useSelector((state: RootState) => state.product.product);

  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);

  const subMenuAnimate = {
    enter: {
      opacity: 1,
      rotateX: 0,
      transition: { duration: 0.5 },
      display: "grid",
    },
    exit: {
      opacity: 0,
      rotateX: -15,
      transition: { duration: 0.5 },
      display: "none",
    },
  };

  return (
    <div className="container h-auto bg-white rounded-md p-4 mx-auto max-w-full sm:max-w-3xl md:max-w-5xl lg:max-w-4xl xl:max-w-6xl mb-16">
      <div className="relative flex justify-between after:content-[''] after:w-full after:h-[1px] after:bg-dark/10 after:absolute after:-bottom-4 after:left-0">
        <ul className="flex">
          {cateData.map((cate) => (
            <motion.div
              key={cate.id}
              onHoverStart={() => setHoveredItem(cate.id)}
              onHoverEnd={() => setHoveredItem(null)}
              className="relative group mx-4"
            >
              <NavLink to={cate.value} className="flex items-center font-Noto">
                {cate.name}
                <MdNavigateNext className="mx-1 size-6 group-hover:rotate-90" />
              </NavLink>

              <motion.div
                initial="exit"
                animate={hoveredItem === cate.id ? "enter" : "exit"}
                variants={subMenuAnimate}
                className="absolute top-10 grid w-[200px] h-[100px] left-0 bg-white shadow-lg border-solid border-2 rounded-lg z-10"
              >
                {cate.subMenu.map((submenu) => (
                  <NavLink
                    key={submenu.id}
                    to={`/subcategory/${submenu.id}`}
                    className="px-4 py-2 hover:bg-primary hover:text-white"
                  >
                    {submenu.name}
                  </NavLink>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </ul>

        <div>
          <NavLink to={`/products`} className="flex items-center">
            Xem ngay <GrFormNextLink />
          </NavLink>
        </div>
      </div>

      <div className="my-20 grid grid-cols-3 gap-8 w-full">
        {productState && productState.length > 0 ? (
          productState.map((product) => (
            <CartProduct
              id={product._id}
              key={product._id}
              title={product.title}
              price={product.price}
              category={product.category}
              images={product.images}
            />
          ))
        ) : (
          <p>No products available.</p>
        )}
      </div>
    </div>
  );
};

export default HomeProduct;
