import './App.scss';
import React from 'react';
import axios from 'axios';



import Header from './components/Header/Header'
import Categories from './components/Categories/Categories'
import Sort from './components/Sort/Sort'
import PizzaBlock from './components/Pizza-block/Pizza-block'
import Skeleton from './components/Pizza-block/Skeleton';



function App() {
  const [items, setItems] = React.useState([])
  const [isLoading, setIsLoading] = React.useState(true)




  React.useEffect(() => {
    async function fetchData() {
      const itemsResponse = await axios.get('https://62ab2c0fa62365888bd68a9b.mockapi.io/items')
      setItems(itemsResponse.data)

      await setIsLoading(false)
    }
    fetchData()
  }, [])




















  return (
    <div className='wrapper'>
      <Header />
      <div className="content">
        <div className="container">
          <div className="content__top">
            <Categories />
            <Sort />
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
        </div>
      </div>
    </div>
  );
}

export default App;
