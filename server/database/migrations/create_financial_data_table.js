const FinancialDataModel = require('../../models/FinancialDataModel');
const connection = require('../connection');

exports.up = function(knex) {
  return knex.schema.createTable(FinancialDataModel.tableName, function(table) {
    table.increments('id');
    table.string('company_name').notNullable();
    table.json('balance_sheet').notNullable();
    table.json('income_statement').notNullable();
    table.json('cash_flow').notNullable();
    table.timestamps(true, true);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable(FinancialDataModel.tableName);
};