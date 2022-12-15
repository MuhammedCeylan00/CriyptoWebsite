const express = require("express");
const app = express();
const axios = require("axios");
const cors = require("cors");
var bodyParser = require('body-parser');

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(8081);
app.use(cors());

const key = "139fbf88-d3ff-4c1b-ac65-bf45f8c48209";

// respond with "hello world" when a GET request is made to the homepage
app.get("", (req, res) => {
  res.send("hello world");
});

let cryptocurrencies = {};

const getCryptos = async () => {
  let response = await axios.get(
    "https://pro-api.coinmarketcap.com/v1/cryptocurrency/map?limit=40",
    {
      headers: {
        "X-CMC_PRO_API_KEY": key,
      },
    }
  );

  cryptocurrencies = response.data;
};

getCryptos();

app.get("/get-cryptos", cors(), (req, res) => {
  res.send(cryptocurrencies);
});

app.post("/get-crypto-detail", cors(), async (req, res) => {
  let id = req.body.id
  const queryString = "https://pro-api.coinmarketcap.com/v2/cryptocurrency/info?id=" + id
  const response = await axios.get(queryString,
    {
      headers: {
        "X-CMC_PRO_API_KEY": key,
      },
    }
  );
  res.send(response.data)
  console.log(response.data)
});
