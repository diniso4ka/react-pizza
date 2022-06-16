import './Categories.scss'
import React from 'react'



const Categories = () => {

  const [activeIndex, setActiveIndex] = React.useState(0)
  const onCategoryClick = (index) => {
    setActiveIndex(Number(index))
  }




  const categories = [
    'Все',
    'Мясные',
    'Вегетарианская',
    'Гриль',
    'Острые',
    'Закрытые'
  ]

  const categoriesElements = categories
    .map((element, index) =>
      <li onClick={() => onCategoryClick(index)} className={activeIndex === index ? 'active' : ''} key={element}>
        {element}
      </ li>)

  return (
    <div className="categories">
      <ul>
        {categoriesElements}
      </ul>
    </div>

  )
}

export default Categories