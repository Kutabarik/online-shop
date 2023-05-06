import {createAsyncThunk} from '@reduxjs/toolkit';
import productApi from "../../api/product.api";

export const fetchProducts = createAsyncThunk('product/fetchAll', async ({page, categoryId}, {rejectWithValue}) => {
    try {
        const {data} = await productApi.getAllProducts({
            page,
            categoryId,
        })
        return data;
    } catch (err) {
        return rejectWithValue({});
    }
})