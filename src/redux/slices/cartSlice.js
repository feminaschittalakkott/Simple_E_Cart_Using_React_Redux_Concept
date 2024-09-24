import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        cart: []
    },
    reducers: {
        addToCart(state, action) {
            const existing = state.cart.find(i => i.id == action.payload.id)
            if (existing) {
                existing.quantity += 1
                state.cart = state.cart.filter(i => i.id != action.payload.id)
                state.cart.push(existing)
                toast.success("Quantity Updated in Cart !!")
            }
            else {
                const product = action.payload
                product.quantity = 1
                state.cart.push(product)
                toast.success("Item Added to Cart !!")
            }
        },
        removeFromCart(state, action) {
            state.cart = state.cart.filter(i => i.id != action.payload)
            toast.success("Item Removed from Cart !!")
        },
        increaseQty(state, action) {
            const existing = state.cart.find(i => i.id == action.payload)
            existing.quantity++
        },
        decreaseQty(state, action){
            const existing = state.cart.find(i => i.id == action.payload)
            if(existing.quantity == 1){
                state.cart = state.cart.filter(i => i.id != action.payload)
            }
            else{
                existing.quantity--
            }
        },
        checkOut(state){
            state.cart = []
            toast.success("Cart Checked Out !!")
        }
    }
})

export default cartSlice.reducer
export const { addToCart, removeFromCart, increaseQty, decreaseQty, checkOut } = cartSlice.actions