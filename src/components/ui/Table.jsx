import React from 'react';
import { colors, transitions } from '../../styles/theme.js';

const Table = ({ children, className = '', ...props }) => {
  return (
    <div className="overflow-x-auto">
      <table
        className={`
          min-w-full divide-y divide-gray-200
          ${className}
        `}
        {...props}
      >
        {children}
      </table>
    </div>
  );
};

const TableHead = ({ children, className = '', ...props }) => {
  return (
    <thead
      className={`
        bg-gray-50
        ${className}
      `}
      {...props}
    >
      {children}
    </thead>
  );
};

const TableBody = ({ children, className = '', ...props }) => {
  return (
    <tbody
      className={`
        bg-white divide-y divide-gray-200
        ${className}
      `}
      {...props}
    >
      {children}
    </tbody>
  );
};

const TableRow = ({ children, className = '', hoverable = true, ...props }) => {
  return (
    <tr
      className={`
        ${hoverable ? `hover:bg-${colors.gray[50]} ${transitions.DEFAULT}` : ''}
        ${className}
      `}
      {...props}
    >
      {children}
    </tr>
  );
};

const TableHeaderCell = ({ children, className = '', ...props }) => {
  return (
    <th
      className={`
        px-6 py-3
        text-left text-xs font-medium text-gray-500 uppercase tracking-wider
        ${className}
      `}
      {...props}
    >
      {children}
    </th>
  );
};

const TableCell = ({ children, className = '', ...props }) => {
  return (
    <td
      className={`
        px-6 py-4 whitespace-nowrap
        text-sm text-gray-900
        ${className}
      `}
      {...props}
    >
      {children}
    </td>
  );
};

Table.Head = TableHead;
Table.Body = TableBody;
Table.Row = TableRow;
Table.HeaderCell = TableHeaderCell;
Table.Cell = TableCell;

export default Table; 