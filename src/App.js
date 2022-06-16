import './App.scss';
import React from 'react';
import axios from 'axios';



import Header from './components/Header/Header'
import Categories from './components/Categories/Categories'
import Sort from './components/Sort/Sort'
import PizzaBlock from './components/Pizza-block/Pizza-block'


import pizzas from './assets/pizzas.json'

function App() {

  const [items, setItems] = React.useState([])





  React.useEffect(() => {
    fetch('https://62ab2c0fa62365888bd68a9b.mockapi.io/items')
      .then((res) => {
        return res.json();
      }).then((arr) => {
        setItems(arr)
      })
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
            {items.map((item, index) => <PizzaBlock
              {...item}
            />)}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
