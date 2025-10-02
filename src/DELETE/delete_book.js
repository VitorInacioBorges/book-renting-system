const mongoose = require("../../modules/mongoose");
const { Book } = require("../../models/book");

const delete_book = async (id) => {
  try {
    return await Book.findByIdAndDelete(id);
  } catch (error) {
    console.error("Erro ao deletar o livro! ", error.message);
    throw error;
  }
};

module.exports = delete_book;
