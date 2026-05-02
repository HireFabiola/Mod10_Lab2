import { useState, useEffect } from "react";
import type { usePaginationProps } from "../types/index";
import type { usePaginationReturnProps } from "../types/index";

export function usePagination({
  totalItems,
  itemsPerPage,
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

  // Temporary placeholders (since you said you're not implementing logic yet)
  const canPrevPage = true;
  const canNextPage = true;

  const prevPage = () => {
    console.log("prev clicked");
  };

  const nextPage = () => {
    console.log("next clicked");
  };

  const setPage = (page: number) => {
    console.log("set page:", page);
  };

  // Return must be an object (NOT JSX)
  return {
    currentPage: activePage,
    totalPages, // done
    canPrevPage,
    canNextPage,
    prevPage,
    nextPage,
    setPage,
  };
}