import './App.scss';



import Header from './components/Header/Header'
import Categories from './components/Categories/Categories'
import Sort from './components/Sort/Sort'

function App() {
  return (
    <div class='wrapper'>
      <Header />
      <div class="content">
        <div class="container">
          <div class="content__top">
            <Categories />
            <Sort />
          </div>
          <h2 class="content__title">Все пиццы</h2>
          <div class="content__items">

          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
