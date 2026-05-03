import { useState, useEffect, act } from "react";
import type { usePaginationProps } from "../types/index";
import type { usePaginationReturnProps } from "../types/index";

export function usePagination({
  totalItems,
  itemsPerPage,
  itemsOnCurrentPage,
  initialPage = 1, // Set default for optional value
}: usePaginationProps): usePaginationReturnProps {

  // Initialize states
  // activePage tracks the current page
  const [activePage, setActivePage] = useState(initialPage);

  // startIndex tracks where the slice should begin
  const [startIndex, setStartIndex] = useState(0);

  // endIndex tracks where the slice should end
  const [endIndex, setEndIndex] = useState(totalItems - 1);

  // Calculate totalPages
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  // Trigger update effect when page or itemsPerPage changes
  useEffect(() => {
    setStartIndex((activePage - 1) * itemsPerPage);
    setEndIndex(activePage * itemsPerPage - 1);
  }, [activePage, itemsPerPage]);

  // Trigger update when the below states change to ensure current page updates correctly when itemsPerPage is changed
  useEffect(() => {
    if (activePage > totalPages) {
      setActivePage(totalPages);
    }
  }, [activePage, totalPages]);

  // set boolean value according to test value
  const canPrevPage = activePage > 1;
  let canNextPage = activePage < totalPages;

  // If not at first page, set active page to the previous one
  const prevPage = () => {
    if (canPrevPage) {
      setActivePage(activePage - 1);
    }
    return
  };

  //If not at last page, set active page to next page
  const nextPage = () => {
    if (canNextPage) {
      setActivePage(activePage + 1);
    };
  }

  // Updates when number slices are clicked
  const setPage = (page: number) => {
    setActivePage(page);
  };

  // Check for number of items on final page
  if (activePage === totalPages) {
    itemsOnCurrentPage = totalItems % itemsPerPage;
  } else {
    itemsOnCurrentPage = itemsPerPage;
  }

  // Object being returned to PaginationDemo 
  return {
    currentPage: activePage,
    totalPages,
    canPrevPage,
    itemsOnCurrentPage,
    canNextPage,
    prevPage,
    nextPage,
    setPage,
  };
}