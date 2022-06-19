import React from 'react'
import s from './NotFoundBlock.module.scss'

const NotFoundBlock = () => {
   console.log(s)
   return (
      <div className={s.root}>
         <h1 >
            <span>😕</span>
            <br />
            Ничего не найдено
         </h1>
         <p className={s.descritpion}>К сожалени данная страница отсутствует в нашем интернет-магазине.</p>
      </div >
   )
}

export default NotFoundBlock
