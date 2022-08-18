import { Sort } from '../filter/types'

export type FetchPizzasTypes = Record<string, string>

export type SearchPizzaParams = {
   order: string;
   sortBy: Sort;
   category: string;
   currentPage: string;
   search: string;
}

export type Pizza = {
   id: string,
   name: string,
   price: number,
   imageUrl: string,
   type: string,
   size: number,
   count: number,
}


export enum Status {
   LOADING = 'loading',
   SUCCESS = 'success',
   ERROR = 'error'
}


export interface PizzaSliceState {
   items: Pizza[];
   status: Status
}