import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import productService from "./productService";

interface ProductState {
  _id: string | null;
  title: string | null;
  slug: string | null;
  description: string | null;
  price: string | null;
  category: string | null;
  brand: string | null;
  demoUrl: string | null;
  images: string | null;
}

interface InitialState {
  product: ProductState[];
  isError: boolean;
  isLoading: boolean;
  isSuccess: boolean;
  message: string | null;
}

const initialState: InitialState = {
  product: [],
  isError: false,
  isLoading: false,
  isSuccess: false,
  message: null,
};

// Fetch all products
export const getAllProducts = createAsyncThunk<
  ProductState[],
  void,
  { rejectValue: string }
>("product/getAll", async (thunkAPI) => {
  try {
    const products = await productService.getProduct();
    return products;
  } catch (error: any) {
    return thunkAPI.rejectWithValue(
      error.message || "Failed to fetch products"
    );
  }
});

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllProducts.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.isSuccess = false;
        state.message = null;
      })
      .addCase(
        getAllProducts.fulfilled,
        (state, action: PayloadAction<ProductState[]>) => {
          state.isLoading = false;
          state.isSuccess = true;
          state.product = action.payload;
        }
      )
      .addCase(
        getAllProducts.rejected,
        (state, action: PayloadAction<string | undefined>) => {
          state.isLoading = false;
          state.isError = true;
          state.message = action.payload || "Failed to fetch products";
        }
      );
  },
});

export default productSlice.reducer;
