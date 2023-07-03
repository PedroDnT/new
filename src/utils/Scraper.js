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
    $('table#balance-sheet tr').each((i, element) => {
      const cells = $(element).find('td');
      balanceSheet[$(cells[0]).text()] = $(cells[1]).text();
    });

    $('table#income-statement tr').each((i, element) => {
      const cells = $(element).find('td');
      incomeStatement[$(cells[0]).text()] = $(cells[1]).text();
    });

    $('table#cash-flow tr').each((i, element) => {
      const cells = $(element).find('td');
      cashFlow[$(cells[0]).text()] = $(cells[1]).text();
    });

    return {
      balanceSheet,
      incomeStatement,
      cashFlow
    };
  } catch (error) {
    console.error(`Error in scraping data: ${error}`);
  }
};

module.exports = {
  scrapeData
};