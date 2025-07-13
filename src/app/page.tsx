/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState, useEffect } from "react";
import { fetchDatasets } from "../app/utils/fetchDatasets";
import DatasetCard from "../app/components/DatasetCard";
import FilterPanel from "../app/components/FilterPanel";
import Pagination from "../app/components/Pagination";
import SortDropdown from "../app/components/SortDropdown";
import ViewToggle from "../app/components/ViewToggle";
import Navbar from "./components/Navbar";
import { Search } from "lucide-react";
import Footer from "./components/Footer";

export default function HomePage() {
  const [datasets, setDatasets] = useState([]);
  const [view, setView] = useState<"grid" | "list">("list");
  const [aggregations, setAggregations] = useState<any>({});
  const [showFilters, setShowFilters] = useState(false);
  const [totalResults, setTotalResults] = useState(0);
  const [loading, setLoading] = useState(false);

  const defaultQueryParams = {
    query: "",
    geography: "",
    sectors: "",
    tags: "",
    formats: "",
    page: 1,
    size: 9,
    sort: "recent",
    order: "desc",
  };
  const [queryParams, setQueryParams] = useState(defaultQueryParams);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const data = await fetchDatasets(queryParams);
        setDatasets(data.results || []);
        setTotalResults(data.total || 0);
        setAggregations(data.aggregations || {});
      } catch (err) {
        console.error("Error fetching datasets", err);
      }
      setLoading(false);
    };

    fetchData();
  }, [queryParams]);

  const handleFilterChange = (key: string, value: string) => {
    setQueryParams((prev) => ({
      ...prev,
      [key]: value,
      page: 1,
    }));
  };

  const handlePerPageChange = (newSize: number) => {
    setQueryParams((prev) => ({
      ...prev,
      size: newSize,
      page: 1, // Reset to first page
    }));
  };

  const handlePageChange = (page: number) => {
    setQueryParams((prev) => ({ ...prev, page }));
  };

  const resetFilters = () => {
    setQueryParams(defaultQueryParams);
  };

  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Search + Sort Bar */}
      <div className="flex justify-between items-center flex-wrap gap-4 mb-4 p-4 searchFilterBox">
        {/* Search input */}
        <div className="flex-1 min-w-[200px] searchItem">
          <input
            type="text"
            value={queryParams.query}
            onChange={(e) => handleFilterChange("query", e.target.value)}
            placeholder="Search datasets (e.g. Floods)"
            className="w-full border px-3 py-2 rounded text-sm pr-10 searchInput"
          />
          <span className="text-gray-500">
            <Search size={22} />
          </span>
        </div>

        {/* View + Sort */}
        <div className="flex gap-2 items-center">
          <ViewToggle view={view} setView={setView} />
          <SortDropdown
            value={queryParams.sort}
            order={queryParams.order as "asc" | "desc"}
            onSortChange={(value) => handleFilterChange("sort", value)}
            onOrderToggle={() =>
              handleFilterChange(
                "order",
                queryParams.order === "asc" ? "desc" : "asc"
              )
            }
          />
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex flex-col md:flex-row px-8 pb-8 gap-6">
        {/* Mobile Filter Toggle */}
        <div className="md:hidden mb-4">
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="bg-blue-600 text-white px-4 py-2 rounded"
          >
            {showFilters ? "Hide Filters" : "Show Filters"}
          </button>

          {showFilters && (
            <div className="mt-4">
              <FilterPanel
                values={queryParams}
                onChange={handleFilterChange}
                aggregations={aggregations}
                onReset={resetFilters}
              />
            </div>
          )}
        </div>

        {/* Desktop Sidebar */}
        <aside className="hidden md:block md:w-64">
          <FilterPanel
            values={queryParams}
            onChange={handleFilterChange}
            aggregations={aggregations}
            onReset={resetFilters}
          />
        </aside>

        {/* Dataset Section */}
        <section className="flex-1">
          {loading ? (
            <p className="text-gray-500">Loading...</p>
          ) : (
            <div
              className={`grid ${
                view === "grid"
                  ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
                  : "space-y-4"
              }`}
            >
              {datasets.map((dataset: any, idx) => (
                <DatasetCard aggregations={aggregations} key={idx} data={dataset} view={view} />
              ))}
            </div>
          )}

          <Pagination
            currentPage={queryParams.page}
            totalResults={totalResults}
            perPage={queryParams.size}
            onPageChange={handlePageChange}
            onPerPageChange={handlePerPageChange}
          />
        </section>
      </div>
      <Footer />
    </main>
  );
}
