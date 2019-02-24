require('./config/config');

const express = require('express');
const request = require('request');
const buildUrl = require('build-url');

const port = process.env.PORT || 3000;

const app = express();

app.use(express.static(__dirname + '/view'));

app.use((req, res, next) => {
  res.append('Access-Control-Allow-Origin', ['*']);
  res.append('Access-Control-Allow-Methods', 'GET');
  res.append('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

app.get('/', (req, res) => {
  res.send('index.html');
});

app.get('/api/cryptocurrencies', (req, res) => {
  const queryStrings = req.query;
  const url = buildUrl('https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest', {
    queryParams: queryStrings
  })
  console.log(url);
  request({
    headers: {
      'X-CMC_PRO_API_KEY': process.env.API_KEY
    },
    url: url,
    json: true,
    gzip: true
  }, (error, response, body) => {
    if (error) {
      res.send({
        'results': [],
        'errorMessage': 'Unable to handle request'
      });
    } else if (response.statusCode === 400) {
      res.send({
        'results': [],
        'errorMessage': 'Unable to fetch cryptocurrencies'
      });
    } else if (response.statusCode === 200) {
      res.send(body);
    }
  });
});

app.get('/api/cryptocurrencies/:id', (req, res) => {
  const id = req.params.id;
  const queryStrings = req.query;
  const url = buildUrl('https://pro-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest', {
    queryParams: { ...queryStrings, id }
  })
  request({
    headers: {
      'X-CMC_PRO_API_KEY': process.env.API_KEY
    },
    url: url,
    json: true,
    gzip: true
  }, (error, response, body) => {
    if (error) {
      res.send({
        'results': [],
        'errorMessage': 'Unable to handle request'
      });
    } else if (response.statusCode === 400) {
      res.send({
        'results': [],
        'errorMessage': 'Unable to fetch cryptocurrencies'
      });
    } else if (response.statusCode === 200) {
      res.send(body);
    }
  });
});

app.listen(port, () => {
  console.log(`Server is up on port ${port}`);
});
