const express = require('express');
const DatabaseService = require('./services/DatabaseService');
const financialDataRoutes = require('./routes/financialDataRoutes');

const app = express();
const port = process.env.PORT || 3000;

// Connect to the database
DatabaseService.connectToDatabase();

// Use JSON middleware for parsing JSON bodies into JS objects
app.use(express.json());

// Use the financial data routes
app.use('/api/financial-data', financialDataRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

module.exports = app;