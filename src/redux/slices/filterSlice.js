import { createSlice } from '@reduxjs/toolkit'
import { act } from 'react-dom/test-utils'


const initialState = {
   categoryId: 0,
   pageCount: 1,
   searchValue: '',
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

      },
      setFilters(state, action) {
         state.currentPage = Number(action.payload.currentPage)
         state.sort = action.payload.sort
         state.categoryId = Number(action.payload.categoryId)
      },
      setSearchValue(state, action) {
         state.searchValue = action.payload
      }
   }
})


export const { setCategoryId, setSortItem, setPageCount, setFilters, setSearchValue } = filterSlice.actions

export default filterSlice.reducer




