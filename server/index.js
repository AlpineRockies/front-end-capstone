const express = require('express');
const path = require('path');
require('dotenv').config();

const PORT = process.env.PORT || 3000;

const axios = require('axios');

const app = express();
app.use(express.json());

app.use(express.static(path.join(__dirname, '../client/dist')));

app.all('/*', (req, res) => {
  console.log(`serving ${req.method}`);
  const { method, url, body: data } = req;
  const options = {
    method,
    url,
    headers: { Authorization: process.env.APITOKEN },
    data,
    params: req.query,
  };

  options.url = `${process.env.APIURL}${url}`;

  return axios(options)
    .then((response) => {
      res.status(200).send(response.data);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
});

app.listen(PORT, () => {
  console.log('Listening to port');
});
