import React from 'react';
import { Link } from 'react-router-dom';


import { useSelector } from 'react-redux';


type ContentError = {
   title: string,
   firstString: string,
   secondString: string,
   imageUrl: string
}


const ContentError: React.FC<ContentError> = ({ title, firstString, secondString, imageUrl }) => {
   const { status } = useSelector((state: any) => state.pizza)


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