"use client";

import { StretchHorizontal, LayoutGrid } from "lucide-react";

type Props = {
  view: "list" | "grid";
  setView: (view: "list" | "grid") => void;
};

export default function ViewToggle({ view, setView }: Props) {
  return (
    <div className="flex items-center rounded overflow-hidden">
      <button
        onClick={() => setView("list")}
        className={`px-3 py-2 ${view === "list" ? "colorActive" : "colorNonActive{"}`}
      >
        <StretchHorizontal size={30} />
      </button>
      <button
        onClick={() => setView("grid")}
        className={`px-3 py-2 ${view === "grid" ? "colorActive" : "colorNonActive{"}`}
      >
        <LayoutGrid size={30} />
      </button>
    </div>
  );
}
