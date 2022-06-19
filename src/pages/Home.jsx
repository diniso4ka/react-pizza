import React from 'react'


import Categories from '../components/Categories/Categories'
import Sort from '../components/Sort/Sort'
import Skeleton from '../components/Pizza-block/Skeleton'
import PizzaBlock from '../components/Pizza-block/Pizza-block'


const Home = ({ items, isLoading, activeIndex, setActiveIndex, sortType, setSortType }) => {
   return (
      <>
         <div className="content__top">
            <Categories
               activeIndex={activeIndex}
               setActiveIndex={setActiveIndex}
            />
            <Sort
               sortType={sortType}
               setSortType={setSortType}
            />
         </div>
         <h2 className="content__title">Все пиццы</h2>
         <div className="content__items">

            {isLoading ?
               [... new Array(9)].map((_, index) => <Skeleton key={index} />) :
               items.map((item, index) => <PizzaBlock
                  key={index}
                  {...item}
               />)}
         </div>
      </>
   )
}


export default Home