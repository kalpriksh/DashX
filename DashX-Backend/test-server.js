const express = require('express');

const app = express();
const port = 3001;
const www = './';

app.use(express.static(www));
console.log(`serving ${www}`);

app.get('/test', (req, res) => {
  res.sendFile(`index.html`, { root: www });
});

app.listen(port, () => console.log(`listening on http://localhost:${port}`));