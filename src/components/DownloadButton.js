import React from 'react';
import { FinancialDataService } from '../services/FinancialDataService';

class DownloadButton extends React.Component {
  downloadData = () => {
    FinancialDataService.downloadFinancialData();
  }

  render() {
    return (
      <button id="download-button" onClick={this.downloadData}>
        Download Financial Data
      </button>
    );
  }
}

export default DownloadButton;