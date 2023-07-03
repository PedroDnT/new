const FinancialDataModel = require('../../models/FinancialDataModel');
const connection = require('../connection');

const financialDataSeeds = [
  // Add your seed data here. Each object should represent a row in the financial data table.
  // For example:
  // {
  //   company_name: 'Company A',
  //   balance_sheet: 'Balance sheet data',
  //   income_statement: 'Income statement data',
  //   cash_flow: 'Cash flow data',
  // },
];

connection
  .then(async (db) => {
    for (let seed of financialDataSeeds) {
      const financialData = new FinancialDataModel(seed);
      await financialData.save();
    }
  })
  .catch((error) => {
    console.error('Error seeding data: ', error);
  });