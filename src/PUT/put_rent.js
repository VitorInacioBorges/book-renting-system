const { rentedList } = require("../../data/rentedList");

function put_rent(req, res) {
  if (rentedList.length < 1) {
    res.status(200).send({ message: "Empty list!" });
  } else {
    const id = req.params.id;
    let index = rentedList.findIndex((rent) => rent.id == id);
    rentedList[index] = {
      id: id,
      bookId: req.body.bookId,
      studentId: req.body.studentId,
      rentDate: req.body.rentDate,
      returnDate: req.body.returnDate,
    };
    res.status(200).send({ message: "Rent updated succesfully!" });
  }
}

module.exports = put_book;
