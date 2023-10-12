import React from 'react';

const Pagination = ({ totalPages, currentPage, pageChange }) => {
  const pageNumbers = [];
  const pageShow = totalPages;

  let startPage = (Math.floor((currentPage - 1) / pageShow) * pageShow) + 1;
  let endPage = Math.min(startPage + pageShow - 1, totalPages);
  for (let i = startPage; i <= endPage; i++) {
    pageNumbers.push(i);
  }

  const handlePageChange = (pageNumber, event) => {
    event.preventDefault(); 
    pageChange(pageNumber);
  };

  return (
    <div className='pagination-container'>
      <nav aria-label="Page navigation example">
        <ul className="pagination">
          <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
            <a
              className="page-link"
              href="#"
              aria-label="Previous"
              onClick={(e) => handlePageChange(currentPage - 1, e)}
            >
              <span aria-label="Previous" aria-hidden="true">&laquo;</span>
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
                onClick={(e) => handlePageChange(pageNumber, e)}
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
              onClick={(e) => handlePageChange(currentPage + 1, e)}
            >
              <span aria-label="Next" aria-hidden="true">&raquo;</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Pagination;