const mongoose = require("../../modules/mongoose");
const { Student } = require("../../models/student");

const put_student = async (id, name, enrollNum, course, year) => {
  try {
    const updatedStudent = await Student.findByIdAndUpdate(
      id,
      { name, enrollNum, course, year },
      { new: true, runValidators: true }
    );
    return updatedStudent;
  } catch (error) {
    console.error("Erro ao atualizar o estudante: ", error.message);
    throw error;
  }
};

module.exports = put_student;
