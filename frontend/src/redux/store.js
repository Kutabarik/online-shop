import {configureStore} from "@reduxjs/toolkit";

import product from './product/product.slice'
import cart from './cart/cart.slice'

export const store = configureStore({
    reducer: {
        product,
        cart
    },
})