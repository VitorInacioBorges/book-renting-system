const express = require("express");
const app = express();
const port = 4040;

app.use(express.json());

module.exports = { app, port };
