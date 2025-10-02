const express = require("express");
const app = express();
const port = 4040;
const createRouter = () => express.Router();

app.use(express.json());

module.exports = {
  app,
  port,
  createRouter,
};
