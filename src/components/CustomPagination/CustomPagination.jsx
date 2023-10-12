import React from "react";
import { usePagination, DOTS } from "./usePagination";
import "./CustomPagination.scss";
import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";

const CustomPagination = ({
  onPageChange,
  totalCount,
  siblingCount = 1,
  currentPage,
  pageSize,
  className,
}) => {
  currentPage = Number(currentPage);
  pageSize = Number(pageSize);
  totalCount = Number(totalCount);

  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize,
  });
  // console.log(currentPage, totalCount, siblingCount, pageSize, paginationRange);

  if (currentPage === 0 || paginationRange.length < 2) {
    return null;
  }

  const onNext = () => {
    onPageChange(currentPage + 1);
  };

  const onPrevious = () => {
    onPageChange(currentPage - 1);
  };

  let lastPage = paginationRange[paginationRange.length - 1];

  return (
    <div className={"pagination_container" + ` ${className ? className : ""}`}>
      <div
        className={`icon_wrapper ${currentPage === 1 ? "disabled" : ""}`}
        onClick={currentPage === 1 ? () => {} : onPrevious}
        alt="arrowLeftSquareFill"
      >
        <AiOutlineArrowLeft />
      </div>

      {paginationRange.map((pageNumber, index) => {
        if (pageNumber === DOTS) {
          return (
            <div key={index} className={"dots"}>
              ...
            </div>
          );
        }

        return (
          <div
            className={
              "pagination_item" +
              ` ${pageNumber == currentPage ? "selected" : ""}`
            }
            onClick={() => onPageChange(pageNumber)}
            key={index}
          >
            {pageNumber}
          </div>
        );
      })}
      <div
        className={`icon_wrapper ${currentPage === lastPage ? "disabled" : ""}`}
        onClick={currentPage === lastPage ? () => {} : onNext}
        alt="arrowLeftSquareFill"
      >
        <AiOutlineArrowRight />
      </div>
    </div>
  );
};

export default CustomPagination;
