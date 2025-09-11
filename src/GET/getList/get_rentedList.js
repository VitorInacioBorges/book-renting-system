const { rentedList } = require("../../../data/rentedList");

function get_rentedList(req, res) {
  if (rentedList.length < 1) {
    return res.status(200).send({ message: "Empty list!" });
  } else {
    return res.status(200).send({ rentedList });
  }
}

module.exports = get_rentedList;
