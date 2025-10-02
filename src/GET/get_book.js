const mongoose = require("../../modules/mongoose");
const { Book } = require("../../models/book");

const get_book = async () => {
  try {
    return await Book.find();
  } catch (error) {
    console.log("Erro ao buscar o Livro: ", error.message);
    throw error;
  }
};

module.exports = get_book;
