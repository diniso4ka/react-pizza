import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'
import { Sort } from '../filter/types'
import axios from 'axios'
import { FetchPizzasTypes, PizzaSliceState, Status, Pizza } from './types'




export const fetchPizzas = createAsyncThunk('pizza/fetchPizzasStatus', async (params: FetchPizzasTypes) => {
   const { order, sortBy, category, currentPage } = params
   const { data } = await axios.get<Pizza[]>(`https://62ab2c0fa62365888bd68a9b.mockapi.io/items?page=${currentPage}&limit=8&${category}&sortBy=${sortBy}&order=${order}`)
   return data
})




const initialState: PizzaSliceState = {
   items: [],
   status: Status.LOADING, //loading | success | error
}

const pizzaSlice = createSlice({
   name: 'pizza',
   initialState,
   reducers: {
      setItems(state, action) {
         state.items = action.payload
      }
   },
   extraReducers: (builder) => {
      builder.addCase(fetchPizzas.pending, (state) => {
         state.status = Status.LOADING
         state.items = []
      })
      builder.addCase(fetchPizzas.fulfilled, (state, action: PayloadAction<Pizza[]>) => {
         state.items = action.payload
         state.status = Status.SUCCESS
      })
      builder.addCase(fetchPizzas.rejected, (state, action) => {
         state.status = Status.ERROR
         state.items = []
      })
   }

})


export const { setItems } = pizzaSlice.actions

export default pizzaSlice.reducer