import { useState } from "react";
import { usePagination } from "../components/usePagination";
import type { PaginationDemoProps } from "../types";

const defaultItems = Array.from(
  { length: 123 },
  (_, index) => `Item ${index + 1}`
);

export default function PaginationDemo({
  items = defaultItems,
}: PaginationDemoProps) {
  const [itemsPerPage, setItemsPerPage] = useState(10); // Default


  const {
    currentPage,
    totalPages,
    canPrevPage,
    canNextPage,
    nextPage,
    prevPage,
    setPage,
  } = usePagination({
    totalItems: items.length,
    itemsPerPage,
  });

  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = items.slice(startIndex, startIndex + itemsPerPage);


  return (
    <div>
      <h2>Pagination Demo</h2>

      <div>
        <label>
          Items per page:{" "}
          <select
            value={itemsPerPage}
            onChange={(event) => setItemsPerPage(Number(event.target.value))}
          >
            <option value={5}>5</option>
            <option value={10}>10</option>
            <option value={20}>20</option>
          </select>
        </label>

        <h3>Total Items: {items.length}</h3>
      </div>

      <p>
        Page {currentPage} of {totalPages}
      </p>

      <ol start={startIndex + 1}>
        {currentItems.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ol>

      <div>
        <button onClick={prevPage} disabled={!canPrevPage}>
          Previous
        </button>

        {Array.from({ length: totalPages }, (_, index) => {
          const pageNumber = index + 1;

          return (
            <button
              key={pageNumber}
              onClick={() => setPage(pageNumber)}
              disabled={pageNumber === currentPage}
            >
              {pageNumber}
            </button>
          );
        })}

        <button onClick={nextPage} disabled={!canNextPage}>
          Next
        </button>
      </div>
    </div>
  );
}