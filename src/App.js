import React, { Component } from 'react';
import DownloadButton from './components/DownloadButton';
import FinancialDataDisplay from './components/FinancialDataDisplay';
import FinancialDataService from './services/FinancialDataService';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      financialData: [],
    };
  }

  componentDidMount() {
    FinancialDataService.downloadData().then((data) => {
      this.setState({ financialData: data });
    });
  }

  render() {
    return (
      <div className="App">
        <DownloadButton />
        <FinancialDataDisplay data={this.state.financialData} />
      </div>
    );
  }
}

export default App;