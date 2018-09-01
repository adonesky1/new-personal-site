
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();

app.use(bodyParser.json());
app.use(express.static(`${__dirname}/../client/dist`));

// app.get('/resume', function (req, res) {
//   res.sendFile(path.join(__dirname, '../JOHNJURESUME2018.pdf'));
// });

app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, '../client/dist/index.html'), function (err) {
    if (err) {
      res.status(500).send(err);
    }
  });
});

app.listen(process.env.PORT || 3000, () => {
  console.log('listening on port 3000');
});