const mongoose = require("mongoose");
const { Book } = require("../../data/schemas/book");

const post_book = async (title, author, year, genre) => {
  try {
    const newBook = new Book ({
      title,
      author,
      year,
      genre
    });
    const savedBook = await newBook.save();
    return { success: true, book: savedBook };

  } catch (error) {
    console.error("Erro na criação... ", error);

    return { success: false, error: error.message };
  }
};

module.exports = { post_book };
