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
const ProductItem: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();

  const productState = useSelector((state: RootState) => state.product.product);

  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);
  return (
    <>
      <div className="container p-4 mx-auto max-w-full sm:max-w-3xl md:max-w-5xl lg:max-w-4xl xl:max-w-6xl">
        <div className=" bg-white py-12">
          <div className="grid justify-items-center pb-12">
            <h1 className="font-Noto text-3xl font-bold">Trend Item</h1>
            <ul className="flex my-6 gap-7">
              <li>
                <a
                  href=""
                  className="font-Noto text-lg hover:font-bold duration-300 ease-in-out"
                >
                  Doanh Nghiệp
                </a>
              </li>
              <li>
                <a
                  href=""
                  className="font-Noto text-lg hover:font-bold duration-300 ease-in-out"
                >
                  Cua hang
                </a>
              </li>
              <li>
                <a
                  href=""
                  className="font-Noto text-lg hover:font-bold duration-300 ease-in-out"
                >
                  Sang tạo
                </a>
              </li>
              <li>
                <a
                  href=""
                  className="font-Noto text-lg hover:font-bold duration-300 ease-in-out"
                >
                  Cong dong
                </a>
              </li>
              <li>
                <a
                  href=""
                  className="font-Noto text-lg hover:font-bold duration-300 ease-in-out"
                >
                  Blog
                </a>
              </li>
            </ul>
          </div>
          <div className="grid grid-cols-3 gap-5 w-full px-4">
            {productState && productState.length > 0 ? (
              productState.map((product) => (
                <CartProduct
                  id={product._id}
                  key={product._id}
                  title={product.title}
                  price={product.price}
                  category={product.category}
                  images={product.images}
                  className="w-1/4"
                />
              ))
            ) : (
              <p>No products available.</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductItem;
