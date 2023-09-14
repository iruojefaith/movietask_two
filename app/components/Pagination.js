

import {
 FiArrowLeft,
  FiArrowRight,
} from "react-icons/fi";

const Pagination = ({

    
  postPerPage,
  currentPage,
  setcurrentPage,
  displaymovies
}
) => {
  const PaginationNumber = [];

  for (let i = 1; i < Math.ceil(displaymovies.length / postPerPage); i++) {
    PaginationNumber.push(i);
  }

  const PageGetUrl = (val) => {
    setcurrentPage(val);
  };

  const PageGetUrlByArrow = (num) => {
    if (num <= PaginationNumber.length && num > 0) {
      setcurrentPage(num);
    } else {
      return;
    }
  };

  return (
    <div className="pagination-flex-box">
      <button
        style={{ cursor: "pointer" }}
        onClick={() => PageGetUrlByArrow(currentPage - 1)}
      >
        <FiArrowLeft />
      </button>
      {PaginationNumber.map((data, index) => {
        return (
          <li
            className="pagination-boxes"
            onClick={() => PageGetUrl(data)}
            key={index}
          >
            {data}
          </li>
        );
      })}
      <button
        style={{ cursor: "pointer" }}
        onClick={() => PageGetUrlByArrow(currentPage + 1)}
      >
        <FiArrowRight />
      </button>
    </div>
  );
};

export default Pagination;