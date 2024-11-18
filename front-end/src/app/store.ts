import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/user/userSlice";
import productReducer from "../features/product/productSlice";

// import incomeReducer from "../features/income/incomeSlice";
// import expenseReducer from "../features/expense/expenseSlice";
// import transactionReducer from "../features/transaction/transactionSlice";
// import cartReducer from "../features/cart/cartSlice";
// import productReducer from "../features/product/productSlice";
// import dashboardReducer from "../features/filter/filterSlice";
// import OverviewReducer from "../features/overview/overviewSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    product: productReducer,
    // cart: cartReducer,
    // dashboard: dashboardReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
