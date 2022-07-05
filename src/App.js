import './App.scss';
import React, { useState } from 'react';
import axios from 'axios';
import { Route, Routes } from 'react-router-dom';

import { useSelector } from 'react-redux/es/hooks/useSelector';





import Home from './pages/Home';
import Cart from './pages/Cart';
import NotFound from './pages/NotFound';
import Header from './components/Header/Header'




function App() {
  const [items, setItems] = React.useState([])
  const [isLoading, setIsLoading] = React.useState(true)
  const [currentPage, setCurrentPage] = React.useState(1)
  const [searchValue, setSearchValue] = React.useState('')
  const categoryId = useSelector((state) => state.filter.categoryId)
  const sortItem = useSelector((state) => state.filter.sort)









  React.useEffect(() => {

    const order = sortItem.sortProperty.includes('-') ? 'asc' : 'desc'
    const sortBy = sortItem.sortProperty.replace('-', '')
    const category = categoryId > 0 ? `category=${categoryId}` : ''

    async function fetchData() {
      setIsLoading(true)
      const itemsResponse = await axios.get(`https://62ab2c0fa62365888bd68a9b.mockapi.io/items?page=${currentPage}&limit=8&${category}&sortBy=${sortBy}&order=${order}`)
      setItems(itemsResponse.data)


      await setIsLoading(false)
    }
    window.scrollTo(0, 0)
    fetchData()

  }, [categoryId, sortItem, currentPage])


  return (
    <div className='wrapper'>
      <Header
        setSearchValue={setSearchValue}
        searchValue={searchValue} />
      <div className="content">
        <div className="container">
          <Routes>
            <Route path='/' element={<Home
              isLoading={isLoading}
              items={items}
              setSearchValue={setSearchValue}
              searchValue={searchValue}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}

            />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
