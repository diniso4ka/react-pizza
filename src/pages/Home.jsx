import React from 'react'


import Categories from '../components/Categories/Categories'
import Sort from '../components/Sort/Sort'
import Skeleton from '../components/Pizza-block/Skeleton'
import PizzaBlock from '../components/Pizza-block/Pizza-block'


const Home = ({ items, isLoading, sortType, setSortType, setCategoryId, categoryId, searchValue }) => {

   const filtredItems = items.filter((el) => el.name.toLowerCase().includes(searchValue.toLowerCase()))


   return (
      <>
         <div className="content__top">
            <Categories
               value={categoryId}
               onCategoryClick={(index) => setCategoryId(index)}

            />
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
      </>
   )
}


export default Home

// sortType === 0?.sort((a, b) => a.price - b.price)