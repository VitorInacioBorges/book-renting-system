const { bookList } = require("../../data/bookList");

function post_book(req, res) {
  const newBook = {
    id: Date.now(),
    title: req.body.title,
    author: req.body.author,
    year: req.body.year,
    genre: req.body.genre,
  };
  bookList.push(newBook);
  res.status(200).send({
    message: `ID: ${newBook.id}, Title: ${newBook.title}, Author: ${newBook.author}, Year: ${newBook.year}, Genre: ${newBook.genre}`,
  });
}

module.exports = post_book;
