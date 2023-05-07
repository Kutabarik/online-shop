import {createSlice} from "@reduxjs/toolkit";
import getCartFromLocalStorage from "../../utils/getCartFromLocalStorage";
import calcTotalPrice from "../../utils/calcTotalPrice";

const initialState = getCartFromLocalStorage();

const CartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addProduct: (state, action) => {
            const findItem = state.items.find(item => item.id === action.payload.id);

            if (findItem) {
                findItem.count += 1;
            } else {
                state.items.push({
                    ...action.payload,
                    count: 1,
                })
            }

            state.totalPrice = calcTotalPrice(state.items);

            localStorage.setItem("cart", JSON.stringify(state));
        },
        minusItem: (state, action) => {
            const findItem = state.items.find(item => item.id === action.payload.id);

            if (findItem) {
                findItem.count--;
            }

            state.totalPrice = calcTotalPrice(state.items);
        },

        removeItem: (state, action) => {
            state.items = state.items.filter(item => item.id !== action.payload.id);
            state.totalPrice = calcTotalPrice(state.items);
        },

        removeAllItems: (state) => {
            localStorage.removeItem("cart");
            state.items.length = 0;
            state.totalPrice = 0;
        }
    }
})

export const {addProduct, minusItem, removeItem, removeAllItems} = CartSlice.actions;

export default CartSlice.reducer;