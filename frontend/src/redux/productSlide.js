import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-hot-toast";

const initialState = {
    productList : [],
    cartItem : []
}

export const productSlice = createSlice({
    name: "product",
    initialState,
    reducers : {
        setDataProduct : (state,action)=>{
                state.productList = [...action.payload]
        },
        addCartItem : (state,action)=>{
            const { _id, price } = action.payload;
            const existingItem = state.cartItem.find(item => item._id === _id);

            if (existingItem) {
                const updatedQuantity = existingItem.qty + 1;
                const updatedTotal = price * updatedQuantity;

                state.cartItem = state.cartItem.map(item =>item._id === _id ? { ...item, qty: updatedQuantity, total: updatedTotal } : item);
            } 
            else {
                toast("Item added successfully");
                const total = price;
                state.cartItem = [...state.cartItem, { ...action.payload, qty: 1, total }];
            }
        },
        deleteCartItem : (state,action)=>{
            toast("One item deleted")
            const index = state.cartItem.findIndex((el)=>el._id === action.payload)
            state.cartItem.splice(index,1)
            console.log(index); 
        },
        increaseQty : (state,action)=>{
            const index = state.cartItem.findIndex((el)=>el._id === action.payload)
            let qty = state.cartItem[index].qty
            const qtyInc = ++qty
            state.cartItem[index].qty = qtyInc

            const price = state.cartItem[index].price
            const total = price * qtyInc

            state.cartItem[index].total = total
        },
        decreaseQty : (state,action)=>{
            const index = state.cartItem.findIndex((el)=>el._id === action.payload)
            let qty = state.cartItem[index].qty
            if(qty > 1){
                const qtyDec = --qty
                state.cartItem[index].qty = qtyDec

                const price = state.cartItem[index].price
                const total = price * qtyDec

                state.cartItem[index].total = total
            }
            else{
                toast("One item deleted")
                state.cartItem.splice(index,1)
            }
        }
    }
})

export const {setDataProduct, addCartItem, deleteCartItem, increaseQty, decreaseQty} = productSlice.actions

export default productSlice.reducer



