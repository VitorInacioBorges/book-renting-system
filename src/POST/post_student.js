const mongoose = require("../../modules/mongoose");
const { Student } = require("../../data/schemas/student");

const post_student = async (name, enrollNum, course, year) => {
  try {
    const newStudent = new Student({
      name,
      enrollNum,
      course,
      year,
    });
    const savedStudent = await newStudent.save();

    return {
      success: true,
      student: savedStudent,
    };
  } catch (error) {
    console.error("Erro na criação... ", error);

    return {
      success: false,
      error: error.message,
    };
  }
};

module.exports = post_student;
