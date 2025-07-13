/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import AccordionItem from "../components/AccordionItem";

type Props = {
  values: Record<string, any>;
  onChange: (key: string, value: string) => void;
  aggregations: Record<string, any>;
  onReset: () => void;
};

export default function FilterPanel({ values, onChange, aggregations, onReset }: Props) {
   const selectedTags = values.tags ? values.tags.split(",") : [];

  const handleCheckboxChange = (
    key: "tags" | "sectors" | "formats",
    selected: string[],
    value: string
  ) => {
    const isSelected = selected.includes(value);
    const updated = isSelected
      ? selected.filter((v) => v !== value)
      : [...selected, value];

    onChange(key, updated.join(","));
  };
  return (
    <div className="bg-white p-4 rounded shadow sticky top-4 text-sm boderRdius">
      <div className="filterData">
      <h2 className="font-semibold text-lg mb-4">Filters</h2>
      <button
        onClick={onReset}
        className="text-sm text-red-600 cursor-default"
      >
        Reset
      </button>
      </div>
     
       <div className="space-y-4">
        
      {/* SECTORS (Same Logic) */}
      {aggregations.sectors && (
        <AccordionItem title="Sectors" defaultOpen={true}>
          <div className="space-y-1 max-h-40 overflow-y-auto">
            {Object.entries(aggregations.sectors).map(([name, count]) => {
              const selected = values.sectors
                ? values.sectors.split(",")
                : [];

              return (
                <label key={name} className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={selected.includes(name)}
                    onChange={() =>
                      handleCheckboxChange("sectors", selected, name)
                    }
                  />
                  <span>
                    {name} ({Number(count)})
                  </span>
                </label>
              );
            })}
          </div>
        </AccordionItem>
      )}


      {aggregations.tags && (
        <AccordionItem title="Tags" defaultOpen={true}>
          <div className="space-y-1 max-h-40 overflow-y-auto">
            {Object.entries(aggregations.tags).map(([name, count]) => (
              <label key={name} className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={selectedTags.includes(name)}
                  onChange={() =>
                    handleCheckboxChange("tags", selectedTags, name)
                  }
                />
                <span>
                  {name} ({Number(count)})
                </span>
              </label>
            ))}
          </div>
        </AccordionItem>
      )}
      {/* FORMATS (Same Logic) */}
      {aggregations.formats && (
        <AccordionItem title="Data Type">
          <div className="space-y-1 max-h-40 overflow-y-auto">
            {Object.entries(aggregations.formats).map(([name, count]) => {
              const selected = values.formats
                ? values.formats.split(",")
                : [];

              return (
                <label key={name} className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={selected.includes(name)}
                    onChange={() =>
                      handleCheckboxChange("formats", selected, name)
                    }
                  />
                  <span>
                    {name} ({Number(count)})
                  </span>
                </label>
              );
            })}
          </div>
        </AccordionItem>
      )}

       {aggregations.Geography && (
        <AccordionItem title="Geography">
          <div className="space-y-1 max-h-40 overflow-y-auto">
            {Object.entries(aggregations.Geography).map(([name, count]) => (
              <label key={name} className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={selectedTags.includes(name)}
                  onChange={() =>
                    handleCheckboxChange("tags", selectedTags, name)
                  }
                />
                <span>
                  {name} ({Number(count)})
                </span>
              </label>
            ))}
          </div>
        </AccordionItem>
      )}
      </div>
    </div>
  );
}
