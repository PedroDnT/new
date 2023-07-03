const express = require('express');
const FinancialDataModel = require('../models/FinancialDataModel');
const DatabaseService = require('../services/DatabaseService');

const financialDataController = express.Router();

financialDataController.get('/', async (req, res) => {
    try {
        const financialData = await DatabaseService.getAll(FinancialDataModel);
        res.json(financialData);
    } catch (error) {
        res.status(500).send(error);
    }
});

financialDataController.get('/:id', async (req, res) => {
    try {
        const financialData = await DatabaseService.getById(FinancialDataModel, req.params.id);
        res.json(financialData);
    } catch (error) {
        res.status(500).send(error);
    }
});

module.exports = financialDataController;