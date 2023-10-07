import React from 'react';

const Pagination = ({ totalPages, currentPage, pageChange }) => {
  const pageNumbers = [];
  const pageShow = Math.ceil(totalPages / 2); 


  let startPage = (Math.floor((currentPage - 1) / pageShow) * pageShow) + 1;
  let endPage = Math.min(startPage + pageShow - 1, totalPages);
  for (let i = startPage; i <= endPage; i++) {
    pageNumbers.push(i);
  }

  return (
    <div className='pagination-container'>
      <nav aria-label="Page navigation example">
        <ul className="pagination">
          <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
            <a
              className="page-link"
              href="#"
              aria-label="Previous"
              onClick={() => pageChange(currentPage - 1)}
            >
              <span aria-hidden="true">&laquo;</span>
            </a>
          </li>
          {pageNumbers.map((pageNumber) => (
            <li
              key={pageNumber}
              className={`page-item ${currentPage === pageNumber ? 'active' : ''}`}
            >
              <a
                className="page-link"
                href="#"
                onClick={() => pageChange(pageNumber)}
              >
                {pageNumber}
              </a>
            </li>
          ))}
          <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
            <a
              className="page-link"
              href="#"
              aria-label="Next"
              onClick={() => pageChange(currentPage + 1)}
            >
              <span aria="true">&raquo;</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Pagination;






// import React from 'react'



// const  Pagination=()=>{
//   return (
//     <div className='pagination-container'>
//         <nav aria-label="Page navigation example">
//   <ul class="pagination">
//     <li class="page-item">

//       <a class="page-link" href="#" aria-label="Previous">
//         <span aria-hidden="true">&laquo;</span>
//       </a>
//     </li>
//     <li class="page-item"><a class="page-link" href="*">1</a></li>
//     <li class="page-item"><a class="page-link" href="*">2</a></li>
//     <li class="page-item"><a class="page-link" href="*">3</a></li>
//     <li class="page-item">
//       <a class="page-link" href="#" aria-label="Next">
//         <span aria-hidden="true">&raquo;</span>
//       </a>
//     </li>
//   </ul>
// </nav>
//     </div>

//   )
// }

// export default Pagination

