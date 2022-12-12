const express = require("express");

const setupAndstartServer = async function () {
  const app = express();
  const PORT = 3000;

  app.listen(PORT, function () {
    console.log("Server started at", PORT);
  });
};

setupAndstartServer();
