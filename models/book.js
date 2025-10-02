// model: formado por 2 parametros, o nome da collection e o schema
// schema: esqueleto do nosso documento no database

const mongoose = require("../../modules/mongoose");

const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  year: {
    type: Number,
    required: true,
  },
  genre: {
    type: String,
    required: true,
  },
});

const Book = mongoose.model("book", bookSchema);

module.exports = { Book };
