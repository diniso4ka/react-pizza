import React from 'react'
import s from './Search.module.scss'


import { setSearchValue } from '../../redux/slices/filterSlice'
import { useDispatch, useSelector } from 'react-redux'
import debounce from 'lodash.debounce'


const Search = ({ }) => {
   const { searchValue } = useSelector(state => state.filter)
   const dispatch = useDispatch()
   const [value, setValue] = React.useState('')
   const inputRef = React.useRef()



   const onClickClear = () => {
      setValue('')
      dispatch(setSearchValue(''))
      inputRef.current.focus()
   }



   const updateSearchValue = React.useCallback(
      debounce((str) => {
         console.log(str)
         dispatch(setSearchValue(str))
         console.log(searchValue)
      }, 600),
      []
   )



   const onChangeInput = (event) => {
      setValue(event.target.value)
      updateSearchValue(event.target.value)
   }



   return (
      <div className={s.root}>
         <svg enableBackground="new 0 0 32 32"
            className={s.icon}
            id="Glyph"
            version="1.1"
            viewBox="0 0 32 32"
            xmlns="http://www.w3.org/2000/svg">
            <path d="M27.414,24.586l-5.077-5.077C23.386,17.928,24,16.035,24,14c0-5.514-4.486-10-10-10S4,8.486,4,14  s4.486,10,10,10c2.035,0,3.928-0.614,5.509-1.663l5.077,5.077c0.78,0.781,2.048,0.781,2.828,0  C28.195,26.633,28.195,25.367,27.414,24.586z M7,14c0-3.86,3.14-7,7-7s7,3.14,7,7s-3.14,7-7,7S7,17.86,7,14z" id="XMLID_223_" /></svg>

         <input ref={inputRef} value={value} onChange={onChangeInput} className={s.input} type='text' placeholder='Поиск пиццы...'></input>
         {value ? <img onClick={() => onClickClear()} className={s.clearIcon} src='https://cdn0.iconfinder.com/data/icons/google-material-design-3-0/48/ic_clear_48px-512.png' /> : ''}
      </div>
   )
}

export default Search
