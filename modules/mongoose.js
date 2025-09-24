const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://Vitor:vitor123@usersdatabase.5qgpsge.mongodb.net/?retryWrites=true&w=majority&appName=UsersDatabase"
);

mongoose.connection.once("open", () => {
  console.log("Conectado ao MongoDB!!!");
});

mongoose.connection?.on('error', (err) => {
  console.error(`Error to connect - MongoDB: Error: ${err.message}`);
});

module.exports = mongoose;