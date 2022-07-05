import React from 'react'
import ReactPaginate from 'react-paginate'





import Categories from '../components/Categories/Categories'
import Sort from '../components/Sort/Sort'
import Skeleton from '../components/Pizza-block/Skeleton'
import PizzaBlock from '../components/Pizza-block/Pizza-block'
import Pagination from '../components/Pagination/Pagination'


const Home = ({ items, isLoading, sortType, setSortType, searchValue, setCurrentPage }) => {





   const filtredItems = items.filter((el) => el.name.toLowerCase().includes(searchValue.toLowerCase()))

   return (
      <>
         <div className="content__top">
            <Categories />
            <Sort
               onSortClick={(obj) => setSortType(obj)}
               value={sortType}

            />
         </div>
         <h2 className="content__title">{searchValue ? `Поиск: ${searchValue}` : 'Все пиццы'}</h2>
         <div className="content__items">

            {isLoading ?
               [... new Array(9)].map((_, index) => <Skeleton key={index} />) :
               filtredItems.map((item, index) => < PizzaBlock
                  key={index}
                  {...item}
               />)}
         </div>
         <Pagination

            onChangePage={(number => setCurrentPage(number))} />
      </>
   )
}


export default Home

