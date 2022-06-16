import './App.scss';



import Header from './components/Header/Header'
import Categories from './components/Categories/Categories'
import Sort from './components/Sort/Sort'
import PizzaBlock from './components/Pizza-block/Pizza-block'


import pizzas from './assets/pizzas.json'

function App() {




  const items = pizzas.map((item, index) => <PizzaBlock
    id={item.id}
    category={item.category}
    imageUrl={item.imageUrl}
    name={item.name}
    price={item.price}
    key={item.id}
  />)













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
            {items}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
