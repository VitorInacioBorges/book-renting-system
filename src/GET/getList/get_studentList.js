const { studentList } = require("../../../data/studentList");

function get_studentList(req, res) {
  if (studentList.length < 1) {
    return res.status(200).send({ message: "Empty list!" });
  } else {
    return res.status(200).send({ studentList });
  }
}

module.exports = get_studentList;
