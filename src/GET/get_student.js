const mongoose = require("../../modules/mongoose");
const { Student } = require("../../models/student");

const get_student = async () => {
  try {
    return await Student.find();
  } catch (error) {
    console.error("Error ao buscar o Aluno: ", error.message);
    throw error;
  }
};

module.exports = get_student;
