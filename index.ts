import express = require('express');
const app = express();

app.get('/', (_req, res) => {
  res.send('Hello Human Talks!');
});

app.listen(3000, () => {
  console.log('Server is up!');
});
