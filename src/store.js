import {configureStore} from "@reduxjs/toolkit"
import products  from "./features/products.js"
import cart from "./features/cart.js"


export const store = configureStore({
    reducer: {
        products,
        cart
    }
})