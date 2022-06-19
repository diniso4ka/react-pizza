import './App.scss';
import React from 'react';
import axios from 'axios';
import { Route, Routes } from 'react-router-dom';





import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Header from './components/Header/Header'




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
          <Routes>
            <Route path='/NotFound' element={<NotFound />} />
            <Route path='/' element={<Home
              isLoading={isLoading}
              items={items}
            />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
