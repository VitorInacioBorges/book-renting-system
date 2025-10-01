const mongoose = require("../../modules/mongoose");
const { Student } = require("../../data/schemas/student");

const get_student = async () => {
  try {
    return await Student.find();
  } catch (error) {
    console.error("Error ao buscar o Aluno: ", error.message);
    throw error;
  }
}

/*
function get_student(req, res) {
  if (studentList.length < 1) {
    return res.status(200).send({ message: "Empty list!" });
  } else {
    const { name, enrollNum, course } = req.query;
    let results = studentList;

    if (name) {
      results = results.filter((student) => student.name == name);
    }
    if (enrollNum) {
      results = results.filter((student) => student.enrollNum == enrollNum);
    }
    if (course) {
      results = results.filter((student) =>
        student.course.toLowerCase().includes(course.toLowerCase())
      );
    }
    res.status(200).send({ results });
  }
}
*/
module.exports = get_student;
