const express = require('express');
const router = express.Router();
const financialDataController = require('../controllers/financialDataController');

router.get('/financial-data', financialDataController.getFinancialData);
router.post('/financial-data', financialDataController.postFinancialData);

module.exports = router;