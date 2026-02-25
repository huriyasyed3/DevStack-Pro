"use client";

import { FC, ReactNode } from "react";

/**
 * Table Component
 * ----------------
 * Props:
 * - columns: array of column headers
 * - data: array of objects
 */
interface TableProps {
  columns: string[];
  data: Array<Record<string, any>>;
}

const Table: FC<TableProps> = ({ columns, data }) => {
  return (
    <div className="overflow-x-auto rounded-lg border border-gray-200 dark:border-gray-700">
      <table className="w-full text-left text-sm text-gray-700 dark:text-gray-300">
        <thead className="bg-gray-50 dark:bg-gray-800">
          <tr>
            {columns.map((col) => (
              <th
                key={col}
                className="px-4 py-2 font-medium text-gray-900 dark:text-gray-100"
              >
                {col}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, i) => (
            <tr
              key={i}
              className={i % 2 === 0 ? "bg-white dark:bg-gray-900" : "bg-gray-50 dark:bg-gray-800"}
            >
              {columns.map((col) => (
                <td key={col} className="px-4 py-2">
                  {row[col.toLowerCase()]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;