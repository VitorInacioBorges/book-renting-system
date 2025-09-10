const { rentedList } = require("../../data/rentedList");

function post_rent(req, res) {
  const newRent = {
    id: Date.now(),
    bookId: req.body.bookId,
    studentId: req.body.studentId,
    rentDate: req.body.rentDate,
    returnDate: req.body.returnDate,
  };
  rentedList.push(newRent);
  res.status(200).send({
    message: `ID: ${newRent.id}, Book ID: ${newRent.bookId}, Student ID: ${newRent.studentId}, Rent Date: ${newRent.rentDate}, Return Date: ${newRent.returnDate}`,
  });
}

module.exports = post_rent;
