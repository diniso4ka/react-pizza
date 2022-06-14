import './App.scss';



import Header from './components/Header/Header'
import Categories from './components/Categories/Categories'
import Sort from './components/Sort/Sort'
import PizzaBlock from './components/Pizza-block/Pizza-block'

function App() {

  const items = [{ title: 'Мексиканская', price: '649' },
  { title: 'Карбонара', price: '649' },
  { title: 'Четыре сыра', price: '549' },
  { title: 'Пепперони фреш', price: '649' },
  { title: 'Немецкая', price: '699' },
  { title: 'Пепперони', price: '639' },
  { title: 'Ветчина и сыр', price: '499' },
  ]

  const renderItems = items.map((item, index) => <PizzaBlock
    title={item.title}
    price={item.price}
    key={index}
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
            {renderItems}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
