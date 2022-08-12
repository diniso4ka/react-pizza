import React from 'react'
import ReactPaginate from 'react-paginate'

import s from './Pagination.module.scss'


type PaginationProps = {
   onChangePage: any,
   currentPage: number
}


const Pagination: React.FC<PaginationProps> = ({ onChangePage, currentPage }) => {
   return (
      <ReactPaginate
         className={s.root}
         breakLabel="..."
         nextLabel=">"
         onPageChange={(event) => onChangePage(event.selected + 1)}
         pageRangeDisplayed={8}
         pageCount={2}
         previousLabel="<"
         forcePage={currentPage - 1}
         renderOnZeroPageCount={null}
      />
   )
}

export default Pagination
