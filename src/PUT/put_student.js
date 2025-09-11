const { studentList } = require("../../data/studentList");

function put_student(req, res) {
  if (studentList.length < 1) {
    res.status(200).send({ message: "Empty list!" });
  } else {
    const id = req.params.id;
    let index = studentList.findIndex((student) => student.id == id);
    studentList[index] = {
      id: id,
      name: req.body.name,
      enrollNum: req.body.enrollNum,
      course: req.body.course,
      year: req.body.year,
    };
    res.status(200).send({ message: "Student updated succesfully!" });
  }
}

module.exports = put_student;
