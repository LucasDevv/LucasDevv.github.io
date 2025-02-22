import React, { useState } from 'react';
import FormRescisao from './components/FormRescisao';
import Loading from './components/Loading';
import Summary from './components/Summary';
import TableContainer from './components/TableContainer';
import { calculateRescisao } from './services/api';

function App() {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);

  const handleCalculate = async (formData) => {
    setLoading(true);
    setResult(null);
    try {
      const data = await calculateRescisao(formData);
      setResult(data);
    } catch (error) {
      console.error('Erro ao calcular rescisão:', error);
      alert('Erro ao calcular rescisão. Tente novamente.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="App">
      <header>
        <h1>Calculadora de Rescisão</h1>
      </header>
      <main>
        <FormRescisao onCalculate={handleCalculate} />
        {loading && <Loading />}
        {result && (
          <div className="results">
            <Summary rawData={result.rawData} />
            <TableContainer tables={result.tables} />
          </div>
        )}
      </main>
    </div>
  );
}

export default App;