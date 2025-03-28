import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || 'https://backend-calculadorarescisaotrabalho.onrender.com/api';

export const calculateRescisao = async (data) => {
  const response = await axios.post(`${API_BASE_URL}/calculations`, data);
  return response.data;
};