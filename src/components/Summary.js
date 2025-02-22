import React from 'react';

function Summary({ rawData }) {
  return (
    <div className="summary">
      <h2>Resumo da Rescisão</h2>
      <ul>
        {Object.entries(rawData).map(([key, value]) => (
          <li key={key}>
            <strong>{key}:</strong> {value}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Summary;