const mongoose = require('mongoose');

const FinancialDataSchema = new mongoose.Schema({
  companyName: {
    type: String,
    required: true
  },
  balanceSheet: {
    type: Object,
    required: true
  },
  incomeStatement: {
    type: Object,
    required: true
  },
  cashFlow: {
    type: Object,
    required: true
  },
  scrapedAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('FinancialData', FinancialDataSchema);