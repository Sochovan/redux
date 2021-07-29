import React from "react";

const Pagination = ({
  goPrev,
  goNext,
  currentPage,
  totalItems,
  itemsPerPage,
}) => {
  // input: currenPage, itemsPerPage, userCount
  // output: boolean;

  const isPrevPageAvailable = currentPage > 0;

  const isNextPageAvailable =
    currentPage + 1 < Math.ceil(totalItems / itemsPerPage);

  return (
    <div className="pagination">
      <button className="btn" onClick={goPrev} disabled={!isPrevPageAvailable}>
        {isPrevPageAvailable ? "←" : null}
      </button>
      <span className="pagination__page">{currentPage + 1}</span>
      <button className="btn" onClick={goNext} disabled={!isNextPageAvailable}>
        {isNextPageAvailable ? "→" : null}
      </button>
    </div>
  );
};

export default Pagination;
