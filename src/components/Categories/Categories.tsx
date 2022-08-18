import './Categories.scss'
import React from 'react'


import { useSelector, useDispatch } from 'react-redux/es/exports'
import { setCategoryId } from '../../redux/slices/filter/filterSlice'



const Categories: React.FC = () => {

  const categories = [
    'Все',
    'Мясные',
    'Вегетарианская',
    'Гриль',
    'Острые',
    'Закрытые'
  ]

  const dispatch = useDispatch()
  const categoryId = useSelector((state: any) => state.filter.categoryId)


  const onChangeCategory = (id) => {
    dispatch(setCategoryId(id))
  }



  const categoriesElements = categories
    .map((element, index) =>
      <li onClick={() => onChangeCategory(index)}
        className={categoryId === index ? 'active' : ''}
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