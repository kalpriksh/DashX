//#region require
const customTokenModule = require('./google-auth'); 

const express = require('express');
// const http = require('http');
// const url = require('url');
// const open = require('open');
// const destroyer = require('server-destroy');

//#endregion

// spreadsheets
const { GoogleSpreadsheet } = require('google-spreadsheet');

// google auth
const { OAuth2Client } = require('google-auth-library');

// google oAuth keys
const keys = require('./oauth2.keys.json');

const oauthClient = new OAuth2Client({
  clientId: keys.web.client_id,
  clientSecret: keys.web.client_secret
});

oauthClient.credentials.access_token = "ya29.a0ARrdaM_Wn25WeDoEaV_PKdFn781-liymbwBUZm4t8c6CIszLSpKcJQo7Pqu8YVRlkpDVR3RekepxGfdWc799AirKdNtoDwlBoHBIlWYame-FaQXwUDXx_PFkiKiygTZ7vL_mVMjth9MmPwA4npoP2XmV8zM_";
oauthClient.credentials.refresh_token = "1//0gF77WntnIFThCgYIARAAGBASNwF-L9Ir9J3GzcnugiUwvsfLZDbL57kabYrVYIuzu84uQ3fGrYc3tde5oI6cOl9muFI9GFUMRuM";
oauthClient.credentials.expiry_date = 1626380757246; // Unix epoch milliseconds

oauthClient.on('tokens', credentials => {
  console.log(credentials.access_token);
  console.log(credentials.scope);
  console.log(credentials.expiry_date);
  console.log(credentials.token_type); // will always be 'Bearer'
})

const doc = new GoogleSpreadsheet('1TKVPqyPYtpOpv6ikj-19bs0GyUWIbVED90O4HsEjFFk');
doc.useOAuth2Client(oauthClient);

test = async function ()
{
  await doc.loadInfo(); // loads document properties and worksheets
  console.log(doc.title);
  const sheet = doc.sheetsByIndex[1]; // or use doc.sheetsById[id] or doc.sheetsByTitle[title]
  console.log(sheet.title);
  console.log(sheet.rowCount);
  options = {
    offset : 0,
    limit : 30
  }
  const rows = await sheet.getRows();
  const header = await sheet.loadHeaderRow();
  console.log(sheet.headerValues);
  // rows.forEach(row => {
  //   console.log(row.Country);
  // })
}

test()

// const oauthClient = new OAuth2Client(
//   keys.web.client_id,
//   keys.web.client_secret,
//   keys.web.redirect_uris[0]
//   );



//#region express server

// const app = express();
// const port = 3000;
// const www = './';

// app.use(express.static(www));
// console.log(`serving ${www}`);

// app.get('/test', (req, res) => {
//   res.sendFile(`index.html`, { root: www });
// });

// app.listen(port, () => console.log(`listening on http://localhost:${port}`));

//#endregion
