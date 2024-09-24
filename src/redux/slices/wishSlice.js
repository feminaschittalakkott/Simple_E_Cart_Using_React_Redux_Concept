import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const wishListSlice = createSlice({
    name: "wishlist",
    initialState: {
        items: []
    },
    reducers: {
        addToWishList(state, action) {
            const existing = state.items.find(i => i.id == action.payload.id)
            if (existing) {
                toast.warning("Already exists in your wishlist !")
            }
            else {
                state.items.push(action.payload)
                toast.success("Item added to WishList !")
            }
        },
        removeFromWishList(state, action) {
            state.items = state.items.filter(i => i.id != action.payload)
        }
    }
})

export default wishListSlice.reducer
export const { addToWishList, removeFromWishList } = wishListSlice.actions
