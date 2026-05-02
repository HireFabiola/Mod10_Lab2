// import { useState, useEffect } from "react";
import "../App"
import type { usePaginationProps } from "../types"

export function usePagination({
  totalItems,
  itemsPerPage,
  initialPage = 1,
}: UsePaginationProps) {

  console.log("totalItems:", totalItems);
  console.log("itemsPerPage:", itemsPerPage);
  console.log("initialPage:", initialPage);

  return {
    totalItems,
    itemsPerPage,
    initialPage,
  };
}