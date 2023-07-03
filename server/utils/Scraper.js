const axios = require('axios');
const cheerio = require('cheerio');

const scrapeData = async (url) => {
  try {
    const response = await axios.get(url);
    const $ = cheerio.load(response.data);

    const balanceSheet = {};
    const incomeStatement = {};
    const cashFlow = {};

    // Assuming the data is in tables on the website
    // Replace 'table-selector' with actual selectors from the website
    $('balance-sheet-table-selector').each((i, element) => {
      const key = $(element).find('td').first().text().trim();
      const value = $(element).find('td').last().text().trim();
      balanceSheet[key] = value;
    });

    $('income-statement-table-selector').each((i, element) => {
      const key = $(element).find('td').first().text().trim();
      const value = $(element).find('td').last().text().trim();
      incomeStatement[key] = value;
    });

    $('cash-flow-table-selector').each((i, element) => {
      const key = $(element).find('td').first().text().trim();
      const value = $(element).find('td').last().text().trim();
      cashFlow[key] = value;
    });

    return { balanceSheet, incomeStatement, cashFlow };
  } catch (error) {
    console.error(`Error scraping data from ${url}: ${error}`);
  }
};

module.exports = { scrapeData };