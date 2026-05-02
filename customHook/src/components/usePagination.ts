console.log("I'm here")
import { useState, useEffect } from "react";
import "../App"
import type { usePaginationProps } from "../types/index";
import type { usePaginationReturnProps } from "../types/index";

export function usePagination({
    totalItems,
    itemsPerPage,
    initialPage = 1,
}: usePaginationProps) {

    // Initialize states
    const [itemsPerPage, setItemsPerPage] = useState(10); //Default 10
    const [activePage, setActivePage] = useState(1) // Default assignment
    const [startIndex, setStartIndex] = useState(0) // Default
    const [endIndex, setEndIndex] = useState(totalItems - 1);

    // Trigger update effect for state changes to itemsPerPage
    useEffect(){
       
    }





    return {
        {
        ccurrentPage
        totalPages
        canPrevPage
        canNextPage
        prevPage
        nextPage
        setPage

    };
}