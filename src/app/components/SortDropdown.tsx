"use client";

import { ArrowUpDown } from "lucide-react";

type Props = {
  value: string;
  order: "asc" | "desc";
  onSortChange: (sort: string) => void;
  onOrderToggle: () => void;
};

const sortOptions = [
  { value: "recent", label: "Latest Updated" },
  { value: "alphabetical-asc", label: "A → Z" },
  { value: "alphabetical-desc", label: "Z → A" },
];

export default function SortControl({
  value,
  order,
  onSortChange,
  onOrderToggle,
}: Props) {
  return (
    <div className="flex items-center">
      <button
        onClick={onOrderToggle}
        className="p-2 rounded hover:bg-gray-100 transition-transform"
        title={`Sort order: ${order.toUpperCase()}`}
      >
        <ArrowUpDown
          size={30}
          className={`${order === "asc" ? "rotate-180" : ""} transition-transform`}
        />
      </button>

      <select
        value={value}
        onChange={(e) => onSortChange(e.target.value)}
        className="border selectSort rounded px-3 py-2 bg-white text-sm text-gray-700 shadow-sm focus:outline-none"
      >
        {sortOptions.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}
