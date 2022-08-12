import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { act } from 'react-dom/test-utils'


export enum SortPropertyEnum {
   RATING_DESC = 'rating',
   RATING_ASC = '-rating',
   TITLE_DESC = 'title',
   TITLE_ASC = '-title',
   PRICE_DESC = 'price',
   PRICE_ASC = '-price',
}


export type SortType = {
   name: string;
   sortBy: SortPropertyEnum;
}


export interface FilterSliceState {
   categoryId: number;
   pageCount: number;
   searchValue: string;
   currentPage: number;
   sort: SortType;

}


const initialState: FilterSliceState = {
   categoryId: 0,
   pageCount: 1,
   searchValue: '',
   currentPage: 1,
   sort: {
      name: 'популярности',
      sortBy: SortPropertyEnum.RATING_ASC
   }
}

const filterSlice = createSlice({
   name: 'filters',
   initialState,
   reducers: {
      setCategoryId(state, action: PayloadAction<number>) {
         state.categoryId = action.payload

      },
      setSortItem(state, action: PayloadAction<SortType>) {
         state.sort = action.payload
      },
      setPageCount(state, action: PayloadAction<number>) {
         state.pageCount = action.payload

      },
      setFilters(state, action: PayloadAction<FilterSliceState>) {
         state.currentPage = Number(action.payload.currentPage)
         state.sort = action.payload.sort
         state.categoryId = Number(action.payload.categoryId)
      },
      setSearchValue(state, action: PayloadAction<string>) {
         state.searchValue = action.payload
      }
   }
})


export const { setCategoryId, setSortItem, setPageCount, setFilters, setSearchValue } = filterSlice.actions

export default filterSlice.reducer




