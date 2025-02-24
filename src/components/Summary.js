import React from 'react';
import { formatBRL } from '../utils/format';

const friendlyNames = {
  saldoSalario: 'Saldo de Salário',
  valorFeriasVencidas: 'Férias Vencidas',
  valorFeriasProporcionais: 'Férias Proporcionais',
  decimoTerceiro: '13º Salário Proporcional',
  avisoPrevio: 'Aviso Prévio',
  fgtsTotal: 'Saldo FGTS',
  multaFgts: 'Multa FGTS',
  totalBruto: 'Total Bruto',
  inssValor: 'Desconto INSS',
  irValor: 'Desconto IRRF',
  totalLiquido: 'Total Líquido'
};

function Summary({ rawData }) {
  return (
    <div className="summary">
      <h2>Resumo da Rescisão</h2>
      <ul>
        {Object.entries(rawData).map(([key, value]) => (
          <li key={key}>
            <strong>{friendlyNames[key] || key}:</strong> {formatBRL(value)}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Summary;