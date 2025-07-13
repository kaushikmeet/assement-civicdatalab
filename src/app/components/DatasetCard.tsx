/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import Image from "next/image";
import {
  Calendar1,
  ArrowDownToLine,
  Globe,
  ChartNoAxesColumnIncreasing,
  Factory
} from "lucide-react";

// Props
type Props = {
  data: any;
  view: "grid" | "list";
  aggregations: Record<string, any>;
};

export default function DatasetCard({ data, view, aggregations }: Props) {
  // Format date safely
  const formattedDate = data.last_updated
    ? new Date(data.last_updated).toLocaleDateString("en-IN", {
        year: "numeric",
        month: "short",
        day: "numeric",
      })
    : "No update info";

  const firstGeography = Object.keys(aggregations?.Geography || {})[0] ?? "Unknown";

  // GRID VIEW
  if (view === "grid") {
    return (
      <div className="bg-white rounded-lg shadow p-4 hover:shadow-md transition w-full h-full flex flex-col justify-between gap-2">
        <h3 className="text-lg font-semibold text-blue-900 mb-2 line-clamp-2">
          {data.title}
        </h3>

        <div className="text-xs text-gray-500 flex gap-4 flex-wrap mb-2">
          <div className="_with_data2">
          <span><Calendar1 size={14} className="iconYellow" /></span>
          <span className="line-clamp-1">{formattedDate}</span>
          </div>
          <div className="_with_data2">
          <span><ArrowDownToLine size={14} className="iconYellow"/></span>
          <span>{data.download_count ?? 0}</span>
          </div>
          <div className="_with_data2">
          <span><Globe size={14} className="iconYellow" /></span>
          <span className="line-clamp-1">{firstGeography}</span>
          </div>
        </div>
        <hr/>  
        <p className="text-sm text-gray-700 mb-4 line-clamp-2 mt-4">
          {data.description}
        </p>

        <div className="flex justify-between items-center mt-auto text-xs text-gray-600 mt-4">
          <div className="flex justify-between flex-wrap w-full">
          <div className="flex gap-2 text-lg">
            <span><Factory size={18} className="iconYellow2"/></span>
            <span><ChartNoAxesColumnIncreasing size={18} className="iconYellow2"/></span>
          </div>
          <div className="flex gap-2">
            <span>Published by </span>
            <Image src="/assets/cdl_logo.png"
            alt="CDL Logo"
            width={15}
            height={15}
            priority
            className="imgSRc2"/>
          </div>
          </div>
          
        </div>
      </div>
    );
  }

  // LIST VIEW
  return (
    <div className="bg-white dataBox w-full">
      <h2 className="text-blue-900 font-semibold text-lg mb-1">{data.title}</h2>

      <p className="text-sm text-gray-700 mb-2 line-clamp-3">{data.description}</p>

      <div className="flex flex-wrap gap-5 text-sm text-gray-600 mb-2">
        <div className="_with_data2">
          <Calendar1 size={18} className="iconYellow" />
          <strong>{formattedDate}</strong>
        </div>

        <div className="_with_data2">
          <ArrowDownToLine size={18} className="iconYellow" />
          <span>Download:</span>
          <strong> {data.download_count ?? 0}</strong>
        </div>

        <div className="_with_data2">
          <Globe size={18} className="iconYellow" />
          <span className="font-medium">Geography:</span>
          <strong>{firstGeography}</strong>
        </div>

        <div className="_with_data2">
          <ChartNoAxesColumnIncreasing size={18} className="iconYellow" />
          <span> With Charts</span>
        </div>
      </div>

      <div className="flex flex-wrap justify-between gap-2 mb-2 mt-6 gridData">
        <div className="_with_data">
          <span className="title">Sectors:</span>
          {data.sectors?.map((sector: string, i: number) => (
            <span
              key={i}
              className="bg-green-100 text-green-800 text-xs px-2 py-0.5 rounded"
            >
              {sector}
            </span>
          ))}
        </div>

        <div className="_with_data">
          <span className="title">Published By:</span>
          <Image
            src="/assets/cdl_logo.png"
            alt="CDL Logo"
            width={25}
            height={25}
            priority
            className="imgSRc"
          />
        </div>
      </div>

      <div className="flex flex-wrap gap-2 justify-between items-center text-sm mt-4 gridData">
        <div className="_with_data">
          <span className="title">Tags:</span>
          {data.tags?.map((tag: string, i: number) => (
            <span key={i} className="tagList">
              {tag}
            </span>
          ))}
        </div>

        <div className="flex flex-wrap gap-2">
          <div className="_with_data">
            <span className="title">Formats:</span>
            {data.formats?.map((fmt: string, i: number) => (
              <span
                key={i}
                className="bg-gray-100 px-2 py-0.5 text-gray-800 rounded text-xs"
              >
                {fmt}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
