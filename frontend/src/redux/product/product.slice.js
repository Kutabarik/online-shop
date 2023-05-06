import {createSlice} from '@reduxjs/toolkit'
import {fetchProducts} from "./product.action";

const initialState = {
    items: [],
    meta: {
        total: 0,
        currentPage: 1,
        from: 1,
        lastPage: null
    },
    status: "loading"
}

const ProductSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchProducts.fulfilled, (state, action) => {
            state.items = action.payload.data;
            state.meta = action.payload.meta;
            state.status = "fulfilled"
        });
        builder.addCase(fetchProducts.pending, (state) => {
            state.items = [];
            state.status = "loading"
        });
        builder.addCase(fetchProducts.rejected, (state) => {
            state.items = [];
            state.status = "error"
        })
    }
})

export default ProductSlice.reducer;