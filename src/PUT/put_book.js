const { bookList } = require("../../data/bookList");

function put_book(req, res) {
  if (bookList.length < 1) {
    res.status(200).send({ message: "Empty list!" });
  } else {
    const id = req.params.id;
    let index = bookList.findIndex((book) => book.id == id);
    bookList[index] = {
      id: id,
      title: req.body.title,
      author: req.body.author,
      year: req.body.year,
      genre: req.body.genre,
    };
    res.status(200).send({ message: "Book updated succesfully!" });
  }
}

module.exports = put_book;
