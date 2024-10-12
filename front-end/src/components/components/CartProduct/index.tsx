import React, { useState } from "react";
import { Product } from "../../../types/product";
import { useAppDispatch } from "../../../app/hooks";
import { WishListItem } from "../../../types/wishList";
import { Link } from "react-router-dom";

interface ProductCartProps extends Product {
  key: number;
}

const CartProduct: React.FC<ProductCartProps> = ({
  id,
  key,
  title,
  price,
  category,
  description,
  image,
}) => {
  const dispatch = useAppDispatch();
  const [isLoadingProduct, setIsLoadingProduct] = useState(false);

  const addToWishListHandler = () => {
    setIsLoadingProduct(true);

    const cartProduct: WishListItem = {
      product: {
        id: id,
        title: title,
        price: price,
        image: image,
        description: description,
        category: category,
      },
    };

    dispatch(addToWishList(cartProduct)).then(() => {
      setIsLoadingProduct(false);
    });
  };
  return (
    <div>
      <div>
        <div>
          <Link to={`/products/${String(id)}`}></Link>
        </div>
      </div>
    </div>
  );
};

export default CartProduct;
