const { google } = require('googleapis');

// Define the Google Sheets API configuration and authentication setup
class GoogleSheetsService {
    constructor() {
        this.auth = null;
        this.sheets = google.sheets({ version: 'v4', auth: this.auth });
    }

    async authenticate() {
        // TODO: Add your OAuth 2.0 authentication here
        // You can use service account key or user consent
        const auth = new google.auth.GoogleAuth({
            keyFile: 'path/to/your-service-account-key.json', // specify your path to service account key file
            scopes: ['https://www.googleapis.com/auth/spreadsheets']
        });
        this.auth = await auth.getClient();
        this.sheets = google.sheets({ version: 'v4', auth: this.auth });
    }

    // Example method to read data from a spreadsheet
    async readSpreadsheet(spreadsheetId, range) {
        const response = await this.sheets.spreadsheets.values.get({
            spreadsheetId,
            range,
        });
        return response.data.values;
    }

    // Example method to write data to a spreadsheet
    async writeSpreadsheet(spreadsheetId, range, values) {
        const resource = { values };
        const response = await this.sheets.spreadsheets.values.update({
            spreadsheetId,
            range,
            valueInputOption: 'RAW',
            resource,
        });
        return response.data;
    }
}

module.exports = new GoogleSheetsService();