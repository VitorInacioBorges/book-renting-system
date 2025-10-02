const express = require("../modules/express");
const router = express.createRouter();

// Import student operations
const delete_student = require("../src/DELETE/delete_student");
const post_student = require("../src/POST/post_student");
const put_student = require("../src/PUT/put_student");
const get_student = require("../src/GET/get_student");

// GET /students - Get all students
router.get("/", async (req, res) => {
  try {
    const students = await get_student();
    res.status(200).send(students);
  } catch (error) {
    res
      .status(500)
      .send({ message: "Erro ao buscar estudantes", error: error.message });
  }
});

// POST /student - Create a new student
router.post("/", async (req, res) => {
  try {
    const { name, enrollNum, course, year } = req.body;
    const result = await post_student(name, enrollNum, course, year);
    if (result && result.success) {
      res.status(201).send({
        message: "Estudante criado com sucesso!",
        student: result.student,
      });
    } else {
      res
        .status(400)
        .send({ message: "Erro ao criar estudante", error: result.error });
    }
  } catch (error) {
    res
      .status(500)
      .send({ message: "Erro interno do servidor", error: error.message });
  }
});

// PUT /student/:id - Update a student
router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { name, enrollNum, course, year } = req.body;
    const updatedStudent = await put_student(id, name, enrollNum, course, year);
    if (updatedStudent) {
      res.status(200).send({
        message: "Estudante atualizado com sucesso!",
        student: updatedStudent,
      });
    } else {
      res.status(404).send({
        message: "Estudante não encontrado ou não pôde ser atualizado",
        student: null,
      });
    }
  } catch (error) {
    res
      .status(500)
      .send({ message: "Erro interno do servidor", error: error.message });
  }
});

// DELETE /student/:id - Delete a student
router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deletedStudent = await delete_student(id);
    if (deletedStudent) {
      res.status(200).send({
        message: "Estudante deletado com sucesso!",
        student: deletedStudent,
      });
    } else {
      res.status(404).send({
        message: "Estudante não encontrado",
        student: null,
      });
    }
  } catch (error) {
    res
      .status(500)
      .send({ message: "Erro interno do servidor", error: error.message });
  }
});

module.exports = router;
