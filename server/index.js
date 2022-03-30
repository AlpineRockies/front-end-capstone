const express = require('express');
const path = require('path');
require('dotenv').config();

const PORT = process.env.PORT || 3000;

const axios = require('axios');

const app = express();
app.use(express.json());
app.use(express.static(path.join(__dirname, '../client/dist')));

app.all('/*', (req, res) => {
  const { method, url, body: data } = req;
  const options = {
    method,
    url,
    headers: { Authorization: process.env.APITOKEN },
    data,
  };

  console.log('i am in server req', options);

  options.url = `${process.env.APIURL}${url}`;

  return axios(options)
    .then((response) => {
      res.status(200).send(response.data);
      console.log('hit in server', response.data);
    })
    .catch((err) => {
      console.log('Err in server request handler all', err);
    });
});

app.listen(PORT, () => {
  console.log('Listening to port');
});
