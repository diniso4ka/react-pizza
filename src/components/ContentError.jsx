import React from 'react';
import { Link } from 'react-router-dom';


import { useSelector } from 'react-redux';


const ContentError = ({ title, firstString, secondString, imageUrl }) => {
   const { status } = useSelector((state) => state.pizza)


   return (<div className="content__error-info">
      <h2>
         {title} <span>😕</span>
      </h2>
      <p>
         {firstString}
         <br />
         {secondString}
      </p>
      <img src={imageUrl} alt="Empty cart" />
      {title !== 'Произошла ошибка' ? <Link to="/" className="button button--black">
         <span>Вернуться назад</span>
      </Link> :
         ''}
   </div>
   );
}

export default ContentError