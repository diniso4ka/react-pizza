import './App.scss';
import React, { useState } from 'react';
import axios from 'axios';
import qs from 'qs'
import { Route, Routes, useNavigate } from 'react-router-dom';


import { setItems, fetchPizzas } from './redux/slices/pizzaSlice';
import { setFilters } from './redux/slices/filterSlice';
import { useSelector, useDispatch } from 'react-redux';


import Home from './pages/Home';
import Cart from './pages/Cart';
import NotFound from './pages/NotFound';
import Header from './components/Header/Header'
import { sortList } from './components/Sort/Sort';




function App() {

  const categoryId = useSelector((state) => state.filter.categoryId)
  const sortItem = useSelector((state) => state.filter.sort)
  const currentPage = useSelector((state) => state.filter.pageCount)
  const { items } = useSelector((state) => state.pizza)
  const navigate = useNavigate()
  const dispatch = useDispatch()


  const isSearch = React.useRef(false)
  const isMounted = React.useRef(false)

  const getPizzas = () => {
    const order = sortItem.sortProperty.includes('-') ? 'asc' : 'desc'
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
      const params = qs.parse(window.location.search.substring(1))
      const sort = sortList.find(obj => obj.sortProperty === params.sortProperty)
      dispatch(setFilters({
        ...params,
        sort,
      }))
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
