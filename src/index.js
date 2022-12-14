const express = require("express");
const bodyParser = require('body-parser');

const {PORT} = require('./config/serverConfig.js');

const CityRepository = require("./repository/city-repository");

const setupAndstartServer = async function () {
  const app = express();

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({extended: true}));

  app.listen(PORT, async function () {
    console.log("Server started at", PORT);
    const repo = new CityRepository();
    repo.createCity({name:"New Delhi"});
  });
};

setupAndstartServer();
