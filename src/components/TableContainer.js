import React from 'react';
import Table from './Table';

function TableContainer({ tables }) {
  return (
    <div className="table-container">
      {tables.map((table, index) => (
        <Table
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