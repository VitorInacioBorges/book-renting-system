const express = require("../modules/express");
const router = express.createRouter();

// Import rent operations
const delete_rent = require("../src/DELETE/delete_rent");
const post_rent = require("../src/POST/post_rent");
const put_rent = require("../src/PUT/put_rent");
const get_rent = require("../src/GET/get_rent");

// GET /rents - Get all rents
router.get("/", async (req, res) => {
  try {
    const rents = await get_rent();
    res.status(200).send(rents);
  } catch (error) {
    res
      .status(500)
      .send({ message: "Erro ao buscar aluguéis", error: error.message });
  }
});

// POST /rent - Create a new rent
router.post("/", async (req, res) => {
  try {
    const { bookId, studentId } = req.body;
    const result = await post_rent(bookId, studentId);
    if (result && result.success) {
      res
        .status(201)
        .send({ message: "Aluguel criado com sucesso!", rent: result.rent });
    } else {
      res
        .status(400)
        .send({ message: "Erro ao criar aluguel", error: result.error });
    }
  } catch (error) {
    res
      .status(500)
      .send({ message: "Erro interno do servidor", error: error.message });
  }
});

// PUT /rent/:id - Update a rent
router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { bookId, studentId } = req.body;
    const updatedRent = await put_rent(id, bookId, studentId);
    if (updatedRent) {
      res.status(200).send({
        message: "Aluguel atualizado com sucesso!",
        rent: updatedRent,
      });
    } else {
      res.status(404).send({
        message: "Aluguel não encontrado ou não pôde ser atualizado",
        rent: null,
      });
    }
  } catch (error) {
    res
      .status(500)
      .send({ message: "Erro interno do servidor", error: error.message });
  }
});

// DELETE /rent/:id - Delete a rent
router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deletedRent = await delete_rent(id);
    if (deletedRent) {
      res
        .status(200)
        .send({ message: "Aluguel deletado com sucesso!", rent: deletedRent });
    } else {
      res.status(404).send({ message: "Aluguel não encontrado", rent: null });
    }
  } catch (error) {
    res
      .status(500)
      .send({ message: "Erro interno do servidor", error: error.message });
  }
});

module.exports = router;
