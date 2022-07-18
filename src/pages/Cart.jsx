import React from 'react'
import { Link } from 'react-router-dom';

import CartEmpty from '../components/CartEmpty';
import CartItem from '../components/CartItem/CartItem';


import { clearItems } from '../redux/slices/cartSlice';
import { useSelector, useDispatch } from 'react-redux';

const Cart = ({ id, name, price, imageUrl, }) => {

   const { items, totalPrice } = useSelector((state) => state.cart)
   const totalCount = items.reduce((sum, item) => sum + item.count, 0)
   const renderItems = items.map((item, index) => <CartItem {...item} key={item.id} />)
   const dispatch = useDispatch()
   const onClickClear = () => {
      dispatch(clearItems())
   }

   if (!totalPrice) {
      return <CartEmpty />
   }

   return (
      <div className="cart">
         <div className="cart__top">
            <h2 className="content__title"> Корзина</h2>
            <div onClick={onClickClear} className="cart__clear">

               <span>Очистить корзину</span>
            </div>
         </div>
         <div className="content__cart-items">
            {renderItems}

         </div>
         <div className="cart__bottom">
            <div className="cart__bottom-details">
               <span> Всего пицц: <b>{totalCount} шт.</b> </span>
               <span> Сумма заказа: <b>{totalPrice} ₽</b> </span>
            </div>
            <div className="cart__bottom-buttons">
               <a href="/" className="button button--outline button--add go-back-btn">

                  <Link to='/'><span>Вернуться назад</span></Link>
               </a>
               <div className="button pay-btn">
                  <span>Оплатить сейчас</span>
               </div>
            </div>
         </div>
      </div>
   )

}


export default Cart