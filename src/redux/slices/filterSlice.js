import { createSlice } from '@reduxjs/toolkit'
import { act } from 'react-dom/test-utils'


const initialState = {
   categoryId: 0,
   pageCount: 1,
   sort: {
      name: 'популярности',
      sortProperty: 'rating'
   }
}

const filterSlice = createSlice({
   name: 'filters',
   initialState,
   reducers: {
      setCategoryId(state, action) {
         state.categoryId = action.payload
      },
      setSortItem(state, action) {
         state.sort = action.payload
      },
      setPageCount(state, action) {
         state.pageCount = action.payload
      }
   }
})


export const { setCategoryId, setSortItem, setPageCount } = filterSlice.actions

export default filterSlice.reducer




