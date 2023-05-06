import {createSlice} from '@reduxjs/toolkit'
import {fetchProducts} from "./product.action";

const initialState = {
    items: [],
    meta: {
        total: 0,
        currentPage: 1,
        from: 1,
        lastPage: null
    }
}

const ProductSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchProducts.fulfilled, (state, action) => {
            state.items = action.payload.data;
            const { total, currentPage, from, lastPage } = action.payload.meta;
            state.meta = action.payload.meta;
        });
        builder.addCase(fetchProducts.pending, (state) => {
            state.items = [];
        });
        builder.addCase(fetchProducts.rejected, (state) => {
            state.items = [];
        })
    }
})

export default ProductSlice.reducer;