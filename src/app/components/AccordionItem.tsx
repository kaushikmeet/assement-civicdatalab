"use client";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

type Props = {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
};

export default function AccordionItem({ title, children, defaultOpen = false }: Props) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div>
      <button
        className="flex justify-between items-center w-full text-left font-medium accordionLabel"
        onClick={() => setOpen(!open)}
      >
        <span>{title}</span>
        {open ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
      </button>
      {open && <div className="mt-2">{children}</div>}
    </div>
  );
}
