// src/services/product.ts
import axios from "axios";
import { base_url } from "../../utils/base_url";
import { Product } from "../../types/product";

const getProduct = async (): Promise<Product[]> => {
  const response = await axios.get<Product[]>(`${base_url}product/`);
  return response.data;
};

const productService = {
  getProduct,
};

export default productService;
