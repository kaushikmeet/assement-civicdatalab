"use client";
import { ChevronRight, ChevronLeft } from "lucide-react";

type Props = {
  currentPage: number;
  totalResults: number;
  perPage: number;
  onPageChange: (page: number) => void;
  onPerPageChange: (page: number) => void;
};

export default function Pagination({ currentPage, totalResults, perPage, onPageChange, onPerPageChange}: Props) {
  const totalPages = Math.ceil(totalResults / perPage);

  return (
    <div className="flex items-center justify-end mt-6 text-sm pagination">
      <label className="flex items-center gap-1">
          Rows Per Page
          <select
            value={perPage}
            onChange={(e) => onPerPageChange(Number(e.target.value))}
            className="border px-2 py-1 rounded text-sm"
          >
            {[9, 12, 24, 48].map((n) => (
              <option key={n} value={n}>
                {n}
              </option>
            ))}
          </select>
        </label>
        <span>
        Page {(currentPage - 1) * perPage + 1} -{" "}
        {Math.min(currentPage * perPage, totalResults)} of {totalResults}
      </span>
      <div className="space-x-2">
        <button
          disabled={currentPage === 1}
          onClick={() => onPageChange(currentPage - 1)}
          className="px-3 py-1 cursor-pointer disabled:opacity-50 paginationBtn"
        >
          <ChevronLeft size={25}/>
        </button>
        <button
          disabled={currentPage === totalPages}
          onClick={() => onPageChange(currentPage + 1)}
          className="px-3 py-1 cursor-pointer disabled:opacity-50 paginationBtn"
        >
          <ChevronRight size={25}/>
        </button>
      </div>
    </div>
  );
}
