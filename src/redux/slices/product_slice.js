import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProductThunk = createAsyncThunk('products/fetchProductThunk', async()=>{
    const prods = await axios.get('https://dummyjson.com/products')
    console.log(prods.data)
    localStorage.setItem("products", JSON.stringify(prods.data))
    return prods.data.products
})

const productSlice = createSlice({
    name: "products",
    initialState: {
        products: [],
        loading: false,
        error: "",
        productsPerPage: 10,
        currentPage: 1
    },
    reducers: {
        nextPage(state, action){
            state.currentPage++
        },
        prevPage(state, action){
            state.currentPage--
        },
        searchWithKey(state, action){
            if(action.payload){
                state.products = state.products.filter(i=>i.title.toLowerCase().includes(action.payload.toLowerCase()))
            }
        }
    },
    extraReducers: (builder)=>{
        builder.addCase(fetchProductThunk.pending, (state, action)=>{
            state.loading = true
        }),
        builder.addCase(fetchProductThunk.fulfilled, (state, action)=>{
            state.loading = false
            state.products = action.payload
        }),
        builder.addCase(fetchProductThunk.rejected, (state, action)=>{
            state.loading = false
            state.products = []
            state.error = "API Request Failed !!!"
        })
    }
})

export default productSlice.reducer
export const{ nextPage, prevPage, searchWithKey  } = productSlice.actions
