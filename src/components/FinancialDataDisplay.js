import React, { useEffect, useState } from 'react';
import { FinancialDataService } from '../services/FinancialDataService';

function FinancialDataDisplay() {
  const [financialData, setFinancialData] = useState([]);

  useEffect(() => {
    FinancialDataService.on('DISPLAY_FINANCIAL_DATA', data => {
      setFinancialData(data);
    });
  }, []);

  return (
    <div id="financial-data-display">
      {financialData.length > 0 ? (
        financialData.map((data, index) => (
          <div key={index}>
            <h2>{data.companyName}</h2>
            <h3>Balance Sheet</h3>
            <p>{data.balanceSheet}</p>
            <h3>Income Statement</h3>
            <p>{data.incomeStatement}</p>
            <h3>Cash Flow</h3>
            <p>{data.cashFlow}</p>
          </div>
        ))
      ) : (
        <p>No data available. Please click the download button to fetch data.</p>
      )}
    </div>
  );
}

export default FinancialDataDisplay;