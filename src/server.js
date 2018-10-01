const express = require('express');
const app = express();
const path = require('path');

app.listen(3000, function() {
  console.log('listening on 3000')
})
app.get('/', (req, res) => {
  let reqPath = path.join(__dirname, '../dist/index.html');
  res.sendFile(reqPath)
})
app.get('/main.js', (req, res) => {
  let reqPath = path.join(__dirname, '../dist/main.js');
  res.sendFile(reqPath)
})
