const { app, port } = require("./modules/express");
const mongoose = require('mongoose');
const delete_book = require("./src/DELETE/delete_book");
const delete_rent = require("./src/DELETE/delete_rent");
const delete_student = require("./src/DELETE/delete_student");
const post_book = require("./src/POST/post_book");
const post_rent = require("./src/POST/post_rent");
const post_student = require("./src/POST/post_student");
const put_book = require("./src/PUT/put_book");
const put_rent = require("./src/PUT/put_rent");
const put_student = require("./src/PUT/put_student");
const get_book = require("./src/GET/get_book");
const get_rent = require("./src/GET/get_rent");
const get_student = require("./src/GET/get_student");

mongoose.connect(
  "mongodb+srv://Vitor:vitor123@usersdatabase.5qgpsge.mongodb.net/?retryWrites=true&w=majority&appName=UsersDatabase"
);

mongoose.connection.once("open", () => {
  console.log("Conectado ao MongoDB!!!");
});

mongoose.connection?.on('error', (err) => {
  console.error(`Error to connect - MongoDB: Error: ${err.message}`);
});

app.listen(port, () => {
  console.log(`Listening on port ${port}!!!`);
});

// book methods
app.delete("/book/:id", delete_book);
app.post("/book", post_book);
app.put("/book/:id", put_book);
app.get("/books", get_book);

// rent methods
app.delete("/rent/:id", delete_rent);
app.post("/rent", post_rent);
app.put("/rent/:id", put_rent);
app.get("/rents", get_rent);

// student methods
app.delete("/student/:id", delete_student);
app.post("/student", post_student);
app.put("/student/:id", put_student);
app.get("/students", get_student);
