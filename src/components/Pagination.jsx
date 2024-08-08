import React from 'react';
import { MdNavigateBefore } from "react-icons/md";
import { MdNavigateNext } from "react-icons/md";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
    return (
        <div className="d-flex justify-content-center">
             <button
        className="btn btn-light btn-sm mx-1"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
       <MdNavigateBefore />
      </button>
        {Array(totalPages)
          .fill(0)
          .map((_, index) => (
            <button
              key={index}
              onClick={() => onPageChange(index + 1)}
              className={`btn ${index + 1 === currentPage ? 'btn-success' : 'btn-light'} btn-sm mx-1`}
            >
              {index + 1}
            </button>
          ))}
      
        <button
          className="btn btn-light btn-sm mx-1"
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          <MdNavigateNext />
        </button>
      </div>
    );
  };
    export default Pagination;