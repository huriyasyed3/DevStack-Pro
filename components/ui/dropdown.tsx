"use client";

import { FC, ReactNode, useState } from "react";
import { ChevronDown } from "lucide-react";

/**
 * Dropdown Component
 * -----------------
 * Props:
 * - trigger: element that will be clicked to open dropdown
 * - children: dropdown content (menu items, links, etc.)
 */
interface DropdownProps {
  trigger: ReactNode;
  children: ReactNode;
}

const Dropdown: FC<DropdownProps> = ({ trigger, children }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative inline-block text-left">
      {/* Trigger */}
      <div
        onClick={() => setOpen(!open)}
        className="cursor-pointer flex items-center gap-1 select-none"
      >
        {trigger}
        <ChevronDown size={16} />
      </div>

      {/* Dropdown content */}
      {open && (
        <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-md shadow-lg z-50">
          {children}
        </div>
      )}
    </div>
  );
};

export default Dropdown;