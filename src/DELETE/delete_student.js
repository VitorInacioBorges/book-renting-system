const mongoose = require("../../modules/mongoose");
const { Student } = require("../../models/student");

const delete_student = async (id) => {
  try {
    return await Student.findByIdAndDelete(id);
  } catch (error) {
    console.error("Erro ao deletar o estudante! ", error.message);
    throw error;
  }
};

module.exports = delete_student;
