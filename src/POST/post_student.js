const { studentList } = require("../../data/studentList");

function post_student(req, res) {
  const newStudent = {
    id: Date.now(),
    name: req.body.name,
    enrollNum: req.body.enrollNum,
    course: req.body.course,
    year: req.body.year,
  };
  studentList.push(newStudent);
  res.status(200).send({
    message: `ID: ${newStudent.id}, Name: ${newStudent.name}, Enrollment Number: ${newStudent.enrollNum}, Course: ${newStudent.course}, Year: ${newStudent.year}`,
  });
}

module.exports = post_student;
