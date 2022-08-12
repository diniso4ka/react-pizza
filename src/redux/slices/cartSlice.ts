import { RootState } from './../store';
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { act } from 'react-dom/test-utils'



export type CartItem = {
   id: string,
   name: string,
   price: number,
   imageUrl: string,
   type: string,
   size: number,
   count: number,
}


interface CartSliceState {
   totalPrice: number;
   count: number;
   items: CartItem[]
}


const initialState: CartSliceState = {
   items: [],
   count: 0,
   totalPrice: 0,
}

const cartSlice = createSlice({
   name: 'cart',
   initialState,
   reducers: {
      addItem(state, action: PayloadAction<CartItem>) {
         const findItem = state.items.find(obj => obj.id === action.payload.id)
         if (findItem) {
            findItem.count++
         } else {
            state.items.push({
               ...action.payload,
               count: 1,
            })

         }
         state.totalPrice = state.items.reduce((sum, obj) => (Number(obj.price) * Number(obj.count)) + sum, 0)
      },
      minusItem(state, action: PayloadAction<CartItem>) {
         const findItem = state.items.find(obj => obj.id === action.payload.id)
         if (findItem) {
            findItem.count--
            console.log(action.payload)
            state.totalPrice = state.totalPrice - action.payload.price
         }
      },
      removeItem(state, action: PayloadAction<CartItem>) {
         state.items = state.items.filter(obj => obj.id !== action.payload.id)
         state.totalPrice = state.totalPrice - action.payload.price * action.payload.count

      },
      clearItems(state, action) {
         state.items = []
         state.totalPrice = 0

      }
   }
})

export const cartSelector = (state: RootState) => state.cart
export const totalPriceSelector = (state: RootState) => state.cart.totalPrice
export const cartItemByIdSelector = (id: string) => (state: RootState) => state.cart.items.find((obj) => obj.id === id)

export const { addItem, removeItem, clearItems, minusItem } = cartSlice.actions

export default cartSlice.reducer




