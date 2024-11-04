import axios from 'axios';

const API_URL = 'https://servicebus2.caixa.gov.br/portaldeloterias/api/home/ultimos-resultados';

export const getLatestResults = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};