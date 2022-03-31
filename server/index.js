const express = require('express');
const path = require('path');
require('dotenv').config();

const PORT = process.env.PORT || 3000;

const axios = require('axios');

const app = express();
app.use(express.json());

app.use(express.static(path.join(__dirname, '../client/dist')));

app.all('/*', (req, res) => {
  const {
    method,
    url,
    body: data,
    query: params,
  } = req;

  if (url === '/favicon.ico') {
    return res.status(204).end();
  }

  const optionsUrl = `${process.env.APIURL}${url.split('?')[0]}`;

  console.log(`Serving ${req.method} to ${url}`);

  const options = {
    method,
    url: optionsUrl,
    headers: { Authorization: process.env.APITOKEN },
    data,
    params,
  };

  return axios(options)
    .then((response) => {
      res.status(200).send(response.data);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send(err);
    });
});

app.listen(PORT, () => {
  console.log(`Listening to port : ${PORT}`);
});
