const { bookList } = require("../../data/bookList");

function get_bookList(req, res) {
  if (bookList.length < 1) {
    return res.status(200).send({ message: "Empty list!" });
  } else {
    return res.status(200).send({ bookList });
  }
}

module.exports = get_bookList;
