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
    const [displayedItems, setDisplayedItems] = useState(itemsPerPage); //Default 10
    const [activePage, setActivePage] = useState(1) // Default assignment
    const [startIndex, setStartIndex] = useState(0) // Default
    const [endIndex, setEndIndex] = useState(totalItems - 1);
    

    useEffect(){

    }
    const totalPages = Math.ceil(totalItems / displayedItems);




    return {
        {
        currentPage = activePage,
            totalPages,
            startIndex = startIndex,
            ItemsPerPage = displayedItems,
            initialPage = 1

    };
}