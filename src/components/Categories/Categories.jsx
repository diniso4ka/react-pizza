import './Categories.scss'
import React from 'react'



const Categories = ({ value, onCategoryClick }) => {






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
      <li onClick={() => onCategoryClick(index)}
        className={value === index ? 'active' : ''}
        key={index}>
        {element}
      </li>)

  return (
    <div className="categories">
      <ul>
        {categoriesElements}
      </ul>
    </div>

  )
}

export default Categories