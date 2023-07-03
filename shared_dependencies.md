1. React: Used in "src/App.js", "src/index.js", "src/components/DownloadButton.js", "src/components/FinancialDataDisplay.js". It's the main library for building the user interface.

2. ReactDOM: Used in "src/index.js" for rendering the React components.

3. DownloadButton Component: Exported from "src/components/DownloadButton.js" and used in "src/App.js".

4. FinancialDataDisplay Component: Exported from "src/components/FinancialDataDisplay.js" and used in "src/App.js".

5. FinancialDataService: Exported from "src/services/FinancialDataService.js" and used in "src/App.js", "src/components/DownloadButton.js", "src/components/FinancialDataDisplay.js".

6. DatabaseService: Exported from "src/services/DatabaseService.js" and used in "server/server.js", "server/routes/financialDataRoutes.js", "server/controllers/financialDataController.js".

7. Scraper: Exported from "src/utils/Scraper.js" and "server/utils/Scraper.js". Used for scraping data from websites.

8. FinancialDataModel: Exported from "server/models/FinancialDataModel.js" and used in "server/controllers/financialDataController.js", "server/database/migrations/create_financial_data_table.js", "server/database/seeds/financial_data_seeds.js".

9. Express: Used in "server/server.js", "server/routes/financialDataRoutes.js" for creating the server and handling routes.

10. financialDataRoutes: Exported from "server/routes/financialDataRoutes.js" and used in "server/server.js".

11. financialDataController: Exported from "server/controllers/financialDataController.js" and used in "server/routes/financialDataRoutes.js".

12. Connection: Exported from "server/database/connection.js" and used in "server/database/migrations/create_financial_data_table.js", "server/database/seeds/financial_data_seeds.js".

13. DOM Elements: "download-button" (id in "src/components/DownloadButton.js"), "financial-data-display" (id in "src/components/FinancialDataDisplay.js").

14. Message Names: "DOWNLOAD_FINANCIAL_DATA" (used in "src/components/DownloadButton.js" and "src/services/FinancialDataService.js"), "DISPLAY_FINANCIAL_DATA" (used in "src/components/FinancialDataDisplay.js" and "src/services/FinancialDataService.js").

15. Function Names: "downloadData" (in "src/components/DownloadButton.js" and "src/services/FinancialDataService.js"), "displayData" (in "src/components/FinancialDataDisplay.js" and "src/services/FinancialDataService.js"), "scrapeData" (in "src/utils/Scraper.js" and "server/utils/Scraper.js"), "connectToDatabase" (in "server/database/connection.js" and "server/server.js").