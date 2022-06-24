import './App.scss';
import React from 'react';
import axios from 'axios';
import { Route, Routes } from 'react-router-dom';





import Home from './pages/Home';
import Cart from './pages/Cart';
import NotFound from './pages/NotFound';
import Header from './components/Header/Header'




function App() {
  const [items, setItems] = React.useState([])
  const [isLoading, setIsLoading] = React.useState(true)
  const [categoryId, setCategoryId] = React.useState(0)
  const [sortType, setSortType] = React.useState({ name: 'популярности', sortProperty: 'rating' })
  const [searchValue, setSearchValue] = React.useState('')




  React.useEffect(() => {

    const order = sortType.sortProperty.includes('-') ? 'asc' : 'desc'
    const sortBy = sortType.sortProperty.replace('-', '')
    const category = categoryId > 0 ? `category=${categoryId}` : ''

    async function fetchData() {
      setIsLoading(true)
      const itemsResponse = await axios.get(`https://62ab2c0fa62365888bd68a9b.mockapi.io/items?${category}&sortBy=${sortBy}&order=${order}`)
      setItems(itemsResponse.data)


      await setIsLoading(false)
    }
    window.scrollTo(0, 0)
    fetchData()

  }, [categoryId, sortType])





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
              categoryId={categoryId}
              setCategoryId={setCategoryId}
              sortType={sortType}
              setSortType={setSortType}
              setSearchValue={setSearchValue}
              searchValue={searchValue}

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
