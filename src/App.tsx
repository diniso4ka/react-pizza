import './App.scss';
import qs from 'qs'
import { Route, Routes, useNavigate } from 'react-router-dom';
import React from 'react';


import { fetchPizzas, SearchPizzaParams } from './redux/slices/pizzaSlice';
import { setFilters } from './redux/slices/filter/filterSlice';
import { useSelector } from 'react-redux';
import { useAppDispatch } from './redux/store'


import Home from './pages/Home';
import Cart from './pages/Cart';
import NotFound from './pages/NotFound';
import Header from './components/Header/Header'
import { sortList } from './components/Sort/Sort';




const App = () => {

  const categoryId = useSelector((state: any) => state.filter.categoryId)
  const sortItem = useSelector((state: any) => state.filter.sort)
  const currentPage = useSelector((state: any) => state.filter.pageCount)
  const { items } = useSelector((state: any) => state.pizza)
  const navigate = useNavigate()
  const dispatch = useAppDispatch()


  const isSearch = React.useRef(false)
  const isMounted = React.useRef(false)

  const getPizzas = () => {
    const order = sortItem.sortProperty.includes('-') ? 'ASC' : 'DESC'
    const sortBy = sortItem.sortProperty.replace('-', '')
    const category = categoryId > 0 ? `category=${categoryId}` : ''

    dispatch(fetchPizzas({
      order,
      sortBy,
      category,
      currentPage
    }))
  }








  React.useEffect(() => {
    if (window.location.search) {
      const params = (qs.parse(window.location.search.substring(1)) as unknown) as SearchPizzaParams
      const sort = sortList.find((obj) => obj.sortProperty === params.sortBy);
      if (sort) {
        params.sortBy = sort
      }
      dispatch(setFilters({
        categoryId: Number(params.category),
        searchValue: params.search,
        pageCount: Number(params.currentPage),
        currentPage: Number(params.currentPage),
        sort: sort ? sort : sortList[0],
      }
      ))
      isSearch.current = true
    }


  }, [])


  React.useEffect(() => {
    window.scrollTo(0, 0)
    if (!isSearch.current) {
      getPizzas()
    }
    isSearch.current = false


  }, [categoryId, sortItem, currentPage])


  React.useEffect(() => {
    if (isMounted.current) {
      const queryString = qs.stringify({
        sortProperty: sortItem.sortProperty,
        categoryId,
        currentPage

      })
      navigate(`?${queryString}`)
    }
    isMounted.current = true
  }, [categoryId, sortItem, currentPage])


  return (
    <div className='wrapper'>
      <Header

      />
      <div className="content">
        <div className="container">
          <Routes>
            <Route path='/' element={<Home
              items={items}

              currentPage={currentPage}
            />} />
            <Route path='/cart' element={<Cart
              {...items}
            />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
