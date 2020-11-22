const { GoogleSpreadsheet } = require('google-spreadsheet')
 
exports.handler = async (event, context, callback) => {
  try {
    const doc = new GoogleSpreadsheet(process.env.GOOGLE_SHEET_ID)
    await doc.useServiceAccountAuth({
      client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
      private_key: process.env.GOOGLE_PRIVATE_KEY,
    });
    await doc.loadInfo()
    const sheet = doc.sheetsByIndex[0]

    const req = JSON.parse(event.body)
    const fields = req.payload.ordered_human_fields.map(o => o.value)
    await sheet.addRow(fields)
 
    return {
      statusCode: 200,
      body: JSON.stringify({
        message: `row added`,
      }),
    }
  } catch (e) {
    console.error(e)
    return {
      statusCode: 500,
      body: e.toString(),
    }
  }
}
