const { app, port } = require("./modules/express");
const mongoose = require("./modules/mongoose");
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

// book methods
app.delete("/book/:id", delete_book);
app.post("/book", async (req, res) => {
  const { title, author, year, genre } = req.body;
  const newBook = await post_book(title, author, year, genre);
  if (result.success) {
    res
      .status(200)
      .send({ message: "Livro criado com sucesso! ", book: newBook });
  } else {
    res
      .status(500)
      .send({ message: "Livro NAO CRIADO com sucesso! ", book: newBook });
  }
});

app.put("/book/:id", put_book);
app.get("/books", async(req, res) => {
  const books = await get_book();
  res.status(200).send(books);
});


// rent methods
app.delete("/rent/:id", delete_rent);
app.post("/rent", async (req, res) => {
  const { bookId, studentId } = req.body;
  const newRent = await post_rent(bookId, studentId);
  if (result.success) {
    res
      .status(200)
      .send({ message: "Aluguel criado com sucesso! ", rent: newRent });
  } else {
    res
      .status(500)
      .send({ message: "Aluguel NAO CRIADO com sucesso! ", rent: newRent });
  }
});

app.put("/rent/:id", put_rent);
app.get("/rents", async(req, res) => {
  const rents = await get_rent();
  res.status(200).send(rents);
});


// student methods
app.delete("/student/:id", delete_student);
app.post("/student", async (req, res) => {
  const { name, enrollNum, course, year } = req.body;
  const newStudent = await post_student(name, enrollNum, course, year);
  if(result.success) {
    res
      .status(200)
      .send({ message: "Estudante criado! ", student: newStudent });
  } else {
    res
      .status(500)
      .send({ message: "Estudante NAO CRIADO! ", student: newStudent });
  }
});

app.put("/student/:id", put_student);
app.get("/students", async(req, res) => {
  const students = await get_student();
  res.status(200).send(students);
});
