import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'
import { Sort } from './filter/types'
import axios from 'axios'


type FetchPizzasTypes = Record<string, string>

export type SearchPizzaParams = {
   order: string;
   sortBy: Sort;
   category: string;
   currentPage: string;
   search: string;
}

export const fetchPizzas = createAsyncThunk('pizza/fetchPizzasStatus', async (params: FetchPizzasTypes) => {
   const { order, sortBy, category, currentPage } = params
   const { data } = await axios.get<Pizza[]>(`https://62ab2c0fa62365888bd68a9b.mockapi.io/items?page=${currentPage}&limit=8&${category}&sortBy=${sortBy}&order=${order}`)
   return data
})

type Pizza = {
   id: string,
   name: string,
   price: number,
   imageUrl: string,
   type: string,
   size: number,
   count: number,
}


enum Status {
   LOADING = 'loading',
   SUCCESS = 'success',
   ERROR = 'error'
}


interface PizzaSliceState {
   items: Pizza[];
   status: Status
}


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