import axios from 'axios';

class DatabaseService {
  constructor() {
    this.BASE_URL = 'http://localhost:5000/api';
  }

  async getFinancialData() {
    try {
      const response = await axios.get(`${this.BASE_URL}/financial-data`);
      return response.data;
    } catch (error) {
      console.error('Error fetching financial data', error);
      return null;
    }
  }

  async downloadFinancialData() {
    try {
      const response = await axios.get(`${this.BASE_URL}/financial-data/download`);
      return response.data;
    } catch (error) {
      console.error('Error downloading financial data', error);
      return null;
    }
  }
}

export default new DatabaseService();