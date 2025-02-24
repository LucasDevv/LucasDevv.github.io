import React from 'react';
import { formatBRL } from '../utils/format';

function Table({ title, columns, rows }) {
  return (
    <div className="tabela">
      <h3>{title}</h3>
      <table>
        <thead>
          <tr>
            {columns.map((col, index) => (
              <th key={index}>{col}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((cell, cellIndex) => (
                <td key={cellIndex}>
                  {typeof cell === 'number' ? formatBRL(cell) : cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;