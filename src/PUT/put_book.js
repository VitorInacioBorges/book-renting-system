const mongoose = require("../../modules/mongoose");
const { Book } = require("../../models/book");

const put_book = async (id, title, author, year, genre) => {
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
};

module.exports = put_book;
