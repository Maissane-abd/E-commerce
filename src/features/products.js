import {createSlice} from "@reduxjs/toolkit"

const initialState = {
    items : undefined
}

export const products = createSlice ({
    name:"products",
    initialState,
    reducers: {
        addProducts: (state, action) => {
            state.items = action.payload
        }
    },
    extreReducers: {
        ["cart/createCartItem"]:(state, action)=>{
            state.items.find(el => el.id === action.payload.id).picked = true
        },
        ["cart/deleteFromCart"]: (state, action) => {
          state.items.find(el => el.id === action.payload).picked = false
        }
    }
})

export function getProductsList(action) {
    return function(dispatch, getState){
        fetch("/data/inventory.json")
        .then(response => response.json())
        .then(data => dispatch(addProducts(data.products)))
    }
}

export const {addProducts} = products.actions
export default products.reducer