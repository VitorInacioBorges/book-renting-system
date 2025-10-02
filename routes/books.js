const express = require("../modules/express");
const router = express.createRouter();

// Import book operations
const delete_book = require("../src/DELETE/delete_book");
const post_book = require("../src/POST/post_book");
const put_book = require("../src/PUT/put_book");
const get_book = require("../src/GET/get_book");

// GET /books - Get all books
router.get("/", async (req, res) => {
  try {
    const books = await get_book();
    res.status(200).send(books);
  } catch (error) {
    res
      .status(500)
      .send({ message: "Erro ao buscar livros", error: error.message });
  }
});

// POST /book - Create a new book
router.post("/", async (req, res) => {
  try {
    const { title, author, year, genre } = req.body;
    const result = await post_book(title, author, year, genre);
    if (result && result.success) {
      res
        .status(201)
        .send({ message: "Livro criado com sucesso!", book: result.book });
    } else {
      res
        .status(400)
        .send({ message: "Erro ao criar livro", error: result.error });
    }
  } catch (error) {
    res
      .status(500)
      .send({ message: "Erro interno do servidor", error: error.message });
  }
});

// PUT /book/:id - Update a book
router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { title, author, year, genre } = req.body;
    const updatedBook = await put_book(id, title, author, year, genre);
    if (updatedBook) {
      res
        .status(200)
        .send({ message: "Livro atualizado com sucesso!", book: updatedBook });
    } else {
      res.status(404).send({
        message: "Livro não encontrado ou não pôde ser atualizado",
        book: null,
      });
    }
  } catch (error) {
    res
      .status(500)
      .send({ message: "Erro interno do servidor", error: error.message });
  }
});

// DELETE /book/:id - Delete a book
router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deletedBook = await delete_book(id);
    if (deletedBook) {
      res
        .status(200)
        .send({ message: "Livro deletado com sucesso!", book: deletedBook });
    } else {
      res.status(404).send({ message: "Livro não encontrado", book: null });
    }
  } catch (error) {
    res
      .status(500)
      .send({ message: "Erro interno do servidor", error: error.message });
  }
});

module.exports = router;
