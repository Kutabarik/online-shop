import {configureStore} from "@reduxjs/toolkit";

import product from './product/product.slice'

export const store = configureStore({
    reducer: {
        product
    },
})