const mongoose = require("../../modules/mongoose");
const { Book } = require("../../data/schemas/book");

const put_book = async(id, title, author, year, genre) => {
  try {
    const updatedBook = await Book.findByIdAndUpdate(
      id,
      { title, author, year, genre },
      { new: true, runValidators: true }
    );
    return updatedBook;
  } catch (error) {
    console.error("Erro ao atualizar o livro: ", error.message);
    throw error;
  }
}

/*
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
*/

module.exports = put_book;
