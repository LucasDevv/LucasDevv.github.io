import React, { useState } from 'react';
import { TextField, Box, InputLabel, MenuItem, Select, SelectChangeEvent, FormControl, Checkbox, FormControlLabel, Button } from '@mui/material';

const getToday = () => new Date().toISOString().split('T')[0];

function FormRescisao({ onCalculate }) {
  const [formData, setFormData] = useState({
    salarioBruto: '',
    dataAdmissao: getToday(),
    dataDemissao: getToday(),
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
        <TextField 
          className="text-field"
          name="salarioBruto"
          id="salarioBruto" 
          label="Sálario Bruto" 
          variant="outlined" 
          type="number"
          slotProps={{
            inputLabel: {
              shrink: true,
            },
          }}
          value={formData.salarioBruto}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <TextField 
          name="dataAdmissao"
          className="text-field"
          id="dataAdmissao" 
          label="Data de Admissão" 
          variant="outlined" 
          type="date"
          slotProps={{
            inputLabel: {
              shrink: true,
            },
          }}
          value={formData.dataAdmissao}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <TextField 
          className="text-field"
          name="dataDemissao"
          id="dataDemissao" 
          label="Data de Demissão" 
          variant="outlined" 
          type="date"
          slotProps={{
            inputLabel: {
              shrink: true,
            },
          }}
          value={formData.dataDemissao}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <Box sx={{ minWidth: 120 }}>
          <FormControl fullWidth>
            <InputLabel id="motivo-label">Motivo da Rescisão</InputLabel>
            <Select
              labelId="motivo-label"
              name="motivo"
              id="motivo"
              value={formData.motivo}
              label="Motivo da Rescisão"
              onChange={handleChange}
            >
              <MenuItem value="semJustaCausa">Sem Justa Causa</MenuItem>
              <MenuItem value="comJustaCausa">Com Justa Causa</MenuItem>
              <MenuItem value="pedidoDemissao">Pedido de Demissão</MenuItem>
              <MenuItem value="rescisaoIndireta">Rescisão Indireta</MenuItem>
              <MenuItem value="comumAcordo">Comum Acordo</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </div>
      <div>
        <Box sx={{ minWidth: 120 }}>
          <FormControl fullWidth>
            <InputLabel id="avisoPrevio-label">Aviso Prévio</InputLabel>
            <Select
              labelId="avisoPrevio-label"
              name="avisoPrevio"
              id="avisoPrevio"
              value={formData.avisoPrevio}
              label="Aviso Prévio"
              onChange={handleChange}
            >
              <MenuItem value="trabalhado">Trabalhado</MenuItem>
              <MenuItem value="indenizado">Indenizado</MenuItem>
              <MenuItem value="dispensado">Dispensado</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </div>
      <div>
        <FormControlLabel 
          control={
            <Checkbox 
              name="feriasVencidas"
              checked={formData.feriasVencidas}
              onChange={handleChange}
            />} label="Férias Vencidas" />
      </div>
      <div>
        <TextField 
          className="text-field"
          name="mesesFeriasProporcionais"
          id="mesesFeriasProporcionais" 
          label="Meses de Férias Proporcionais" 
          variant="outlined" 
          type="number"
          slotProps={{
            inputLabel: {
              shrink: true,
            },
          }}
          value={formData.mesesFeriasProporcionais}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <TextField 
          className="text-field"
          name="saldoFGTS"
          id="saldoFGTS" 
          label="Saldo de FGTS (opcional)" 
          variant="outlined" 
          type="number"
          slotProps={{
            inputLabel: {
              shrink: true,
            },
          }}
          value={formData.saldoFGTS}
          onChange={handleChange}
        />
      </div>
      <div className='button-container'>
        <Button type="submit" variant="contained">Calcular</Button>
      </div>
    </form>
  );
}

export default FormRescisao;