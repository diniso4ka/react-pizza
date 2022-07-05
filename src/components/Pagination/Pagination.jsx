import React from 'react'
import ReactPaginate from 'react-paginate'

import s from './Pagination.module.scss'

function Pagination({ onChangePage, currentPage }) {
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
