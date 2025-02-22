import React, { useState } from 'react';

function FormRescisao({ onCalculate }) {
  const [formData, setFormData] = useState({
    salarioBruto: '',
    dataAdmissao: '',
    dataDemissao: '',
    motivo: 'semJustaCausa',
    avisoPrevio: 'trabalhado',
    feriasVencidas: false,
    mesesFeriasProporcionais: 0,
    saldoFGTS: ''
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = {
      salarioBruto: parseFloat(formData.salarioBruto),
      dataAdmissao: formData.dataAdmissao,
      dataDemissao: formData.dataDemissao,
      motivo: formData.motivo,
      avisoPrevio: formData.avisoPrevio,
      feriasVencidas: formData.feriasVencidas,
      mesesFeriasProporcionais: parseInt(formData.mesesFeriasProporcionais, 10),
      saldoFGTS: formData.saldoFGTS ? parseFloat(formData.saldoFGTS) : undefined
    };
    onCalculate(payload);
  };

  return (
    <form onSubmit={handleSubmit} className="form-rescisao">
      <div>
        <label>Salário Bruto (R$):</label>
        <input
          type="number"
          name="salarioBruto"
          value={formData.salarioBruto}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Data de Admissão:</label>
        <input
          type="date"
          name="dataAdmissao"
          value={formData.dataAdmissao}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Data de Demissão:</label>
        <input
          type="date"
          name="dataDemissao"
          value={formData.dataDemissao}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Motivo da Rescisão:</label>
        <select name="motivo" value={formData.motivo} onChange={handleChange}>
          <option value="semJustaCausa">Sem Justa Causa</option>
          <option value="comJustaCausa">Com Justa Causa</option>
          <option value="pedidoDemissao">Pedido de Demissão</option>
          <option value="rescisaoIndireta">Rescisão Indireta</option>
          <option value="comumAcordo">Comum Acordo</option>
        </select>
      </div>
      <div>
        <label>Aviso Prévio:</label>
        <select name="avisoPrevio" value={formData.avisoPrevio} onChange={handleChange}>
          <option value="trabalhado">Trabalhado</option>
          <option value="indenizado">Indenizado</option>
          <option value="dispensado">Dispensado</option>
        </select>
      </div>
      <div>
        <label>Férias Vencidas:</label>
        <input
          type="checkbox"
          name="feriasVencidas"
          checked={formData.feriasVencidas}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Meses de Férias Proporcionais:</label>
        <input
          type="number"
          name="mesesFeriasProporcionais"
          value={formData.mesesFeriasProporcionais}
          onChange={handleChange}
          min="0"
        />
      </div>
      <div>
        <label>Saldo de FGTS (opcional):</label>
        <input
          type="number"
          name="saldoFGTS"
          value={formData.saldoFGTS}
          onChange={handleChange}
        />
      </div>
      <button type="submit">Calcular</button>
    </form>
  );
}

export default FormRescisao;