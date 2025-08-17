import React, { useState } from 'react';
import { ChevronUp, ChevronDown, ChevronsUpDown } from 'lucide-react';

export interface Column<T = any> {
  key: string;
  title: string;
  dataIndex: keyof T | string;
  sortable?: boolean;
}

export interface DataTableProps<T> {
  data: T[];
  columns: Column<T>[];
  loading?: boolean;
  selectable?: boolean;
  onRowSelect?: (selectedRows: T[]) => void;
}

export function DataTable<T extends Record<string, any> = Record<string, any>>({
  data,
  columns,
  loading = false,
  selectable = false,
  onRowSelect,
}: DataTableProps<T>) {
  const [sortKey, setSortKey] = useState<string | null>(null);
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');
  const [selectedRows, setSelectedRows] = useState<T[]>([]);

  const handleSort = (key: string) => {
    if (sortKey === key) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortKey(key);
      setSortOrder('asc');
    }
  };

  const sortedData = React.useMemo(() => {
    if (!sortKey) return data;
    return [...data].sort((a, b) => {
      const aVal = a[sortKey as keyof T];
      const bVal = b[sortKey as keyof T];
      if (aVal < bVal) return sortOrder === 'asc' ? -1 : 1;
      if (aVal > bVal) return sortOrder === 'asc' ? 1 : -1;
      return 0;
    });
  }, [data, sortKey, sortOrder]);

  const handleSelectRow = (row: T) => {
    let updated;
    if (selectedRows.includes(row)) {
      updated = selectedRows.filter((r) => r !== row);
    } else {
      updated = [...selectedRows, row];
    }
    setSelectedRows(updated);
    onRowSelect && onRowSelect(updated);
  };

  const handleSelectAll = () => {
    if (selectedRows.length === data.length) {
      setSelectedRows([]);
      onRowSelect && onRowSelect([]);
    } else {
      setSelectedRows(data);
      onRowSelect && onRowSelect(data);
    }
  };

  return (
    <div className="w-full overflow-x-auto mb-8" role="table" aria-busy={loading}>
      <table className="w-full border-collapse bg-white">
        <thead>
          <tr>
            {selectable && (
              <th className="bg-gray-50 font-semibold p-3 border-b-2 border-gray-200 text-left">
                <input
                  type="checkbox"
                  aria-label="Select all rows"
                  checked={selectedRows.length === data.length && data.length > 0}
                  onChange={handleSelectAll}
                  className="rounded"
                />
              </th>
            )}
            {columns.map((col) => (
              <th key={col.key} className="bg-gray-50 font-semibold p-3 border-b-2 border-gray-200 text-left">
                <span>{col.title}</span>
                {col.sortable && (
                  <button
                    type="button"
                    aria-label={`Sort by ${col.title}`}
                    onClick={() => handleSort(col.dataIndex as string)}
                    className="ml-2 p-1 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded transition-colors duration-200 inline-flex items-center justify-center"
                  >
                    {sortKey === col.dataIndex ? 
                      (sortOrder === 'asc' ? <ChevronUp size={16} /> : <ChevronDown size={16} />) : 
                      <ChevronsUpDown size={16} />
                    }
                  </button>
                )}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {loading ? (
            <tr>
              <td colSpan={columns.length + (selectable ? 1 : 0)} className="text-center text-gray-500 text-base py-8">
                Loading...
              </td>
            </tr>
          ) : sortedData.length === 0 ? (
            <tr>
              <td colSpan={columns.length + (selectable ? 1 : 0)} className="text-center text-gray-500 text-base py-8">
                No data available
              </td>
            </tr>
          ) : (
            sortedData.map((row, idx) => (
              <tr key={idx}>
                {selectable && (
                  <td className="p-3 border-b border-gray-200">
                    <input
                      type="checkbox"
                      aria-label={`Select row ${idx + 1}`}
                      checked={selectedRows.includes(row)}
                      onChange={() => handleSelectRow(row)}
                      className="rounded"
                    />
                  </td>
                )}
                {columns.map((col) => (
                  <td key={col.key} className="p-3 border-b border-gray-200">
                    {String(row[col.dataIndex])}
                  </td>
                ))}
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}
