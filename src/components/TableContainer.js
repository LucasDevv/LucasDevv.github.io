import React from 'react';
import Tabela from './Table';

function TableContainer({ tables }) {
  return (
    <div className="table-container">
      {tables.map((table, index) => (
        <Tabela
          key={index}
          title={table.title}
          columns={table.columns}
          rows={table.rows}
        />
      ))}
    </div>
  );
}

export default TableContainer;