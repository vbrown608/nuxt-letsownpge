const fs = require('fs');

const { GoogleSpreadsheet } = require('google-spreadsheet');
const sgMail = require('@sendgrid/mail');

exports.handler = async (event, context, callback) => {
  try {
    const payload = JSON.parse(event.body).payload;
    await addSubmissionToGoogleSheet(payload);
    await sendConfirmationEmail(payload);
    return {
      statusCode: 200,
      body: JSON.stringify({
        message: `row added`,
      }),
    };
  } catch (e) {
    console.error(e);
    return {
      statusCode: 500,
      body: e.toString(),
    };
  }
};

const addSubmissionToGoogleSheet = async function (payload) {
  const doc = new GoogleSpreadsheet(process.env.GOOGLE_SHEET_ID);
  await doc.useServiceAccountAuth({
    client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
    private_key: JSON.parse(process.env.GOOGLE_PRIVATE_KEY),
  });
  await doc.loadInfo();
  const sheet = doc.sheetsByIndex[0];

  const fields = payload.ordered_human_fields.map(o => o.value);
  await sheet.addRow(fields);
  console.log(`Added row to Google Sheet`);
};

const sendConfirmationEmail = function (payload) {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
  const html = thanksHTML(payload.data['first-name']);
  const text = html.replace(/<[^>]*>/g, '');
  const msg = {
    to: payload.data.email,
    from: 'vivian.brown@gmail.com',
    subject: 'Thank you for joining us to own PG&E',
    html,
    text,
  };
  sgMail.send(msg).then(() => {
    console.log(`Sent confirmation email`);
  });
};

const thanksHTML = function (name) {
  const tpl = fs.readFileSync('thanks.html');
  return `<p>${name}</p>` + tpl;
};
