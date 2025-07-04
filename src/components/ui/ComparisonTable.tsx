'use client';

import React from 'react';
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell } from '@heroui/react';

interface TableData {
  headers: string[];
  rows: string[][];
}

interface ComparisonTableProps {
  title?: string;
  data: TableData;
  className?: string;
}

export const ComparisonTable: React.FC<ComparisonTableProps> = ({ 
  title, 
  data, 
  className = '' 
}) => {
  return (
    <div className={`w-full ${className}`}>
      {title && (
        <h3 className="text-xl font-semibold text-foreground mb-4 font-display">
          {title}
        </h3>
      )}
      <Table 
        aria-label={title || "Comparison table"}
        className="w-full"
        removeWrapper
      >
        <TableHeader>
          {data.headers.map((header, index) => (
            <TableColumn key={index} className="bg-default-100 text-left">
              {header}
            </TableColumn>
          ))}
        </TableHeader>
        <TableBody>
          {data.rows.map((row, rowIndex) => (
            <TableRow key={rowIndex}>
              {row.map((cell, cellIndex) => (
                <TableCell key={cellIndex} className="text-left">
                  {cell}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}; 