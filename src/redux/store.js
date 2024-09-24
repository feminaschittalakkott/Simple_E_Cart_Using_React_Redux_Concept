import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./slices/product_slice";
import wishSlice from "./slices/wishSlice";
import cartSlice from "./slices/cartSlice";

const productStore = configureStore({
    reducer: {
        productReducer: productSlice,
        wishReducer: wishSlice,
        cartReducer: cartSlice
    }
})

export default productStore