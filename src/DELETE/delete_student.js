const { studentList } = require("../../data/studentList");

function delete_student(req, res) {
  const id = req.body.id;
  for (let i = 0; i < studentList.length; i++) {
    if (studentList[i].id === id) {
      studentList.splice(i, 1);
      return res.status(200).send({
        message: `Student deleted succesfully!`,
      });
      break;
    }
    return res.status(200).send({
      message: "Student not found!",
    });
  }
}

module.exports = delete_student;
