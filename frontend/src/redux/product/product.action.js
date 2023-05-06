import {createAsyncThunk} from '@reduxjs/toolkit';
import productApi from "../../api/product.api";

export const fetchProducts = createAsyncThunk('product/fetchAll', async ({page}, {rejectWithValue}) => {
    try {
        const {data} = await productApi.getAllProducts(page)
        return data;
    } catch (err) {
        return rejectWithValue({});
    }
})