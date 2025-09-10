const { bookList } = require("../../data/bookList");

function put_book(req, res) {
  if (bookList.length < 1) {
    res.status(200).send({ message: "Empty list!" });
  } else {
    const id = req.params.id;
    let index = bookList.findIndex((book) => book.id == id);
    bookList[index] = {
      id: id,
      name: req.body.name,
      age: req.body.age,
      gender: req.body.gender,
      cpf: req.body.cpf,
    };
    res.status(200).send({ message: "Book updated succesfully!" });
  }
}

module.exports = put_book;
