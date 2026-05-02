
export interface usePaginationProps {
    totalItems: string,
    itemsPerPage: number,
    initialPage: number
}

export interface usePaginationReturnProps {
    currentPage: number,
    totalPages: number,
    startIndex: number,
    endIndex: number,
    itemsOnCurrentPage: number,
    setPage(pageNumber): void,
    nextPage(): void,
    prevPage(): void,
    canNextPage: boolean,
    canPrevPage: boolean,

}

export interface PaginationDemoItems {
    arrayList: Array<number|string>,
    currentPageDisplay: number,
    prevButton(): void,
    nextButton(): void,
    canPrevPage?:boolean,
    canNextPage?: boolean,
}