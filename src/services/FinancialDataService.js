import axios from 'axios';

const BASE_URL = 'http://localhost:5000/api/financial-data';

export const downloadData = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/download`);
    return response.data;
  } catch (error) {
    console.error('Error downloading financial data', error);
    throw error;
  }
};

export const displayData = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/display`);
    return response.data;
  } catch (error) {
    console.error('Error displaying financial data', error);
    throw error;
  }
};