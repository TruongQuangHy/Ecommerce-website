import React, { useState } from "react";
import { Product } from "../../../types/product";
import { useAppDispatch } from "../../../app/hooks";
import { WishListItem } from "../../../types/wishList";
import { Link } from "react-router-dom";

const CartProduct: React.FC<Product> = ({
  id,
  title,
  price,
  images,
  category,
}) => {
  const dispatch = useAppDispatch();
  const [isLoadingProduct, setIsLoadingProduct] = useState(false);

  const addToWishListHandler = () => {
    setIsLoadingProduct(true);

    const cartProduct: WishListItem = {
      product: {
        id,
        title,
        price,
        images,
        category,
      },
    };

    dispatch(addToWishListHandler(cartProduct)).then(() => {
      setIsLoadingProduct(false);
    });
  };

  return (
    <div
      id={title}
      tabIndex={id}
      className="border border-solid rounded-lg border-black bg-black overflow-hidden group"
    >
      <div className="relative h-80 overflow-hidden">
        <img
          src={images}
          alt={title}
          className="w-full h-auto object-cover rounded-lg transform transition-transform duration-1000 ease-in-out group-hover:-translate-y-1/2 group-hover:duration-[4000ms]"
        />
        <div className="absolute transform flex bg-dark/40 w-full h-full top-0 justify-around items-end opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <Link
            to={`/products/${String(id)}`}
            className="w-28 h-9 text-center rounded-md leading-9 font-Noto font-semibold mb-8 text-white bg-white/20 border-solid border-[2px]"
          >
            Xem thêm
          </Link>
          <Link
            to={`/products/${String(id)}`}
            className="w-28 h-9 text-center rounded-md leading-9 font-Noto font-semibold mb-8 text-white bg-primarySec"
          >
            Demo
          </Link>
        </div>
      </div>
      <div className="m-3">
        <h1 className="text-white">{title}</h1>
        <p className="text-gray-300">${price}</p>
        <ul className="flex gap-3 flex-wrap">
          {[...Array(6)].map((_, i) => (
            <li key={i} className="bg-white rounded-md px-2">
              <a href="#" className="text-textColor">
                Dịch vụ
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CartProduct;
