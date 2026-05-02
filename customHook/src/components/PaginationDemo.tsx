import {usePagination} from "../components/usePagination";
import type { PaginationDemoProps } from "../types";

const defaultItems = Array.from({ length: 100 }, (_, index) => `Item ${index + 1}`);

export default function PaginationDemo({
  items = defaultItems,
}: PaginationDemoProps) {
  const {
    currentPage,
    totalPages,
    currentItems,
    canPrevPage,
    canNextPage,
    nextPage,
    prevPage,
    setPage,
  } = usePagination({
    totalItems: items.length,
    itemsPerPage: 5,
  });

  return (
    <div>
      <h2>Pagination Demo</h2>

      <p>
        Page {currentPage} of {totalPages}
      </p>

      <ul>
        {currentItems.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>

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