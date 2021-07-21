//#region require
  const customTokenModule = require('./google-auth');
  const express = require('express');
  const cors = require('cors');
  // spreadsheets
  const { GoogleSpreadsheet } = require('google-spreadsheet');
  // google auth
  const { OAuth2Client } = require('google-auth-library');
//#endregion

//#region setup

// google oAuth keys
const keys = require('./oauth2.keys.json');

// auth tokens
// TODO init db to fetch tokens from DB
const token = require('./auth-tokens.json');
const { response } = require('express');

const oauthClient = new OAuth2Client({
  clientId: keys.web.client_id,
  clientSecret: keys.web.client_secret
});

oauthClient.credentials.access_token = token.access_token;
oauthClient.credentials.refresh_token = token.refresh_token;
oauthClient.credentials.expiry_date = token.expiry_date; // Unix epoch milliseconds

oauthClient.on('tokens', credentials => {
  console.log(credentials.access_token);
  console.log(credentials.scope);
  console.log(credentials.expiry_date);
  console.log(credentials.token_type); // will always be 'Bearer'
})

const doc = new GoogleSpreadsheet('1TKVPqyPYtpOpv6ikj-19bs0GyUWIbVED90O4HsEjFFk');
doc.useOAuth2Client(oauthClient);

  
//#endregion

//#region spreadsheet functions

GetHeaderValues = async function(columnName)
{
  await doc.loadInfo(); // loads document properties and worksheets
  const sheet = doc.sheetsByIndex[1]; // or use doc.sheetsById[id] or doc.sheetsByTitle[title]
  options = {
    offset : 0,
    limit : 30
  }
  const rows = await sheet.getRows();
  var headerValues = []

  rows.forEach(row => {
    headerValues.push(row[columnName])
  })

  return headerValues
}

GetHeaders = async function ()
{
  await doc.loadInfo(); // loads document properties and worksheets
  const sheet = doc.sheetsByIndex[1]; // or use doc.sheetsById[id] or doc.sheetsByTitle[title]
  options = {
    offset : 0,
    limit : 30
  }

  const rows = await sheet.getRows();
  var allData = []

  rows.forEach(row =>{
    allData.push(row._rawData)
  })
  // const header = await sheet.loadHeaderRow();
  
  console.log(sheet.headerValues);
  return sheet.headerValues

}
GetHeaders()

GetSheetData = async function()
{
  await doc.loadInfo(); // loads document properties and worksheets
  const sheet = doc.sheetsByIndex[1]; // or use doc.sheetsById[id] or doc.sheetsByTitle[title]
  options = {
    offset : 0,
    limit : 30
  }

  const rows = await sheet.getRows();
  var allData = []
  
  console.log(rows[0]);
  
  
  
  rows.forEach(row =>{
    var object = {}
    for (let index = 0; index < row._rawData.length; index++) {
      object[row._sheet.headerValues[index]] = row._rawData[index]
    }
    allData.push(object)
  })

  return allData
}
//#endregion

//#region APIs

//#region express init
const app = express();
const port = 3000;
const www = './';

app.use(cors());
app.use(express.static(www));
console.log(`serving ${www}`);

//#endregion end express init

app.get('/header/all',async (req, res) => {
  var result = await GetHeaders()
  var data = {
    headers : result
  }
  res.send(data)
});

app.get('/header/',async (req, res) => {
  // query parameter name contains column name

  var headerValues = await GetHeaderValues(req.query.name);
  var response = {
    data : headerValues
  }

  res.send(response)
});

app.get('/sheetdata/',async (req, res) => {
  // query parameter name contains column name

  var headerValues = await GetSheetData();
  var response = {
    rows : headerValues
  }

  res.send(response)
});

app.listen(port, () => console.log(`listening on http://localhost:${port}`));

//#endregion
