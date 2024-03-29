import React from 'react'
import ReactPaginate from 'react-paginate'


import { useDispatch, useSelector } from 'react-redux';
import { setPageCount } from '../redux/slices/filter/filterSlice';


import Categories from '../components/Categories/Categories'
import Sort from '../components/Sort/Sort'
import Skeleton from '../components/Pizza-block/Skeleton'
import PizzaBlock from '../components/Pizza-block/Pizza-block'
import Pagination from '../components/Pagination/Pagination'
import ContentError from '../components/ContentError';
import { CartItem } from '../redux/slices/cartSlice';


type HomeProps = {
   sortType: string;
   items: CartItem[];
   currentPage: number;

}


const Home: React.FC<HomeProps> = ({ items, currentPage }) => {



   const { status } = useSelector((state: any) => state.pizza)
   const dispatch = useDispatch()
   const onChangeCountPage = (num) => {
      dispatch(setPageCount(num))
   }

   const { searchValue } = useSelector((state: any) => state.filter)
   const filtredItems = items.filter((el) => el.name.toLowerCase().includes(searchValue.toLowerCase()))

   return (
      <>
         <div className="content__top">
            <Categories />
            <Sort
            />
         </div>
         <h2 className="content__title">{searchValue ? `Поиск: ${searchValue}` : 'Все пиццы'}</h2>
         {status === 'error' ? <ContentError
            title={'Произошла ошибка'}
            firstString={'К сожалению, не удалось получить питсы.'}
            secondString={'Попробуйте повторить попытку позже.'}
            imageUrl={'https://github.com/Archakov06/react-pizza-v2/blob/master/src/assets/img/empty-cart.png?raw=true'}
         /> :
            <div className="content__items">

               {status === 'loading' ?
                  [... new Array(9)].map((_, index) => <Skeleton key={index} />) :
                  filtredItems.map((item, index) => <PizzaBlock
                     key={index}
                     sizes={item.size}
                     types={item.type}
                     {...item}
                  />)}
            </div>}
         <Pagination
            currentPage={currentPage}
            onChangePage={(number => onChangeCountPage(number))} />
      </>
   )
}


export default Home

